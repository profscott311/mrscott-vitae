export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
              Stephen Scott
            </p>
            <p className="text-sm text-slate-300">Educational Vitae</p>
          </div>

          <div className="flex gap-3">
            <a
              href="/StephenScott_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              View CV
            </a>

            <a
              href="mailto:scottstephena@gmail.com?subject=Website%20Inquiry"
              className="rounded-xl bg-sky-700 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600"
            >
              Email Stephen
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-[linear-gradient(135deg,#0f2740_0%,#0c4a6e_55%,#0f766e_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_260px] md:items-center">
            
            {/* LEFT SIDE */}
            <div>
              <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm text-sky-100">
                Literacy Educator • Instructional Leader
              </p>

              <h1 className="mt-6 text-4xl font-bold text-white md:text-6xl">
                Stephen Scott
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-slate-100 md:text-xl">
                Literacy educator focused on building systems that move students
                from comprehension to analysis and from paragraph writing to
                structured, evidence-based essays.
              </p>

              <p className="mt-4 max-w-2xl text-slate-300">
                Experienced across middle grades intervention, secondary
                literacy, instructional coaching, and developmental college
                reading and writing.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/StephenScott_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
                >
                  View CV
                </a>

                <a
                  href="mailto:scottstephena@gmail.com"
                  className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
                >
                  Email Stephen
                </a>

                <a
                  href="#contact"
                  className="rounded-xl border border-emerald-300/30 bg-emerald-400/10 px-5 py-3 text-sm font-semibold text-emerald-100 hover:bg-emerald-400/20"
                >
                  Contact Info
                </a>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="mx-auto w-full max-w-[260px] md:mx-0">
              <img
                src="/stephen_scott_headshot.jpg"
                alt="Stephen Scott"
                className="w-full rounded-2xl border border-white/10 shadow-2xl object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* PLACEHOLDER NEXT SECTION */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-white">Experience</h2>
        <p className="mt-4 text-slate-300">
          (Next step: we build this out cleanly. Do NOT rush this section.)
        </p>
      </section>
    </main>
  );
}
