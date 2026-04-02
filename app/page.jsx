export default function EducationalVitaeLandingPage() {
  const statCards = [
    { value: "16+", label: "Years in literacy education" },
    { value: "6–8", label: "Middle grades focus" },
    { value: "College + K–12", label: "Teaching range" },
    { value: "PLC + Coaching", label: "Leadership experience" },
  ];

  const experience = [
    {
      role: "Developmental Reading and Writing Instructor",
      org: "Valencia College – East Campus",
      location: "Orlando, FL",
      dates: "Aug 2024 – Present",
      bullets: [
        "Teach integrated reading and writing courses focused on foundational literacy development for college readers.",
        "Use explicit instruction in vocabulary, annotation, and paragraph structure to strengthen comprehension and writing clarity.",
        "Guide students through revision cycles and targeted feedback that build independence as writers.",
        "Support multilingual learners with language modeling, scaffolded instruction, and structured academic routines.",
      ],
    },
    {
      role: "Intensive Middle School Reading Teacher",
      org: "Pinecrest Four Corners",
      location: "Orlando, FL",
      dates: "Aug 2025 – Present",
      bullets: [
        "Deliver targeted literacy instruction for students below grade level using structured, explicit routines.",
        "Use FAST, i-Ready, and running records to identify skill gaps and adjust instruction for measurable growth.",
        "Differentiate through small-group teaching, modeling, and scaffolded supports for diverse learners.",
        "Collaborate with ELA teachers to align intervention strategies with grade-level standards.",
      ],
    },
    {
      role: "ELA Teacher | Reading Teacher | Instructional Coach | Graduation Coach",
      org: "Orange County Public Schools",
      location: "Orlando, FL",
      dates: "Aug 2015 – May 2025",
      bullets: [
        "Improved student performance on literacy assessments through consistent, data-informed instruction.",
        "Led instructional coaching cycles including co-planning, modeling, observation, and feedback.",
        "Facilitated PLCs and served as District PLC Representative focused on data analysis, standards alignment, and assessment refinement.",
        "Supported schoolwide literacy improvement through leadership teams, curriculum vetting, digital content creation, and multilingual learner support.",
      ],
    },
    {
      role: "Middle School Language Arts, Social Studies, and Reading Teacher",
      org: "Lewis and Clark Middle School & Eldon R1",
      location: "Jefferson City, MO",
      dates: "Aug 2009 – May 2015",
      bullets: [
        "Taught 7th and 8th grade ELA, Reading, and Social Studies.",
        "Led literacy initiatives including miscue analysis, reading diagnostics, and assessment design.",
        "Recognized as a Teacher of the Year Finalist.",
      ],
    },
  ];

  const certifications = [
    "Reading Endorsement",
    "Literacy Coach Endorsement",
    "Language Arts 5–9",
    "Social Studies 5–9",
    "Health K–12",
    "ESOL K–12",
    "Instructional Coaching Certified – University of Florida",
    "North Carolina: Reading K–12, Language Arts 6–9, Social Studies 6–9",
  ];

  const philosophy = [
    {
      title: "Explicit Instruction",
      text: "Students grow when instruction is modeled clearly, practiced consistently, and built around routines they can internalize.",
    },
    {
      title: "Visible Thinking",
      text: "Reading and writing improve when students can see how strong readers annotate, infer, organize, and support claims with evidence.",
    },
    {
      title: "Systems Matter",
      text: "Assessment, grouping, instruction, feedback, and re-teaching should work together as one system rather than as disconnected moves.",
    },
    {
      title: "Language + Literacy",
      text: "Multilingual learners benefit most when language development is embedded directly into reading, discussion, and writing instruction.",
    },
  ];

  const focusAreas = [
    {
      title: "Reading Instruction",
      text: "Explicit routines for vocabulary, fluency, comprehension, and text-based analysis.",
    },
    {
      title: "Writing Development",
      text: "Clear progression from paragraph writing to multi-paragraph and evidence-based essays.",
    },
    {
      title: "Intervention Systems",
      text: "Data-informed grouping and literacy support aligned to FAST, i-Ready, and classroom evidence.",
    },
    {
      title: "Instructional Leadership",
      text: "PLC facilitation, coaching cycles, modeling, and systems-level literacy planning.",
    },
  ];

  const quickLinks = [
    { label: "Focus", href: "#focus" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Impact", href: "#impact" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-800">
              Stephen Scott
            </p>
            <p className="text-sm text-slate-600">Educational Vitae</p>
          </div>

          <nav className="hidden items-center gap-5 text-sm text-slate-600 lg:flex">
            {quickLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-slate-900">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/StephenScott_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 sm:inline-flex"
            >
              View CV
            </a>
            <a
              href="mailto:scottstephena@gmail.com?subject=Website%20Inquiry"
              className="inline-flex rounded-xl bg-sky-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-900"
            >
              Email Stephen
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-sky-900 to-emerald-800 text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_white,_transparent_35%),radial-gradient(circle_at_bottom_right,_#93c5fd,_transparent_30%)]" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm font-medium text-sky-100 backdrop-blur">
                Literacy Educator • Instructional Leader
              </p>

              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
                Stephen Scott
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100 md:text-xl">
                Literacy educator focused on building systems that move students from
                comprehension to analysis and from paragraph writing to structured,
                evidence-based essays.
              </p>

              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-200">
                Experienced across middle grades intervention, secondary literacy,
                instructional coaching, and developmental college reading and writing.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/StephenScott_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
                >
                  View CV
                </a>
                <a
                  href="mailto:scottstephena@gmail.com?subject=Website%20Inquiry"
                  className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Email Stephen
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-xl border border-emerald-200/30 bg-emerald-400/10 px-5 py-3 text-sm font-semibold text-emerald-50 transition hover:bg-emerald-400/15"
                >
                  Contact Info
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-7 shadow-2xl backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
                <div className="mb-6">
  <img
    src="/stephen_scott_headshot.jpg"
    alt="Stephen Scott"
    className="w-full max-w-xs mx-auto rounded-2xl border border-white/10 shadow-lg object-cover"
  />
</div>
                Quick Snapshot
              </p>
              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-100">
                <p>
                  <span className="font-semibold text-white">Current roles:</span>{" "}
                  Intensive Reading Teacher and Developmental Reading and Writing Instructor
                </p>
                <p>
                  <span className="font-semibold text-white">Primary strength:</span>{" "}
                  building structured literacy systems that improve clarity, consistency, and student growth
                </p>
                <p>
                  <span className="font-semibold text-white">Relocation focus:</span>{" "}
                  Western North Carolina for the 2026–2027 school year
                </p>
                <p>
                  <span className="font-semibold text-white">Contact:</span>{" "}
                  scottstephena@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {statCards.map((card) => (
              <div
                key={card.label}
                className="rounded-2xl border border-white/10 bg-white/10 p-6 text-center shadow-lg backdrop-blur"
              >
                <p className="text-2xl font-bold text-white">{card.value}</p>
                <p className="mt-2 text-sm text-slate-200">{card.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="focus" className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Professional Focus
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            What I Build and Strengthen
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
            My work centers on literacy instruction that is explicit, repeatable, and tied to real evidence of student performance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {focusAreas.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="philosophy" className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Teaching Philosophy
            </p>
            <h2 className="mt-2 text-3xl font-bold">
              Clarity, consistency, and systems
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-slate-300">
              I believe literacy improves when instruction is explicit, consistent,
              and grounded in routines that make thinking visible. Students make the
              strongest gains when assessment, modeling, guided practice, feedback,
              and revision work together as one coherent system.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {philosophy.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="bg-emerald-50/40 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
              Impact
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Selected Results</h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-slate-700">
              My work has centered on improving literacy outcomes in intervention-heavy,
              multilingual, and mixed-readiness settings through explicit instruction,
              strong routines, and data-informed decision making.
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
              Middle Grades Literacy Growth
            </p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">
              Structured intervention tied to measurable improvement
            </h3>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Across 183 middle school students in grades 6–8, students demonstrated a median of 65% progress toward annual typical growth on i-Ready Diagnostic assessments.
              Instructional systems contributed to a measurable shift in reading performance, reducing students performing three or more grade levels below from 26% to 15%, while increasing students performing on or above grade level from 9% to 16%.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Students demonstrated accelerated growth across tiers, with multiple students exceeding 200–500% of typical annual growth and progressing multiple grade levels.
              Instruction emphasized structured literacy routines, vocabulary development, and data-driven small-group intervention.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Instruction was delivered across classrooms where approximately 45–60% of students were current or recently exited English Language Learners, requiring integrated language development alongside literacy instruction.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-3xl font-bold text-sky-800">D → C</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Contributed to schoolwide improvement and the highest school grade in school history.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-3xl font-bold text-sky-800">97%</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Graduation rate supported as Graduation Coach: 200 of 206 seniors graduated.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-3xl font-bold text-sky-800">17% → 28%</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Increased FAST proficiency across tiers and multilingual learners.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-3xl font-bold text-sky-800">PLC + Coaching</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Led collaborative planning and literacy alignment work across teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Experience
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Selected Professional Roles
            </h2>
          </div>

          <div className="space-y-6">
            {experience.map((job) => (
              <div
                key={`${job.role}-${job.org}`}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{job.role}</h3>
                    <p className="mt-1 text-slate-600">
                      {job.org} · {job.location}
                    </p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
                    {job.dates}
                  </span>
                </div>

                <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-700">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_.95fr]">
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
              Education
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Academic Preparation
            </h2>

            <div className="mt-6 space-y-5 text-slate-800">
              <div>
                <h3 className="text-lg font-semibold">University of Missouri – Columbia</h3>
                <p className="text-slate-700">
                  M.Ed. in English Education, Emphasis in Literacy · Conferred 2013
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Missouri State University</h3>
                <p className="text-slate-700">
                  B.S. in Middle School Education, Language Arts & Social Studies (5–9) · Conferred 2008
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Certifications
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Licensure & Endorsements
            </h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="pb-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="rounded-3xl bg-slate-900 px-8 py-10 text-white shadow-xl">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
                  Contact
                </p>
                <h2 className="mt-2 text-3xl font-bold">
                  Professional materials and contact information
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
                  This site is designed for school leaders, hiring teams, and educators
                  who want a concise overview of my literacy work, instructional philosophy,
                  and leadership trajectory.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-slate-300">Email</p>
                <p className="mt-1 text-base font-semibold text-white">
                  scottstephena@gmail.com
                </p>

                <p className="mt-4 text-sm text-slate-300">Phone</p>
                <p className="mt-1 text-base font-semibold text-white">
                  314.368.9583
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="mailto:scottstephena@gmail.com?subject=Website%20Inquiry"
                    className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                  >
                    Email Stephen
                  </a>
                  <a
                    href="/StephenScott_CV.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                  >
                    View CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
