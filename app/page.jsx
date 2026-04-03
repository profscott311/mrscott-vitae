export default function HomePage() {
  const quickFacts = [
    { value: "16+", label: "Years in education" },
    { value: "Grades 6–8 + College", label: "Teaching range" },
    { value: "Reading K–12", label: "Key credential area" },
    { value: "PLCs · Coaching · Mentoring", label: "Instructional leadership experience" },
  ];

  const focusLeft = [
    "Structured literacy",
    "Writing systems",
    "Curriculum design",
    "Standards alignment",
  ];

  const focusRight = [
    "Reading intervention",
    "Instructional coaching",
    "Data-informed instruction",
    "Multilingual learner support",
  ];

  const strengths = [
    {
      title: "Systems Builder",
      text: "Builds repeatable instructional systems for reading, writing, intervention, and feedback instead of relying on disconnected lessons.",
    },
    {
      title: "Literacy-Focused",
      text: "Uses explicit vocabulary, morphology, annotation, and writing routines to strengthen comprehension and academic communication.",
    },
    {
      title: "Data-Informed",
      text: "Uses FAST, i-Ready, classroom evidence, and student work to adjust instruction, target support, and monitor progress.",
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
        "Use MTSS data sources including FAST, i-Ready, and classroom evidence to monitor progress and adjust instruction.",
        "Differentiate through small groups, scaffolds, modeling, and structured routines to support varied proficiency levels.",
        "Collaborate with ELA teachers and school leadership to align interventions with grade-level standards and schoolwide literacy goals.",
      ],
    },
    {
      title: "Orange County Public Schools",
      org: "Orlando, FL",
      dates: "August 2015 – May 2025",
      roles: [
        {
          role: "ELA Teacher",
          text: "Delivered standards-aligned English language arts instruction with a focus on reading, writing, intervention, and academic growth.",
        },
        {
          role: "Instructional Coach",
          text: "Led coaching cycles, co-planning, modeling, observation, and feedback to strengthen literacy instruction across grade levels.",
        },
        {
          role: "Graduation Coach",
          text: "Monitored credits, coordinated tutoring, and led family communication to support student progression and re-engagement.",
        },
      ],
      bullets: [
        "Facilitated PLCs and served as a District PLC Representative, guiding teams through data analysis, standards alignment, and assessment refinement.",
        "Completed OCPS Advanced Coaching Academy and Facilitative Coaching Series.",
        "Supported new teachers as a Lead Mentor and New Teacher Induction Facilitator.",
        "Contributed to literacy leadership work, curriculum vetting, and digital instructional support.",
        "Supported multilingual learners through explicit language routines and scaffolded access to grade-level texts.",
      ],
    },
    {
      title: "Middle School Language Arts, Social Studies, and Reading Teacher",
      org: "Lewis and Clark Middle School and Eldon R1 · Jefferson City, MO",
      dates: "August 2009 – May 2015",
      bullets: [
        "Taught 7th and 8th grade English language arts, reading, and social studies.",
        "Led literacy-focused work including miscue analysis, reading diagnostics, and assessment design.",
        "Designed instruction to build reading, writing, and content understanding across middle school classrooms.",
        "Recognized as a Teacher of the Year Finalist.",
      ],
    },
  ];

  const impactHighlights = [
    {
      value: "D → C",
      label: "Westridge Middle improved its school grade, the highest reached during that span (2020–2023)",
    },
    {
      value: "200 / 206",
      label: "As Graduation Coach, assisted 200 of 206 seniors to graduate (2023–2024)",
    },
    {
      value: "+5 · +6 · +9",
      label: "FAST PM1 to PM2 average scale score growth in grades 6, 7, and 8",
    },
    {
      value: "30 / 47",
      label: "Students in current intensive reading groups already at or above annual typical growth",
    },
  ];

  const credentials = {
    degrees: [
      {
        degree: "M.Ed. in English Education",
        school: "University of Missouri",
        detail: "Emphasis in Literacy",
      },
      {
        degree: "B.S. in Middle School Education",
        school: "Missouri State University",
        detail: "Language Arts and Social Studies (5–9)",
      },
    ],
    certifications: {
      northCarolina: [
        "ELA 6–9",
        "Social Studies 6–9",
        "Reading K–12",
      ],
      florida: [
        "Language Arts 5–9",
        "Social Studies 5–9",
        "Health K–12",
        "ESOL K–12",
        "Reading Endorsement",
        "Literacy Coach Endorsement",
        "Instructional Coaching Certified, University of Florida",
      ],
      missouri: [
        "Middle School Education: Language Arts",
        "Middle School Education: Social Studies",
      ],
    },
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
              <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[1.02rem] font-medium text-sky-100">
                Literacy Educator • Instructional Leader
              </p>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
                Stephen Scott
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100 md:text-xl">
                Experienced educator and instructional leader working across middle
                grades literacy, intervention, instructional coaching, and
                developmental college reading and writing.
              </p>

              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-200">
                Focused on structured literacy, standards-aligned instruction,
                practical systems, and the kind of clear teaching that helps
                students move from comprehension to analysis and from basic writing
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
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Instructional Focus
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Literacy systems and intervention
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-slate-300">
              <p>
                My work centers on building clear, sustainable instructional
                systems that improve reading, writing, and student independence.
                That includes explicit instruction, scaffolded practice, targeted
                feedback, and routines that make rigor more reachable for students
                who need structure, clarity, and repeated practice.
              </p>

              <p>
                Across middle school and college settings, I have designed and
                implemented instruction that integrates reading, writing, speaking,
                and listening rather than treating them as disconnected pieces.
              </p>

              <p>
                The through line is simple: clear systems, purposeful support, and
                stronger academic performance.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold text-white">Core Focus Areas</h3>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-wrap gap-3">
                {focusLeft.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-100"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 md:justify-end">
                {focusRight.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1 text-sm text-sky-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
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

                {job.roles && (
                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
                      Roles Within OCPS
                    </p>

                    <div className="mt-4 space-y-4 border-l border-white/10 pl-5">
                      {job.roles.map((item) => (
                        <div key={item.role}>
                          <p className="text-sm font-semibold text-white">{item.role}</p>
                          <p className="mt-1 text-sm leading-7 text-slate-300">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

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
          Selected Impact Results
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white">
          Professional strengths and outcomes
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
          <h3 className="text-lg font-semibold text-white">Selected Impact Results</h3>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {impactHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-slate-950/50 p-5"
              >
                <p className="text-3xl font-bold text-white">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-300">
            These examples reflect impact across different roles and contexts,
            including school improvement, graduation support, and current intensive
            reading growth.
          </p>
        </div>
      </section>

      <section className="bg-slate-900/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            How I Work
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">
            Clear systems. Strong teaching. Real support.
          </h2>

          <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/60 p-8">
            <p className="text-base leading-8 text-slate-300">
              I care about instruction that is clear, demanding, and useful. I am
              drawn to work where strong teaching, collaboration, and practical
              systems matter more than buzzwords or appearances.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-300">
              At my best, I help build structures that teachers can sustain and
              students can actually use. That includes curriculum, intervention,
              coaching, feedback, and the daily classroom moves that make better
              performance possible.
            </p>
          </div>
        </div>
      </section>

      <section id="credentials" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
          Credentials
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white">
          Education, Licensure, and Certifications
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.35fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-7">
            <h3 className="text-lg font-semibold text-white">Education</h3>

            <div className="mt-6 space-y-5">
              {credentials.degrees.map((item) => (
                <div
                  key={item.degree}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <p className="text-lg font-semibold text-white">{item.degree}</p>
                  <p className="mt-1 text-slate-200">{item.school}</p>
                  <p className="mt-2 text-sm text-slate-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-7">
            <h3 className="text-lg font-semibold text-white">Licensure and Certifications</h3>

            <div className="mt-6 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-emerald-300/15 bg-emerald-400/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
                  North Carolina
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  {credentials.certifications.northCarolina.map((cert) => (
                    <li key={cert}>{cert}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-sky-300/15 bg-sky-400/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">
                  Florida
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  {credentials.certifications.florida.map((cert) => (
                    <li key={cert}>{cert}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                  Missouri
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  {credentials.certifications.missouri.map((cert) => (
                    <li key={cert}>{cert}</li>
                  ))}
                </ul>
              </div>
            </div>
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
