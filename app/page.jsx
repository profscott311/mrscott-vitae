import Image from "next/image";

const impactResults = [
  {
    title: "Current Year Reading Growth",
    value: "17% → 28%",
    detail:
      "Schoolwide proficiency growth during the 2025–2026 school year, with PM3 results still pending.",
  },
  {
    title: "Middle Grades Literacy Systems",
    value: "Grades 6–8",
    detail:
      "Instructional systems designed to strengthen comprehension, evidence use, and written explanation through repeatable routines.",
  },
  {
    title: "College Writing Instruction",
    value: "Valencia College",
    detail:
      "Developmental reading and writing instruction focused on analysis, structure, revision, and academic independence.",
  },
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
    src: "/works-sample-1.jpg",
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
                  href="mailto:your-email@example.com"
                  className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Contact Mr. Scott
                </a>

                <a
                  href="#instruction-in-practice"
                  className="rounded-2xl border border-teal-300/30 px-6 py-3 text-sm font-semibold text-teal-200 transition hover:bg-teal-300/10"
                >
                  See Instruction in Practice
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
              Why This Work Matters
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Building literacy systems that students can actually use
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

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
                Instructional Approach
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Systems over isolated activities
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-700">
                <p>
                  I design instruction around clear, repeatable structures that
                  help students know what strong reading and writing look like,
                  how to practice it, and how to improve over time.
                </p>
                <p>
                  That means explicit modeling, guided practice, text-based
                  questioning, structured writing support, and progress tracking
                  that students can understand for themselves.
                </p>
                <p>
                  Whether I am teaching middle school literacy or developmental
                  college writing, the goal is the same: stronger thinking,
                  clearer communication, and more independent learners.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                Core instructional priorities
              </h3>
              <ul className="mt-6 space-y-4 text-slate-700">
                <li>Explicit modeling before independent work</li>
                <li>Visible progress tracking that builds ownership</li>
                <li>Benchmark aligned reading practice</li>
                <li>Writing as a tool for thinking, not just output</li>
                <li>Consistent routines students can trust and repeat</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="instruction-in-practice" className="bg-slate-50">
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
                  Moving a below-level reader to proficiency through structured support
                </h3>

                <div className="mt-6 space-y-4 leading-7 text-slate-700">
                  <p>
                    One 7th grade student entered the year reading below grade
                    level and struggled with comprehension, especially when
                    identifying central ideas, selecting evidence, and
                    explaining thinking in writing.
                  </p>
                  <p>
                    Instruction centered on daily literacy routines, including
                    explicit modeling, benchmark aligned mini tasks, visible
                    progress tracking, and structured writing support that
                    helped the student move from short answers to clearer
                    written reasoning.
                  </p>
                  <p>
                    Over time, the student showed stronger accuracy, better
                    independence, and improved written explanation. By PM2, the
                    student reached a Level 3, reflecting measurable growth and
                    successful movement toward grade level expectations.
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
                    <li>Benchmark specific mini tasks for targeted practice</li>
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
                    style={{ objectPosition: item.objectPosition as any }}
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

      <section className="bg-white">
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
              <h3 className="text-xl font-bold text-slate-900">North Carolina</h3>
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
                href="mailto:your-email@example.com"
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
