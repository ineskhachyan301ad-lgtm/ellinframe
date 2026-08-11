import { type NextRequest, NextResponse } from "next/server"

type BookingPayload = {
  fullName: string
  email: string
  serviceType: string
  preferredDate: string
}

export async function POST(request: NextRequest) {
  let body: Partial<BookingPayload>

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const { fullName, email, serviceType, preferredDate } = body

  // Basic server-side validation
  if (!fullName || !email || !serviceType || !preferredDate) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 })
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!emailValid) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 })
  }

  // ---------------------------------------------------------------------------
  // Google Calendar integration point.
  //
  // This is where you would create a calendar event, e.g. using the
  // googleapis client with a service account or OAuth token:
  //
  //   const calendar = google.calendar({ version: "v3", auth })
  //   await calendar.events.insert({
  //     calendarId: "primary",
  //     requestBody: {
  //       summary: `${serviceType} session — ${fullName}`,
  //       description: `Booking request from ${fullName} (${email}).`,
  //       start: { date: preferredDate },
  //       end: { date: preferredDate },
  //       attendees: [{ email }],
  //     },
  //   })
  //
  // Requires GOOGLE_* credentials in the project environment variables.
  // ---------------------------------------------------------------------------

  console.log("[v0] Booking request received:", { fullName, email, serviceType, preferredDate })

  return NextResponse.json({ success: true })
}
