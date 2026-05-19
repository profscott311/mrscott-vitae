import Image from "next/image";

const coreSystems = [
  {
    eyebrow: "LITERACY SYSTEMS",
    title: "Structured Literacy Intervention",
    description:
      "Repeatable reading systems that help students move from basic comprehension to stronger analysis, evidence use, and written explanation.",
    items: [
      "Targeted mini lessons tied to clear literacy goals",
      "Teacher-led small groups based on current student need",
      "Annotation routines that make thinking visible",
      "Short, focused practice that builds stamina over time",
    ],
  },
  {
    eyebrow: "TEACHER DEVELOPMENT",
    title: "Instructional Coaching",
    description:
      "Practical support for teachers through collaboration, modeling, planning, classroom observation, and specific next-step feedback.",
    items: [
      "Co-planning with standards and student work at the center",
      "Modeled lessons and classroom-based support",
      "PLC support focused on instructional decisions",
      "Feedback grounded in observable classroom patterns",
    ],
  },
  {
    eyebrow: "COLLEGE INSTRUCTION",
    title: "Developmental Reading & Writing",
    description:
      "College-level reading and writing instruction that helps students build clearer claims, stronger evidence use, deeper explanation, and purposeful revision.",
    items: [
      "Claim, evidence, explanation structure taught explicitly",
      "Scaffolds that move students toward independence",
      "Revision routines focused on clarity and development",
      "Developmental reading and writing experience at the college level",
    ],
  },
];

const practiceArtifacts = [
  {
    title: "Classroom Rotation Model",
    src: "/layout.png",
    alt: "Classroom layout showing a literacy rotation model",
    caption:
      "Structured rotations create space for teacher-led small groups, independent practice, and targeted support.",
    objectPosition: "center center",
  },
  {
    title: "Student Work in Progress",
    src: "/Student-work.jpg",
    alt: "Student work from a literacy classroom activity",
    caption:
      "Student work samples make comprehension, annotation, and written thinking visible.",
    objectPosition: "center center",
  },
  {
    title: "Progress Monitoring",
    src: "/tracker.jpg",
    alt: "Classroom literacy benchmark tracker showing student progress levels",
    caption:
      "Students track performance over time, making growth visible and strengthening ownership.",
    objectPosition: "left top",
  },
];

const additionalArtifacts = [
  {
    title: "Targeted Reading Practice",
    src: "/work-sample-1.jpg",
    alt: "Reading mini task with passage and evidence-based questions",
    caption:
      "Mini tasks focus students on close reading, text evidence, and standard-specific reasoning.",
    objectPosition: "right top",
  },
  {
    title: "Evidence-Based Writing",
    src: "/work-sample-2.jpg",
    alt: "Structured writing scaffold with idea, evidence, explanation, and extension",
    caption:
      "Writing frames help students move from short answers to clearer, developed explanations.",
    objectPosition: "center top",
  },
  {
    title: "Instructional Support",
    src: "/coaching.jpg",
    alt: "Instructional coaching and classroom support visual",
    caption:
      "Coaching work connects planning, modeling, classroom evidence, and practical next steps.",
    objectPosition: "center center",
  },
];

const certifications = {
  northCarolina: ["Reading, K–12", "English Language Arts 6–9", "Social Studies 6–9"],
  florida: ["English 6–12", "Reading Endorsement", "Literacy Coach Endorsement"],
  missouri: ["Language Arts 5–9", "Social Studies 5–9", "Health K–12"],
};

function MiniBar({ label, width }) {
  return (
    <div className="mt-2">
      <div className="mb-1 flex justify-between text-xs text-slate-300">
        <span>{label}</span>
        <span>{width}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-teal-300"
          style={{ width }}
        />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_rgba(45,212,191,0.35),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.25),_transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
                Stephen Scott
              </p>

              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Literacy Educator • Instructional Coach • College Readiness
              </h1>

              <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-200">
                I build structured literacy systems that help students read
                closely, think critically, and write with clarity across middle
                school intervention and developmental college settings.
              </p>

              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
                Currently relocating to Western North Carolina and seeking
                opportunities in literacy instruction, instructional coaching,
                and college readiness.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/StephenScott_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:scale-[1.02] hover:bg-teal-300"
                >
                  View CV
                </a>

                <a
                  href="mailto:scottstephena@gmail.com"
                  className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Contact
                </a>

                <a
                  href="#instruction-in-practice"
                  className="rounded-2xl border border-teal-300/30 px-6 py-3 text-sm font-semibold text-teal-200 transition hover:bg-teal-300/10"
                >
                  See Classroom Systems
                </a>
              </div>

              <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">Literacy Intervention</p>
                  <p className="mt-1 text-slate-300">Middle grades reading support</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">Instructional Coaching</p>
                  <p className="mt-1 text-slate-300">Practical classroom support</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">College Readiness</p>
                  <p className="mt-1 text-slate-300">Reading and writing development</p>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/stephen_scott_headshot.jpg"
                    alt="Stephen Scott headshot"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
              Reader Movement & Intervention Impact
            </p>

            <div className="mt-6 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div>
                <p className="text-7xl font-black tracking-tight text-teal-300 sm:text-8xl">
                  ~47%
                </p>

                <p className="mt-3 text-xl font-bold text-white">
                  PM3 proficiency across Grades 6–8 intervention rosters
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Additional students demonstrated measurable year-over-year
                  growth, recovery growth, or stronger competitive performance.
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-6">
                <p className="text-2xl font-black leading-tight text-white">
                  Nearly half of intervention students finished proficient, while many
                  others demonstrated measurable growth, recovery growth, or sustained
                  upward movement from the previous year.
                </p>

                <p className="mt-4 leading-7 text-slate-300">
                  The strongest growth patterns consistently aligned with structured
                  accountability, reading stamina, vocabulary support, small-group
                  instruction, and improved independent habits over time.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl bg-white/5 p-5">
                <p className="text-3xl font-black text-teal-300">42% → 22%</p>
                <p className="mt-1 text-lg font-bold text-white">Level 1 ↓</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Grade 6 Level 1 representation decreased by PM3.
                </p>
                <MiniBar label="PM1" width="42%" />
                <MiniBar label="PM3" width="22%" />
              </div>

              <div className="rounded-3xl bg-white/5 p-5">
                <p className="text-3xl font-black text-teal-300">8% → 50%</p>
                <p className="mt-1 text-lg font-bold text-white">Level 3–5 ↑</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Grade 8 students reaching proficiency or higher increased sharply.
                </p>
                <MiniBar label="PM1" width="8%" />
                <MiniBar label="PM3" width="50%" />
              </div>

              <div className="rounded-3xl bg-white/5 p-5">
                <p className="text-3xl font-black text-teal-300">ELL Growth</p>
                <p className="mt-1 text-lg font-bold text-white">
                  Stabilization + movement
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Multilingual learners showed meaningful growth through
                  vocabulary support, routines, and sustained accountability.
                </p>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs font-semibold text-teal-200">
                  <div className="rounded-xl bg-white/10 p-2">Sustained</div>
                  <div className="rounded-xl bg-white/10 p-2">Recovery</div>
                  <div className="rounded-xl bg-white/10 p-2">Emerging</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
                Growth Took Multiple Forms
              </p>
              <p className="mt-4 text-2xl font-bold text-slate-900">
                Not just pass/fail
              </p>
              <p className="mt-4 leading-7 text-slate-700">
                Students showed proficiency growth, sustained growth, recovery
                growth, and emerging competitive performance.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
                Graduation Support
              </p>
              <p className="mt-4 text-2xl font-bold text-slate-900">
                200 of 206
              </p>
              <p className="mt-4 leading-7 text-slate-700">
                Supported seniors in meeting graduation requirements through
                progress monitoring, targeted intervention systems, and
                collaborative student support.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
                Cross-Setting Literacy Work
              </p>
              <p className="mt-4 text-2xl font-bold text-slate-900">
                K–12 + College
              </p>
              <p className="mt-4 leading-7 text-slate-700">
                Experience connects middle grades intervention, instructional
                coaching, secondary literacy, and developmental college reading
                and writing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="instructional-systems" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Instructional Systems
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Transferable literacy work across settings
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              My work connects middle grades reading intervention, instructional
              coaching, and college readiness. The common thread is structured
              support that helps students become more independent readers,
              thinkers, and writers.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {coreSystems.map((system) => (
              <div
                key={system.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm"
              >
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-teal-700">
                  {system.eyebrow}
                </p>

                <h3 className="min-h-[64px] text-2xl font-bold leading-tight text-slate-900">
                  {system.title}
                </h3>

                <p className="mt-4 min-h-[112px] text-[15px] leading-7 text-slate-700">
                  {system.description}
                </p>

                <ul className="mt-5 space-y-4 text-[15px] leading-6 text-slate-800">
                  {system.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
                Instructional Philosophy
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Belonging, clarity, and productive struggle
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-700">
              <p>
                I believe literacy instruction should be explicit enough to give
                students access, structured enough to build confidence, and
                rigorous enough to move students beyond task completion into
                real thinking.
              </p>
              <p>
                Strong instruction helps students see what skilled readers and
                writers do: notice patterns, ask better questions, use evidence,
                explain reasoning, revise thinking, and transfer those habits to
                new academic settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="instruction-in-practice" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Instruction in Practice
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Classroom systems, student work, and visible growth
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              These artifacts give hiring teams something concrete to see:
              structured routines, student-facing systems, and evidence of how
              literacy instruction operates in practice.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {practiceArtifacts.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-[275px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    style={{ objectPosition: item.objectPosition }}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/35 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-700">
                    {item.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {additionalArtifacts.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-[250px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    style={{ objectPosition: item.objectPosition }}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/35 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-700">
                    {item.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
                Reading Rotations
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Small-group instruction built into the classroom design
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                My classroom systems are designed so students can rotate through
                teacher-led instruction, independent reading work, digital
                practice, and collaborative tasks without losing the purpose of
                the lesson.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src="/layout.png"
                  alt="Classroom rotation layout model"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center center" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
                Credentials
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Certified across multiple literacy settings
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Credentials support literacy instruction, reading intervention,
                ELA, social studies, and instructional coaching across grade
                bands and settings.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-teal-200 bg-slate-50 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">
                  North Carolina
                </h3>
                <ul className="mt-4 space-y-3 text-slate-700">
                  {certifications.northCarolina.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-sky-200 bg-slate-50 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">Florida</h3>
                <ul className="mt-4 space-y-3 text-slate-700">
                  {certifications.florida.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-violet-200 bg-slate-50 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">Missouri</h3>
                <ul className="mt-4 space-y-3 text-slate-700">
                  {certifications.missouri.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
              Let’s Connect
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Interested in literacy work that connects instruction, coaching,
              and college readiness
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              I am especially interested in Western North Carolina opportunities
              where strong instruction, practical systems, and student growth
              matter.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/StephenScott_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-300"
              >
                View CV
              </a>
              <a
                href="mailto:scottstephena@gmail.com"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
