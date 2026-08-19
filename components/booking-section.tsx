"use client"

import type React from "react"
import { useState } from "react"

type Status = "idle" | "submitting" | "success" | "error"

// Google Apps Script Web App endpoint (handles calendar read/write)
const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbxslFzGj8iY19jZsb4Eyb5tHTKigb9PLlrm1ocbPCm34YMA_BBhc8XIPOOrDtwZOMSY3w/exec"

const WORK_HOURS = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
]

const serviceOptions = [
  "Studio Rental",
  "Standard Session",
  "Baby Photography",
  "Couple / Family Session",
  "Pet Session",
  "Pre-Wedding Session",
  "Wedding Photography",
  "Event Photography",
]

export function BookingSection() {
  const [status, setStatus] = useState<Status>("idle")
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    serviceType: "",
    preferredDate: "",
  })
  const [busySlots, setBusySlots] = useState<string[]>([])
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [slotsLoading, setSlotsLoading] = useState(false)
  const [slotsMessage, setSlotsMessage] = useState("")

  function updateField(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleDateChange(dateStr: string) {
    updateField("preferredDate", dateStr)
    setSelectedTime(null)
    if (!dateStr) {
      setBusySlots([])
      setSlotsMessage("")
      return
    }
    setSlotsLoading(true)
    setSlotsMessage("Checking available times…")
    try {
      const res = await fetch(`${WEB_APP_URL}?date=${dateStr}`)
      const data = (await res.json()) as string[]
      setBusySlots(Array.isArray(data) ? data : [])
      setSlotsMessage("Schedule updated.")
    } catch {
      setBusySlots([])
      setSlotsMessage("Couldn't load times — you can still send a request.")
    } finally {
      setSlotsLoading(false)
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const cleanDigits = form.phone.replace(/[^0-9]/g, "")
    if (cleanDigits.length < 8) {
      setStatus("error")
      return
    }
    if (!selectedTime) {
      setStatus("error")
      return
    }

    setStatus("submitting")
    try {
      const body = new URLSearchParams()
      body.append("name", form.fullName)
      body.append("phone", form.phone)
      body.append("service", form.serviceType)
      body.append("date", form.preferredDate)
      body.append("time", selectedTime)

      const res = await fetch(WEB_APP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      })
      const data = await res.json()
      if (data.status !== "success" && !data.success) throw new Error(data.message || data.error || "Failed")

      setStatus("success")
      setForm({ fullName: "", phone: "", serviceType: "", preferredDate: "" })
      setSelectedTime(null)
      setBusySlots([])
      setSlotsMessage("")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="booking" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-28">
      <div className="mb-12 text-center">
        <p className="text-[11px] font-medium tracking-[0.35em] text-gold">RESERVE YOUR SPOT</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">Book a Session</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-foreground/60">
          Choose your service, pick a date, and select an available time. I&apos;ll confirm your booking and reserve
          your place in the studio.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left image with contained zoom-on-hover */}
        <div className="group h-[420px] w-full overflow-hidden md:h-full md:min-h-[560px]">
          <img
            src="/images/booking-portrait.png"
            alt="Behind the scenes: a fashion shoot framed on the back of a Canon camera in the studio"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>

        {/* Booking form card */}
        <div className="flex flex-col justify-center border border-foreground/10 bg-card p-8 md:p-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName" className="text-[10px] font-medium tracking-[0.25em] text-foreground/60">
                FULL NAME
              </label>
              <input
                id="fullName"
                type="text"
                required
                placeholder="Name Surname"
                value={form.fullName}
                onChange={(e) => updateField("fullName", e.target.value)}
                className="border-0 border-b border-foreground/20 bg-transparent pb-2 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-gold"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-[10px] font-medium tracking-[0.25em] text-foreground/60">
                PHONE NUMBER
              </label>
              <input
                id="phone"
                type="tel"
                required
                placeholder="+374 91 123456"
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                className="border-0 border-b border-foreground/20 bg-transparent pb-2 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-gold"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="serviceType" className="text-[10px] font-medium tracking-[0.25em] text-foreground/60">
                SERVICE TYPE
              </label>
              <select
                id="serviceType"
                required
                value={form.serviceType}
                onChange={(e) => updateField("serviceType", e.target.value)}
                className="border-0 border-b border-foreground/20 bg-transparent pb-2 text-sm text-foreground outline-none transition-colors focus:border-gold"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="preferredDate" className="text-[10px] font-medium tracking-[0.25em] text-foreground/60">
                PREFERRED DATE
              </label>
              <input
                id="preferredDate"
                type="date"
                required
                min={new Date().toISOString().split("T")[0]}
                value={form.preferredDate}
                onChange={(e) => handleDateChange(e.target.value)}
                className="border-0 border-b border-foreground/20 bg-transparent pb-2 text-sm text-foreground outline-none transition-colors focus:border-gold"
              />
            </div>

            {form.preferredDate && (
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-medium tracking-[0.25em] text-foreground/60">SELECT A TIME</span>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                  {WORK_HOURS.map((slot) => {
                    const isBusy = busySlots.includes(slot)
                    const isSelected = selectedTime === slot
                    return (
                      <button
                        key={slot}
                        type="button"
                        disabled={isBusy || slotsLoading}
                        onClick={() => setSelectedTime(slot)}
                        className={[
                          "border py-2 text-xs font-medium tracking-[0.1em] transition-colors",
                          isSelected
                            ? "border-gold bg-gold text-foreground"
                            : isBusy
                              ? "cursor-not-allowed border-foreground/10 bg-muted text-foreground/30 line-through"
                              : "border-foreground/20 bg-background text-foreground/80 hover:border-gold hover:text-gold",
                        ].join(" ")}
                      >
                        {slot}
                      </button>
                    )
                  })}
                </div>
                {slotsMessage && <p className="text-[11px] text-foreground/50">{slotsMessage}</p>}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 bg-foreground py-4 text-[11px] font-medium tracking-[0.25em] text-background transition-colors hover:bg-gold hover:text-foreground disabled:opacity-60"
            >
              {status === "submitting" ? "SENDING…" : "SEND BOOKING REQUEST"}
            </button>

            {status === "success" && (
              <p className="text-xs leading-relaxed text-gold" role="status">
                Thank you — your appointment has been added to the calendar. I&apos;ll confirm shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-xs leading-relaxed text-destructive" role="alert">
                Please enter a valid phone number, pick a date, and choose an available time — then try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
