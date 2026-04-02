export default function EducationalVitaeLandingPage() {
  const highlights = [
    "Literacy Instruction | Reading Development | Writing Systemsddd",
    "Middle Grades Reading • Secondary ELA • Developmental Writing • Intervention Systems",
    "Structured literacy routines grounded in Science of Reading",
    "Instructional coaching, PLC facilitation, and teacher mentoring",
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
      title: "Systems Over Randomness",
      text: "Strong outcomes come from aligned systems: assessment, grouping, instruction, feedback, and re-teaching working together.",
    },
    {
      title: "Language + Literacy Together",
      text: "Multilingual learners benefit most when language development is embedded directly into reading, discussion, and writing instruction.",
    },
  ];

  const quickLinks = [
    { label: "What I Do", href: "#what-i-do" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Impact", href: "#impact" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">Stephen Scott</p>
            <p className="text-sm text-slate-600">Educational Vitae</p>
          </div>
          <nav className="hidden flex-wrap items-center gap-5 text-sm text-slate-600 lg:flex">
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
              href="mailto:scottstephena@gmail.com"
              className="inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-sky-900 to-emerald-800 text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_white,_transparent_35%),radial-gradient(circle_at_bottom_right,_#93c5fd,_transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm tracking-wide text-sky-100 backdrop-blur">
                Educational Vitae
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
                Stephen Scott
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-100 md:text-xl">
                Literacy educator specializing in building systems that move students from
                comprehension to analysis and from paragraph writing to structured, evidence-based essays.
                Experienced across middle grades, secondary ELA, and developmental college writing.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-100">
                {highlights.map((item) => (
                  <span key={item} className="rounded-full bg-white/10 px-4 py-2">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/StephenScott_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100"
                >
                  View CV
                </a>
                <a
                  href="mailto:scottstephena@gmail.com"
                  className="inline-flex items-center rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Contact Stephen
                </a>
                <a
                  href="#philosophy"
                  className="inline-flex items-center rounded-2xl border border-white/20 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Teaching Philosophy
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur">
              <h2 className="text-lg font-medium">Quick Snapshot</h2>
              <div className="mt-4 space-y-3 text-sm text-slate-100">
                <p><span className="font-semibold text-white">Experience:</span> 16 years in literacy education</p>
                <p><span className="font-semibold text-white">Current Transition:</span> Relocating to Western North Carolina for the 2026–2027 school year</p>
                <p><span className="font-semibold text-white">Focus:</span> Developing readers and writers through explicit instruction, strong routines, and targeted feedback</p>
                <p><span className="font-semibold text-white">Contact:</span> scottstephena@gmail.com · 314.368.9583</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-i-do" className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">What I Do</h2>
            <p className="mt-3 text-sm text-slate-600">I design and implement literacy work that produces measurable growth in middle grades and developmental college settings.</p>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <h3 className="text-sm font-semibold">Design Reading Instruction</h3>
                <p className="mt-1 text-sm text-slate-700">Explicit routines for comprehension, vocabulary, and fluency that make thinking visible and repeatable.</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <h3 className="text-sm font-semibold">Develop Writing Progressions</h3>
                <p className="mt-1 text-sm text-slate-700">Clear pathways from paragraph → multi-paragraph → evidence-based essays, integrated with assessment and feedback cycles to produce measurable writing growth.</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <h3 className="text-sm font-semibold">Design Targeted Intervention</h3>
                <p className="mt-1 text-sm text-slate-700">Data-driven grouping and instruction aligned to FAST and i-Ready to address highest-leverage skill gaps across Tier 1–3.</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <h3 className="text-sm font-semibold">Integrate Language + Literacy</h3>
                <p className="mt-1 text-sm text-slate-700">Instruction tailored for classrooms with high multilingual populations, embedding language development into reading and writing.</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <h3 className="text-sm font-semibold">Lead Through Instructional Work</h3>
                <p className="mt-1 text-sm text-slate-700">Support teams via PLCs, modeling, and coaching cycles that align standards, assessment, and daily instruction.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-sm">
            <h2 className="text-2xl font-semibold">Current Roles</h2>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-base font-semibold">Intensive Reading Teacher (Grades 6–8)</h3>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-white/10 px-3 py-1">Intervention</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">MTSS</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">ELL Support</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-100">
                  <li>Design and implement structured literacy routines for below-level readers</li>
                  <li>Use FAST & i-Ready data to target highest-leverage skill gaps</li>
                  <li>Deliver small-group intervention across Tier 1–3 and multilingual learners</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-base font-semibold">Developmental Reading & Writing Instructor – Valencia College</h3>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-white/10 px-3 py-1">College Readiness</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Writing Systems</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Academic Literacy</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-100">
                  <li>Teach integrated reading and writing courses for developing college readers</li>
                  <li>Build writing progression from paragraph to multi-paragraph and essay</li>
                  <li>Support multilingual learners through modeling and scaffolded routines</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="philosophy" className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <div className="rounded-3xl bg-gradient-to-br from-sky-900 to-emerald-800 p-10 text-white shadow-xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-200">Teaching Philosophy</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">A literacy philosophy built on clarity, consistency, and systems</h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-100">
            I believe literacy improves when instruction is explicit, consistent, and grounded in routines that make thinking visible.
            Students make the strongest gains when assessment, modeling, guided practice, feedback, and revision work together as one coherent system.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {philosophy.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-100">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-700">Instructional Systems</p>
            <h2 className="mt-2 text-3xl font-semibold">Systems Designed to Improve Literacy Outcomes</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold">Reading Intervention Model</h3>
              <p className="mt-2 text-sm text-slate-700">Targeted system focused on comprehension, vocabulary development, and reading fluency for below-level students.</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold">FAST-Aligned Instruction</h3>
              <p className="mt-2 text-sm text-slate-700">Instructional model aligned to assessment data, prioritizing highest-leverage reading skill gaps.</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold">Structured Literacy Routines</h3>
              <p className="mt-2 text-sm text-slate-700">Consistent, explicit routines grounded in Science of Reading to build comprehension and language processing.</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold">Writing Progression Framework</h3>
              <p className="mt-2 text-sm text-slate-700">Step-by-step progression from paragraph writing to multi-paragraph and evidence-based essays.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-700">What You Can Expect</p>
            <h2 className="mt-2 text-3xl font-semibold">Instructional Impact You Can Count On</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold">Consistent Literacy Systems</h3>
              <p className="mt-2 text-sm text-slate-700">Structured routines that reduce variability and build student independence in reading and writing.</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold">Data-Aligned Instruction</h3>
              <p className="mt-2 text-sm text-slate-700">Clear alignment between assessment, instruction, and intervention for measurable growth.</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold">Support for Multilingual Learners</h3>
              <p className="mt-2 text-sm text-slate-700">Integrated language and literacy instruction designed for ELL and language-diverse classrooms.</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold">Collaborative Teacher Development</h3>
              <p className="mt-2 text-sm text-slate-700">Coaching, modeling, and PLC work that strengthens instructional clarity across teams.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="mb-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">Impact</p>
            <h2 className="mt-2 text-3xl font-semibold">Selected Results</h2>
            <p className="mt-4 text-lg font-semibold text-emerald-700">
              Specialized in delivering literacy growth in high-ELL, intervention-based middle school settings.
            </p>
          </div>

          <div className="mb-10 rounded-3xl bg-emerald-50 p-8 ring-1 ring-emerald-100">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-800">Middle Grades (6–8) Data Impact</p>
            <h3 className="mt-2 text-2xl font-semibold">System-wide literacy growth driven by targeted intervention and structured instruction</h3>
            <p className="mt-4 text-base leading-8 text-slate-800">
              Across 183 middle school students in grades 6–8, students demonstrated a median of 65% progress toward annual typical growth on i-Ready Diagnostic assessments.
              Instructional systems contributed to a measurable shift in reading performance, reducing students performing three or more grade levels below from 26% to 15%,
              while increasing students performing on or above grade level from 9% to 16%.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-800">
              Students demonstrated accelerated growth across tiers, with multiple students exceeding 200–500% of typical annual growth and progressing multiple grade levels.
              Instruction emphasized structured literacy routines, vocabulary development, and data-driven small-group intervention.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-800">
              Instruction was delivered across multiple middle grades classrooms where approximately 45–60% of students were current or recently exited English Language Learners,
              requiring integrated language development alongside literacy instruction.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <p className="text-3xl font-semibold text-slate-900">D → C</p>
              <p className="mt-2 text-sm text-slate-700">Contributed to schoolwide improvement and the highest school grade in school history.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <p className="text-3xl font-semibold text-slate-900">97%</p>
              <p className="mt-2 text-sm text-slate-700">Graduation rate supported as Graduation Coach: 200 of 206 seniors graduated.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <p className="text-3xl font-semibold text-slate-900">17% → 28%</p>
              <p className="mt-2 text-sm text-slate-700">Increased FAST proficiency across tiers and multilingual learners.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <p className="text-3xl font-semibold text-slate-900">PLC + Coaching</p>
              <p className="mt-2 text-sm text-slate-700">Led collaborative planning and literacy alignment work across teams.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">Experience</p>
              <h2 className="mt-2 text-3xl font-semibold">Selected Professional Roles</h2>
            </div>
          </div>

          <div className="space-y-6">
            {experience.map((job) => (
              <div key={`${job.role}-${job.org}`} className="rounded-3xl border border-slate-200 p-7 shadow-sm">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{job.role}</h3>
                    <p className="mt-1 text-slate-700">{job.org} · {job.location}</p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">{job.dates}</span>
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
        <div className="grid gap-8 lg:grid-cols-[1fr_.9fr]">
          <div className="rounded-3xl bg-emerald-50 p-8 ring-1 ring-emerald-100">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-800">Education</p>
            <h2 className="mt-2 text-3xl font-semibold">Academic Preparation</h2>
            <div className="mt-6 space-y-5 text-slate-800">
              <div>
                <h3 className="text-lg font-semibold">University of Missouri – Columbia</h3>
                <p className="text-slate-700">M.Ed. in English Education, Emphasis in Literacy · Conferred 2013</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Missouri State University</h3>
                <p className="text-slate-700">B.S. in Middle School Education, Language Arts & Social Studies (5–9) · Conferred 2008</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">Certifications</p>
            <h2 className="mt-2 text-3xl font-semibold">Licensure & Endorsements</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <span key={cert} className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-10">
        <div className="rounded-3xl bg-slate-900 px-8 py-10 text-white shadow-xl">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-300">Professional Materials</p>
              <h2 className="mt-2 text-3xl font-semibold">View credentials, philosophy, and contact information in one place</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
                This site is designed for school leaders, hiring teams, and educators who want a concise overview of my literacy work, instructional philosophy, and leadership trajectory.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href="/StephenScott_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                View CV
              </a>
              <a
                href="mailto:scottstephena@gmail.com"
                className="inline-flex items-center rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Contact Stephen
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
