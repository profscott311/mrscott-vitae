"use client";

import Image from "next/image";
import { useRef } from "react";

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
  "Instructional coaching cycles informed by Jim Knight’s partnership model and grounded in co-planning, classroom support, and reflective follow-through",
  "Lastinger Center for Learning Certified Instructional Coach since 2020, with coaching language focused on modeling, goal setting, and data-informed feedback",
  "Florida Literacy Coach Endorsement paired with classroom-based literacy leadership across reading intervention, writing instruction, and benchmark support",
  "Co-plan lessons, support PLCs, model instruction, teach alongside colleagues, and follow up with practical next steps tied to student evidence",
  "Collect observational data during classroom visits to identify patterns in engagement, independence, annotation accuracy, and instructional pacing",
  "Vet, modify, and create curriculum resources that align standards, instructional routines, and assessment demands",
  "Support teachers with reading rotations, benchmark bootcamps, scaffolds for multilingual learners, and structured writing routines",
  "Use feedback that is specific enough to be actionable and realistic enough to improve instruction the next day",
];

const coachingExample = {
  title: "Observation and Coaching Example",
  date: "November 19, 2024 | 10:20–10:41 a.m. | 4th Period",
  focus:
    "Focus question: How do annotation think-alouds and monitoring strategies elicit accurate student annotations?",
  detail:
    "In this 21-minute observation, I tracked bell work, whole-class checks, resumed practice, and annotation review while separating teacher-initiated monitoring from student-initiated support. That data display made it easier to coach around when the teacher circulated, how feedback was delivered, and whether students resumed the annotation task with stronger accuracy and independence after whole-class review.",
};

const practiceArtifacts = [
  {
    title: "Reading Bootcamp Progress Tracker",
    src: "/tracker.jpg",
    alt: "Classroom literacy benchmark tracker showing student progress levels",
    caption:
      "Students track benchmark performance over time, making growth visible and strengthening ownership.",
    objectPosition: "left top",
  },
  {
    title: "R.1.1 Benchmark Mini Task",
    src: "/work-sample-1.jpg",
    alt: "Reading mini task with passage and evidence-based questions",
    caption:
      "Mini tasks target specific reading benchmarks through explicit modeling, guided practice, and independent application.",
    objectPosition: "right top",
  },
  {
    title: "Claim Evidence Explanation Writing Frame",
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
  const audioRef = useRef(null);

  const handleAudioEnter = async () => {
    if (!audioRef.current) return;
    try {
      audioRef.current.currentTime = 0;
      await audioRef.current.play();
    } catch (error) {
      console.error("Audio playback failed:", error);
    }
  };

  const handleAudioLeave = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <audio ref={audioRef} src="/bag-of-chips.mp3" preload="auto" />

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

              <p className="mt-4 max-w-3xl text-xl font-semibold text-teal-200">
                Structured reading systems. Visible growth. Independent learners.
              </p>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                Experienced across middle school literacy, reading intervention,
                instructional coaching, and community college instruction. I
                build structured systems that help students read more closely,
                write more clearly, and take greater ownership of their learning.
              </p>

              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
                My work includes classroom instruction, coaching cycles,
                literacy-focused PLC support, modeled lessons, data-driven
                feedback, and curriculum design that translates standards into
                teachable routines.
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
                  Instructional Coaching
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
              These systems work together during reading rotations and
              intervention blocks. I design instruction around repeatable
              structures that help students know what strong reading and writing
              look like, how to practice it, and how to improve over time.
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

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Instructional Leadership
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Coaching, collaboration, and literacy leadership grounded in classroom practice
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              My leadership work is not separate from instruction. It includes
              coaching cycles, PLC support, co-planning, modeled lessons,
              classroom-based feedback, and curriculum work that helps teachers
              translate standards into stronger daily practice.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-start">
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

            <div className="rounded-3xl border border-sky-200 bg-sky-50 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-800">
                {coachingExample.title}
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-700">
                {coachingExample.date}
              </p>
              <p className="mt-4 font-semibold text-slate-900">
                {coachingExample.focus}
              </p>
              <p className="mt-4 leading-7 text-slate-700">
                {coachingExample.detail}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Reading Rotations in Practice
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Priority Support Rotation Model
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Students rotate through independent work, collaboration, and
              teacher-led small group instruction based on instructional
              priority, FAST data, and daily learning goals.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/layout.png"
                alt="Reading rotations classroom layout showing independent work, collaboration station, and teacher small group"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <p className="mt-6 text-slate-600">
            Students rotate based on instructional priority. Independent work
            builds stamina. Collaboration builds reasoning. Small group targets
            skill gaps.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
              <h3 className="font-semibold text-slate-900">
                Independent Work Stations
              </h3>
              <p className="mt-2 text-slate-700">
                Students complete task cards, annotation routines, and
                independent learning menu choices while building reading stamina
                and accountability.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6">
              <h3 className="font-semibold text-slate-900">
                Collaboration Station (ILM)
              </h3>
              <p className="mt-2 text-slate-700">
                Students discuss thinking, complete ILM options, and practice
                structured responses using evidence and academic language.
              </p>
            </div>

            <div className="rounded-2xl border border-violet-200 bg-violet-50 p-6">
              <h3 className="font-semibold text-slate-900">
                Teacher Small Group
              </h3>
              <p className="mt-2 text-slate-700">
                Targeted instruction based on benchmark gaps, FAST data, and
                priority student needs.
              </p>
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
                  Below-Level Reader to Proficiency Through Structured Support
                </h3>

                <div className="mt-6 space-y-4 leading-7 text-slate-700">
                  <p>
                    One 6th grade student with ADHD and 504 support entered the
                    year reading below grade level and struggled with focus,
                    comprehension, and explaining thinking in writing.
                  </p>
                  <p>
                    Instruction centered on structured reading rotations,
                    game-based task cards, short focused mini tasks, visible
                    progress tracking, and frequent feedback that built both
                    engagement and stamina.
                  </p>
                  <p>
                    Over time, the student moved to Level 3 proficiency,
                    demonstrating stronger written explanations, better reading
                    habits, and measurable growth through consistent support.
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
                    <li>Game-based task cards that increased engagement</li>
                    <li>Reading rotations that matched support to student need</li>
                    <li>Short focused mini tasks that improved stamina</li>
                    <li>Consistent instructional routines students could rely on</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            <a
              href="https://docs.google.com/document/d/1YM7dEmtcHnih-X_48h7QMoAOwf-oqmJP83aLeQGVy7o/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={handleAudioEnter}
              onMouseLeave={handleAudioLeave}
              className="group overflow-hidden rounded-3xl border border-emerald-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-[220px] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/bagofchipschallenge.jpeg"
                  alt="Bag of Chips Challenge classroom engagement idea"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
                  Free Idea
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">
                  Bag of Chips Challenge
                </h3>
                <p className="mt-3 leading-7 text-slate-700">
                  A classroom engagement hook built around routine, energy, and
                  motivation. Hover to hear the track. Click to open the
                  document.
                </p>
              </div>
            </a>

            {practiceArtifacts.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-[220px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    style={{ objectPosition: item.objectPosition }}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-900/35 to-transparent" />
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
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Certified to support literacy instruction across multiple grade
              bands and settings.
            </p>
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
