export default function HomePage() {
  const quickFacts = [
    { value: "16+", label: "Years in education" },
    { value: "Grades 6–8 + College", label: "Teaching range" },
    { value: "Reading K–12", label: "Primary credential focus" },
    { value: "FAST PM1 → PM2 Growth", label: "Consistent gains across grades 6–8" },
  ];

  const focusAreas = [
    "Structured literacy",
    "Reading intervention",
    "Writing systems",
    "Instructional coaching",
    "Curriculum design",
    "Data-informed instruction",
    "Standards alignment",
    "Multilingual learner support",
  ];

  const strengths = [
    {
      title: "Systems Builder",
      text: "Creates repeatable instructional systems that drive consistency across reading, writing, and intervention.",
    },
    {
      title: "Literacy-Focused",
      text: "Uses explicit routines in vocabulary, morphology, annotation, and writing to build real comprehension.",
    },
    {
      title: "Data-Informed",
      text: "Adjusts instruction using FAST, I-Ready, and classroom evidence instead of relying on assumptions.",
    },
  ];

  const experience = [
    {
      title: "Developmental Reading and Writing Instructor",
      org: "Valencia College · Orlando, FL",
      dates: "2024 – Present",
      bullets: [
        "Design and deliver structured literacy instruction integrating reading and writing.",
        "Implement vocabulary, morphology, and annotation routines to improve comprehension.",
        "Use diagnostic and formative assessment to drive feedback and revision.",
        "Support multilingual learners through modeling and scaffolded instruction.",
      ],
    },
    {
      title: "Intensive Reading Teacher",
      org: "Pinecrest Academy Four Corners · Orlando, FL",
      dates: "2025 – Present",
      bullets: [
        "Deliver Tier 2 literacy instruction aligned to evidence-based practices.",
        "Use FAST and MTSS data to target intervention and adjust instruction.",
        "Implement structured routines for comprehension, fluency, and writing.",
        "Differentiate through small groups and scaffolded practice.",
      ],
    },
    {
      title: "ELA Teacher · Reading Teacher · Instructional Coach",
      org: "Orange County Public Schools · Orlando, FL",
      dates: "2015 – 2025",
      bullets: [
        "Led instructional coaching cycles including modeling, observation, and feedback.",
        "Facilitated PLCs focused on data analysis and standards alignment.",
        "Mentored new teachers and supported schoolwide literacy systems.",
        "Designed curriculum and supported intervention across multiple settings.",
      ],
    },
    {
      title: "Middle School ELA and Reading Teacher",
      org: "Missouri · Grades 7–8",
      dates: "2009 – 2015",
      bullets: [
        "Taught ELA, reading, and social studies.",
        "Led literacy-focused assessment and diagnostic work.",
        "Recognized as Teacher of the Year Finalist.",
      ],
    },
  ];

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
        </div>
      </header>

      {/* HERO */}
      <section className="bg-[linear-gradient(135deg,#0f2740_0%,#0c4a6e_52%,#0f766e_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_260px] md:items-center">
            
            <div>
              <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm text-sky-100">
                Literacy Educator • Instructional Leader
              </p>

              <h1 className="mt-6 text-4xl font-bold text-white md:text-6xl">
                Stephen Scott
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-slate-100 md:text-xl">
                I build literacy systems that help students move from basic comprehension 
                to clear thinking, structured writing, and independent academic work.
              </p>

              <p className="mt-4 max-w-2xl text-slate-300">
                My work spans middle school intervention, instructional coaching, and 
                developmental college reading and writing, with a focus on structure, clarity, 
                and measurable growth.
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
              </div>
            </div>

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

      {/* QUICK FACTS */}
      <section className="border-b border-white/10 bg-slate-900/70">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 py-8 md:grid-cols-4">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-2xl font-bold text-white">{fact.value}</p>
              <p className="mt-1 text-sm text-slate-300">{fact.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INSTRUCTIONAL FOCUS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">
          Instructional Focus
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white">
          Systems that produce real literacy growth
        </h2>

        <p className="mt-6 max-w-3xl text-slate-300 leading-8">
          I focus on building structured, repeatable systems for reading and writing instruction. 
          That includes explicit modeling, scaffolded practice, feedback cycles, and routines that 
          help students develop independence over time. The goal is not activity. The goal is growth.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {focusAreas.map((item) => (
            <span key={item} className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-100">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-slate-900/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold text-white">Professional Experience</h2>

          <div className="mt-10 space-y-6">
            {experience.map((job) => (
              <div key={job.title} className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
                <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                <p className="text-slate-400">{job.org} · {job.dates}</p>

                <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                  {job.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-white">Instructional Impact</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {strengths.map((s) => (
            <div key={s.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-slate-300 text-sm max-w-2xl">
          Grade 6–8 FAST data shows consistent improvement from PM1 to PM2 across instructional groups, 
          reflecting the impact of structured literacy routines, targeted intervention, and ongoing progress monitoring.
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-400">
          © {new Date().getFullYear()} Stephen Scott
        </div>
      </footer>

    </main>
  );
}
