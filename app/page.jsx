export default function HomePage() {
  const quickFacts = [
    { value: "16+", label: "Years in education" },
    { value: "Grades 6–8 + College", label: "Teaching range" },
    { value: "Reading K–12", label: "Key credential area" },
    { value: "FAST PM1→PM2 Growth", label: "Grade 6: +5 | Grade 7: +6 | Grade 8: +9" },
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
      text: "Builds repeatable instructional systems for reading, writing, intervention, and feedback instead of relying on disconnected lessons.",
    },
    {
      title: "Literacy-Focused",
      text: "Uses explicit vocabulary, morphology, annotation, and scaffolded writing routines to move students toward stronger comprehension and analysis.",
    },
    {
      title: "Data-Informed",
      text: "Uses FAST, I-Ready, formative assessment, and student work to adjust instruction, target intervention, and support growth.",
    },
  ];

  const experience = [
    {
      title: "Developmental Reading and Writing Instructor",
      org: "Valencia College, East Campus · Orlando, FL",
      dates: "August 2024 – Present",
      bullets: [
        "Design and deliver structured literacy instruction integrating reading, writing, speaking, and listening for developing readers.",
        "Implement explicit vocabulary, morphology, and annotation routines to strengthen comprehension and academic writing.",
        "Use diagnostic and formative assessments to guide instruction, feedback, and revision cycles.",
        "Support multilingual learners through language modeling, scaffolded tasks, and targeted feedback.",
        "Maintain high expectations for academic progress while coaching students in goal setting, revision, and persistence.",
      ],
    },
    {
      title: "Intensive Middle School Reading Teacher",
      org: "Pinecrest Academy Four Corners · Orlando, FL",
      dates: "August 2025 – Present",
      bullets: [
        "Deliver targeted Tier 2 literacy instruction aligned with evidence-based reading practices for students below benchmark.",
        "Implement explicit, research-based literacy routines to support comprehension, fluency, and writing development.",
        "Use MTSS data sources including FAST, I-Ready, and classroom evidence to monitor progress and adjust instruction.",
        "Differentiate through small groups, scaffolds, modeling, and structured routines to support varied proficiency levels.",
        "Collaborate with ELA teachers and school leadership to align interventions with grade-level standards and schoolwide literacy goals.",
      ],
    },
    {
      title: "ELA Teacher | Reading Teacher | Instructional Coach | Graduation Coach",
      org: "Orange County Public Schools · Orlando, FL",
      dates: "August 2015 – May 2025",
      bullets: [
        "Led instructional coaching cycles including co-planning, modeling, observation, and feedback to strengthen literacy instruction across grade levels.",
        "Facilitated PLCs and served as a District PLC Representative, guiding teams through data analysis, standards alignment, and assessment refinement.",
        "Completed OCPS Advanced Coaching Academy and Facilitative Coaching Series and supported new teachers as a Lead Mentor and New Teacher Induction Facilitator.",
        "Contributed to schoolwide literacy improvement through literacy leadership work and curriculum vetting.",
        "Provided digital instructional leadership as a District Curriculum Technology Leader and digital resource developer.",
        "Integrated structured literacy routines and delivered Tier 2 and Tier 3 interventions aligned with MTSS expectations.",
        "Supported multilingual learners through explicit language routines and scaffolded access to grade-level texts.",
        "As Graduation Coach, monitored credits, coordinated tutoring, and led family communication to support student progression and re-engagement.",
      ],
    },
    {
      title: "Middle School Language Arts, Social Studies, and Reading Teacher",
      org: "Lewis and Clark Middle School and Eldon R1 · Jefferson City, MO",
      dates: "August 2009 – May 2015",
      bullets: [
        "Taught 7th and 8th grade English language arts, reading, and social studies.",
        "Led literacy-focused work including miscue analysis, reading diagnostics, and assessment design.",
        "Recognized as a Teacher of the Year Finalist.",
      ],
    },
  ];

  const credentials = {
    degrees: [
      "M.Ed. in English Education, emphasis in literacy · University of Missouri",
      "B.S. in Middle School Education, Language Arts and Social Studies (5–9) · Missouri State University",
    ],
    certifications: [
      "Reading K–12",
      "Language Arts 5–9",
      "Social Studies 5–9",
      "Health K–12",
      "ESOL K–12",
      "Reading Endorsement",
      "Literacy Coach Endorsement",
      "Instructional Coaching Certified, University of Florida",
      "North Carolina: Language Arts 6–9",
      "North Carolina: Social Studies 6–9",
      "North Carolina: Reading K–12",
    ],
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
              Stephen Scott
            </p>
            <p className="text-sm text-slate-300">Educational Vitae</p>
          </div>

          <nav className="hidden gap-6 md:flex">
            <a href="#focus" className="text-sm text-slate-300 transition hover:text-white">
              Focus
            </a>
            <a href="#experience" className="text-sm text-slate-300 transition hover:text-white">
              Experience
            </a>
            <a href="#impact" className="text-sm text-slate-300 transition hover:text-white">
              Impact
            </a>
            <a href="#credentials" className="text-sm text-slate-300 transition hover:text-white">
              Credentials
            </a>
            <a href="#contact" className="text-sm text-slate-300 transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="bg-[linear-gradient(135deg,#0f2740_0%,#0c4a6e_52%,#0f766e_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_260px] md:items-center">
            <div>
              <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm font-medium text-sky-100">
                Literacy Educator • Instructional Leader
              </p>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
                Stephen Scott
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100 md:text-xl">
                Experienced educator and instructional leader with over 16 years
                of work across middle grades literacy, intervention, instructional
                coaching, and developmental college reading and writing.
              </p>

              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-200">
                Focused on structured literacy, standards-aligned instruction,
                data-informed decision making, and practical systems that move
                students from comprehension to analysis and from paragraph writing
                to stronger academic communication.
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
                  className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  Email Stephen
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center rounded-xl border border-emerald-300/30 bg-emerald-400/10 px-5 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-400/20"
                >
                  Contact Info
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[260px] md:mx-0 md:justify-self-end">
              <img
                src="/stephen_scott_headshot.jpg"
                alt="Stephen Scott"
                className="block aspect-[4/5] w-full rounded-2xl border border-white/10 object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900/70">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 py-8 md:grid-cols-4">
          {quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <p className="text-2xl font-bold text-white">{fact.value}</p>
              <p className="mt-1 text-sm leading-6 text-slate-300">{fact.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="focus" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Instructional Focus
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Literacy systems, intervention, and academic growth
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-slate-300">
              <p>
                My work centers on building clear, sustainable instructional
                systems that improve reading, writing, and student independence.
                I focus on explicit instruction, scaffolded practice, feedback
                cycles, and routines that make rigor more reachable for students
                who need structure, clarity, and repeated practice.
              </p>

              <p>
                Across middle school and college settings, I have designed and
                implemented literacy instruction that integrates reading, writing,
                speaking, and listening rather than treating them as separate
                pieces. That includes vocabulary work, morphology, annotation,
                standards-based writing instruction, intervention planning, and
                targeted support for multilingual learners.
              </p>

              <p>
                I am especially drawn to work that sits at the intersection of
                literacy, curriculum, coaching, and assessment. The goal is not
                just student activity. The goal is measurable growth, stronger
                thinking, and better instructional alignment.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold text-white">Core Focus Areas</h3>

            <div className="mt-5 flex flex-wrap gap-3">
              {focusAreas.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-100"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
                Professional Summary
              </h4>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Experienced educator and instructional leader skilled in curriculum
                development, instructional coaching, teacher mentoring, and
                data-informed literacy practice across K–12 and college-level
                settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="bg-slate-900/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Professional Experience
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">
            Roles in literacy, coaching, intervention, and instruction
          </h2>

          <div className="mt-10 space-y-6">
            {experience.map((job) => (
              <div
                key={`${job.title}-${job.org}`}
                className="rounded-3xl border border-white/10 bg-slate-950/60 p-6"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                    <p className="mt-1 text-slate-300">{job.org}</p>
                  </div>
                  <p className="text-sm text-slate-400">{job.dates}</p>
                </div>

                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-xl bg-white/[0.03] px-4 py-3">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
          Impact Snapshot
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white">
          Strengths supported by practice and grade 6–8 data
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {strengths.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-emerald-300/15 bg-emerald-400/5 p-6">
          <h3 className="text-lg font-semibold text-white">Grade 6–8 FAST snapshot</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-sky-300">Grade 6</p>
              <p className="mt-3 text-3xl font-bold text-white">212 → 217</p>
              <p className="mt-2 text-sm text-slate-300">PM1 to PM2 average scale score</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-sky-300">Grade 7</p>
              <p className="mt-3 text-3xl font-bold text-white">218 → 224</p>
              <p className="mt-2 text-sm text-slate-300">PM1 to PM2 average scale score</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-sky-300">Grade 8</p>
              <p className="mt-3 text-3xl font-bold text-white">218 → 227</p>
              <p className="mt-2 text-sm text-slate-300">PM1 to PM2 average scale score</p>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-300">
            These grade 6–8 data points show improvement across each uploaded FAST
            PM1 to PM2 instructional group. The point is not to oversell small
            groups. The point is to show a pattern: targeted literacy instruction,
            structured routines, and progress monitoring are translating into growth.
          </p>
        </div>
      </section>

      <section className="bg-slate-900/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Educational Approach
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">
            Clear instruction, strong scaffolds, meaningful growth
          </h2>

          <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/60 p-8">
            <p className="text-base leading-8 text-slate-300">
              I believe effective literacy instruction should be rigorous,
              explicit, and accessible. Students need clear expectations,
              purposeful modeling, guided practice, and real opportunities to
              revise, reflect, and improve. Good instruction does not hide the
              process. It makes the process visible enough for students to build
              independence over time.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-300">
              I also believe strong teaching depends on teamwork, responsibility,
              problem solving, information processing, and adaptability. Teachers
              need to collaborate, study student evidence, respond to data, and
              adjust instruction in real time. That is as true in intervention and
              developmental education as it is in any other setting.
            </p>
          </div>
        </div>
      </section>

      <section id="credentials" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
          Credentials
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white">
          Education, certifications, and licensure
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold text-white">Degrees</h3>
            <ul className="mt-4 space-y-4 text-sm leading-7 text-slate-300">
              {credentials.degrees.map((degree) => (
                <li key={degree}>{degree}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold text-white">Certifications and Licensure</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
              {credentials.certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(15,39,64,0.9)_0%,rgba(12,74,110,0.85)_55%,rgba(15,118,110,0.8)_100%)] p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">Let’s connect</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-100">
            For professional opportunities, collaboration, or educational work,
            feel free to reach out.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:scottstephena@gmail.com"
              className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              scottstephena@gmail.com
            </a>

            <a
              href="/StephenScott_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Open CV
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Stephen Scott. All rights reserved.</p>
          <p>Built with Next.js and Vercel.</p>
        </div>
      </footer>
    </main>
  );
}
