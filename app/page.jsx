import Image from "next/image";

const impactResults = [
  {
    title: "Current Year Reading Growth",
    value: "17% → 28%",
    detail:
      "Schoolwide proficiency growth during the 2025–2026 school year in grades 6–8 intensive reading, with PM3 results pending May 5.",
  },
  {
    title: "Graduation Support",
    value: "200 of 206",
    detail:
      "Supported 200 seniors in meeting graduation requirements as a Math Graduation Coach through targeted systems, student monitoring, and collaborative intervention planning.",
  },
  {
    title: "Teaching Range",
    value: "16+ Years",
    detail:
      "Experience spanning middle school literacy, reading intervention, high school support, and community college reading and writing instruction.",
  },
];

const instructionalSystems = [
  {
    title: "Reading Rotations",
    description:
      "Reading instruction organized through repeatable structures that balance direct teaching, targeted intervention, and independent application.",
    items: [
      "Whole-group mini lesson focused on a target benchmark",
      "Teacher-led small group instruction based on current student data",
      "Independent practice aligned to the same standard",
      "Task cards for targeted skill work and accountability",
      "Independent Learning Menu options that build choice and stamina",
      "Progress tracker used to monitor mastery and next steps",
      "FAST-style question formats to support transfer to assessment",
    ],
    accent: "border-teal-200 bg-teal-50",
  },
  {
    title: "Reading Bootcamp",
    description:
      "Benchmark-clustered practice designed to help students close gaps quickly through modeling, repetition, and visible progress.",
    items: [
      "Benchmark-aligned mini tasks grouped by skill",
      "Model, we do, you do structure for daily consistency",
      "Mastery tracker with skill levels students can understand",
      "Small-group pulls driven by live performance data",
      "Daily spiral review for retention across standards",
    ],
    accent: "border-sky-200 bg-sky-50",
  },
  {
    title: "Structured Writing Practice",
    description:
      "Writing instruction that helps students move from short responses to clearer, evidence-based explanation.",
    items: [
      "Claim, evidence, explanation structure taught explicitly",
      "Sentence frames that strengthen analysis and elaboration",
      "Gradual release from modeled writing to independent drafting",
      "FAST-aligned prompts and text-based writing tasks",
      "Progression from single paragraphs to multi-paragraph responses",
    ],
    accent: "border-violet-200 bg-violet-50",
  },
  {
    title: "Science of Reading Bellwork",
    description:
      "Short, consistent routines that build reading strength through daily work with language structures.",
    items: [
      "Vocabulary and morphology practice",
      "Fluency and phrasing work",
      "Sentence structure review",
      "Academic language development",
      "Repeatable routines that maximize instructional time",
    ],
    accent: "border-slate-200 bg-slate-50",
  },
];

const leadershipItems = [
  "Facilitated PLC data meetings focused on literacy growth and intervention planning",
  "Modeled reading and writing lessons aligned to standards and assessment demands",
  "Designed schoolwide reading bootcamp systems targeting benchmark skill gaps",
  "Supported teachers with reading rotations, small-group planning, and differentiation",
  "Built progress-tracking systems that made student growth visible over time",
  "Contributed to MTSS planning and Tier 2 and Tier 3 intervention support",
  "Collaborated with administration on pacing, instructional priorities, and student support",
  "Developed structured writing frameworks to strengthen consistency across classrooms",
];

const practiceArtifacts = [
  {
    title: "Student Progress Tracker",
    src: "/tracker.jpg",
    alt: "Classroom literacy benchmark tracker showing student progress levels",
    caption:
      "Students track benchmark performance over time, making growth visible and strengthening ownership.",
    objectPosition: "left top",
  },
  {
    title: "Benchmark Mini Task",
    src: "/work-sample-1.jpg",
    alt: "Reading mini task with passage and evidence-based questions",
    caption:
      "Mini tasks target specific reading benchmarks through explicit modeling, guided practice, and independent application.",
    objectPosition: "right top",
  },
  {
    title: "Writing Support Frame",
    src: "/work-sample-2.jpg",
    alt: "Structured writing scaffold with idea, evidence, explanation, and extension",
    caption:
      "Writing frames help students move from short answers to clearer, evidence-based explanations.",
    objectPosition: "center top",
  },
  {
    title: "Annotated Student Work",
    src: "/Student-work.jpg",
    alt: "Annotated student work showing evidence and text interaction",
    caption:
      "Students interact directly with text to identify evidence, paraphrase accurately, and justify their thinking.",
    objectPosition: "center top",
  },
];

const certifications = {
  northCarolina: [
    "Reading, K–12",
    "English Language Arts 6–9",
    "Social Studies 6–9",
  ],
  florida: [
    "English 6–12",
    "Reading Endorsement",
    "Literacy Coach Endorsement",
  ],
  missouri: [
    "Language Arts 5–9",
    "Social Studies 5–9",
    "Health K–12",
  ],
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_rgba(45,212,191,0.35),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.25),_transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
                Stephen Scott
              </p>

              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Literacy Educator • Instructional Leader
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                Experienced across middle school literacy, reading intervention,
                and community college instruction. I build structured systems
                that help students read more closely, write more clearly, and
                take greater ownership of their learning.
              </p>

              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
                I design structured literacy systems that move students from
                comprehension to analysis and from basic paragraphs to
                evidence-based writing.
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
                  Contact Mr. Scott
                </a>

                <a
                  href="#instructional-systems"
                  className="rounded-2xl border border-teal-300/30 px-6 py-3 text-sm font-semibold text-teal-200 transition hover:bg-teal-300/10"
                >
                  Explore Instructional Systems
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  Middle School ELA
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  Reading Intervention
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  Community College English
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  Literacy Systems Design
                </span>
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
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Selected Impact Results
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Evidence of student growth and instructional range
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              My work centers on structured instruction, visible progress
              tracking, and clear routines that move students from confusion to
              comprehension and from short answers to developed written
              explanation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {impactResults.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
                  {item.title}
                </p>
                <p className="mt-4 text-3xl font-bold text-slate-900">
                  {item.value}
                </p>
                <p className="mt-4 leading-7 text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="instructional-systems" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Instructional Systems
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Structured systems over isolated activities
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              I design instruction around repeatable structures that help
              students know what strong reading and writing look like, how to
              practice it, and how to improve over time.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {instructionalSystems.map((system) => (
              <div
                key={system.title}
                className={`rounded-3xl border p-7 shadow-sm ${system.accent}`}
              >
                <h3 className="text-2xl font-bold text-slate-900">
                  {system.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-700">
                  {system.description}
                </p>
                <ul className="mt-6 space-y-3 text-slate-700">
                  {system.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-slate-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
                Instructional Leadership
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Leadership grounded in classroom practice
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                My leadership work is rooted in practical systems, literacy
                instruction, and the day-to-day realities of helping teachers
                and students move forward.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <ul className="space-y-4 text-slate-700">
                {leadershipItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-teal-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="instruction-in-practice" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Instruction in Practice
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Structured literacy systems that move students forward
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              These examples show how instruction, student practice, and
              progress monitoring work together in my classroom.
            </p>
          </div>

          <div className="mb-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-8 sm:p-10">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                  Case Study
                </p>

                <h3 className="text-2xl font-bold text-slate-900">
                  Student A: Moving a below-level reader to proficiency through
                  structured support
                </h3>

                <div className="mt-6 space-y-4 leading-7 text-slate-700">
                  <p>
                    One 7th grade student entered the year reading below grade
                    level and struggled with comprehension, especially when
                    identifying central ideas, selecting evidence, and
                    explaining thinking in writing. The student began with a PM1
                    score of 201.
                  </p>
                  <p>
                    Instruction centered on daily literacy routines, including
                    explicit modeling, benchmark-aligned mini tasks, visible
                    progress tracking, reading rotations, and structured writing
                    support that helped the student move from short answers to
                    clearer written reasoning.
                  </p>
                  <p>
                    By PM2, the student scored 231 and reached Level 3,
                    reflecting measurable growth and successful movement toward
                    grade level expectations.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-8 sm:p-10">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-slate-900">
                    What made the difference
                  </h4>
                  <ul className="mt-4 space-y-3 text-slate-700">
                    <li>Visible progress tracking that built ownership</li>
                    <li>Benchmark-specific mini tasks for targeted practice</li>
                    <li>Reading rotations that matched support to student need</li>
                    <li>Repeated movement from text evidence to explanation</li>
                    <li>Consistent instructional routines students could rely on</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {practiceArtifacts.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-[280px] w-full overflow-hidden bg-slate-100 sm:h-[320px]">
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

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Certifications
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Credentials across North Carolina, Florida, and Missouri
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-teal-200 bg-teal-50 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                North Carolina
              </h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                {certifications.northCarolina.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-sky-200 bg-sky-50 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Florida</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                {certifications.florida.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-violet-200 bg-violet-50 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Missouri</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                {certifications.missouri.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
              Let’s Connect
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Available for meaningful literacy work and instructional leadership
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              I am especially interested in roles where strong instruction,
              student growth, and practical systems matter. This site is built
              to show not only what I have done, but how I approach the work.
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
                Contact Mr. Scott
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
