const stats = [
  { value: "100%", label: "INDIVIDUAL APPROACH" },
  { value: "500+", label: "STORIES CAPTURED" },
  { value: "0", label: "FORCED POSES" },
  { value: "2+", label: "YEARS OF MASTERY" },
]

export function StatsFooter() {
  return (
    <footer className="w-full bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-2 ${i !== 0 ? "md:border-l md:border-background/15 md:pl-8" : ""}`}
            >
              <p className="font-serif text-3xl text-background md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-[10px] tracking-[0.2em] text-background/55">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
