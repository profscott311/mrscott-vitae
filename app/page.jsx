"use client";

import Image from "next/image";
import Link from "next/link";

function iconClass(className = "h-5 w-5") {
  return className;
}

function ArrowRight({ className = "h-4 w-4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass(className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function Award({ className = "h-6 w-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass(className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
    </svg>
  );
}

function BookOpen({ className = "h-6 w-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass(className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 7v14" />
      <path d="M3 18a2 2 0 0 1 2-2h7V4H5a2 2 0 0 0-2 2z" />
      <path d="M21 18a2 2 0 0 0-2-2h-7V4h7a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function Brain({ className = "h-6 w-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass(className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.5 2a3.5 3.5 0 0 0-3.5 3.5V7a3 3 0 0 0-2 2.83A3 3 0 0 0 6 12.65V15a3 3 0 0 0 3 3h1" />
      <path d="M14.5 2A3.5 3.5 0 0 1 18 5.5V7a3 3 0 0 1 2 2.83 3 3 0 0 1-2 2.82V15a3 3 0 0 1-3 3h-1" />
      <path d="M12 2v20" />
      <path d="M10 7.5a2.5 2.5 0 0 1-2.5 2.5" />
      <path d="M14 7.5a2.5 2.5 0 0 0 2.5 2.5" />
      <path d="M10 16.5a2.5 2.5 0 0 0-2.5-2.5" />
      <path d="M14 16.5a2.5 2.5 0 0 1 2.5-2.5" />
    </svg>
  );
}

function Briefcase({ className = "h-6 w-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass(className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M2 12h20" />
    </svg>
  );
}

function GraduationCap({ className = "h-6 w-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass(className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 10 10-5 10 5-10 5-10-5Z" />
      <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
      <path d="M22 10v6" />
    </svg>
  );
}

function Mail({ className = "h-6 w-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass(className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function MapPin({ className = "h-6 w-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass(className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s-6-5.33-6-11a6 6 0 1 1 12 0c0 5.67-6 11-6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function Phone({ className = "h-6 w-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass(className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.6a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.48-1.24a2 2 0 0 1 2.11-.45c.83.3 1.7.51 2.6.63A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function Presentation({ className = "h-6 w-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass(className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3h18" />
      <path d="M4 3v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3" />
      <path d="M12 16v5" />
      <path d="M8 21h8" />
      <path d="m8 9 2 2 4-4" />
    </svg>
  );
}

function Target({ className = "h-6 w-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass(className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}

function Users({ className = "h-6 w-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass(className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default function HomePage() {
  const impactItems = [
    {
      title: "Literacy Growth Systems",
      description:
        "Built classroom systems that move students from basic comprehension toward clearer analytical reading and stronger writing.",
      icon: Target,
    },
    {
      title: "Cross-Level Teaching Experience",
      description:
        "Brings experience across middle school and college developmental literacy, with strength in scaffolding, intervention, and writing instruction.",
      icon: GraduationCap,
    },
    {
      title: "Instructional Capacity Builder",
      description:
        "Designs routines, tools, visuals, and lesson structures that increase clarity for students and make instruction more sustainable for teachers.",
      icon: Users,
    },
  ];

  const systems = [
    "Science of Reading bellwork focused on morphology, vocabulary, fluency, and sentence work",
    "Structured writing routines that move students from thinking to planning to written response",
    "Data-informed small groups and reteach cycles based on student performance trends",
    "Annotation systems tied to reading standards and text-dependent thinking",
    "Student-friendly task design that balances rigor, clarity, and engagement",
    "FAST-style review and practice structures that build confidence before assessments",
  ];

  const leadershipItems = [
    "Supports struggling readers through targeted intervention, scaffolded instruction, and clear progress monitoring",
    "Builds classroom routines that are consistent, calm, and academically focused",
    "Uses data, student work, and observation to adjust instruction rather than teach on autopilot",
    "Designs resources that other teachers can actually use, not just admire",
    "Values PLC collaboration, practical systems, and instructional decisions grounded in evidence",
  ];

  const certifications = [
    "North Carolina Reading K–12 License",
    "Florida Teaching Credentials",
    "Missouri Teaching Credentials",
    "Literacy, intervention, and instructional leadership experience across multiple settings",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.18),transparent_28%),radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm font-medium text-emerald-300">
                <BookOpen className="h-4 w-4" />
                Literacy Educator • Instructional Leader
              </div>

              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Building reading and writing systems that actually help students
                grow
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                I teach literacy with a practical, student-centered approach
                grounded in explicit instruction, structured support, and real
                classroom results. My work centers on helping students think
                more clearly, read more deeply, and write with greater
                confidence.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/StephenScott_CV.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-2xl bg-emerald-400 px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-emerald-300"
                >
                  View CV
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Contact
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
                <Image
                  src="/stephen_scott_headshot.jpg"
                  alt="Stephen Scott headshot"
                  width={900}
                  height={1100}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="mb-10 flex items-center gap-3">
          <Target className="h-6 w-6 text-emerald-300" />
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Selected Impact
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {impactItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-emerald-400/10 p-3 text-emerald-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] items-start">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Brain className="h-6 w-6 text-sky-300" />
                <h2 className="text-3xl font-bold tracking-tight text-white">
                  Instructional Systems
                </h2>
              </div>
              <p className="mb-8 max-w-2xl leading-7 text-slate-300">
                Strong instruction is not random. It depends on repeatable
                systems that create clarity for students and consistency for the
                teacher. These are the structures I rely on most.
              </p>

              <div className="grid gap-4">
                {systems.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <Image
                  src="/layout.png"
                  alt="Classroom layout and instructional organization"
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <Image
                  src="/tracker.jpg"
                  alt="Student tracker used during literacy instruction"
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="mb-8 flex items-center gap-3">
          <Presentation className="h-6 w-6 text-violet-300" />
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Reading Rotations in Practice
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <p className="text-lg leading-8 text-slate-300">
              My reading rotations are built to keep students working with
              purpose while I provide targeted support. The structure balances
              direct instruction, collaboration, independent work, and small
              group intervention without turning the classroom into chaos.
            </p>
            <p className="mt-5 leading-7 text-slate-300">
              In practice, that means clear expectations, visible routines,
              meaningful station work, and materials that are readable for
              students without constant teacher rescue. The goal is simple.
              Students stay engaged, instruction stays focused, and support goes
              where it is most needed.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <Image
              src="/Student-work.jpg"
              alt="Student work from reading and writing instruction"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <div className="mb-8 flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-amber-300" />
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Instructional Leadership
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="grid gap-4">
              {leadershipItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
              <h3 className="text-2xl font-semibold text-white">
                What that looks like in real schools
              </h3>
              <p className="mt-4 leading-7 text-slate-300">
                I care about systems, but only if they improve actual teaching.
                My leadership mindset is practical. I want lessons that can run,
                supports that can stick, and tools that can help teachers make
                better decisions under real classroom pressure.
              </p>
              <p className="mt-4 leading-7 text-slate-300">
                That includes designing resources, improving literacy routines,
                supporting intervention work, strengthening student engagement,
                and helping instruction become more consistent across classrooms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="mb-8 flex items-center gap-3">
          <Award className="h-6 w-6 text-rose-300" />
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Instruction in Practice
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <Image
              src="/work-sample-1.jpg"
              alt="Instructional work sample one"
              width={1400}
              height={1000}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <Image
              src="/work-sample-2.jpg"
              alt="Instructional work sample two"
              width={1400}
              height={1000}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="mb-8 flex items-center gap-3">
          <Award className="h-6 w-6 text-cyan-300" />
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Certifications
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-white/10 bg-gradient-to-b from-slate-950 to-slate-900"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Mail className="h-6 w-6 text-emerald-300" />
                <h2 className="text-3xl font-bold tracking-tight text-white">
                  Contact
                </h2>
              </div>

              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                I’m always open to conversations about literacy instruction,
                teaching opportunities, instructional leadership, and systems
                that help students grow.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="space-y-5 text-slate-200">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-emerald-300" />
                  <a
                    href="mailto:scottstephena@gmail.com"
                    className="transition hover:text-emerald-300"
                  >
                    scottstephena@gmail.com
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-emerald-300" />
                  <a
                    href="tel:3143689583"
                    className="transition hover:text-emerald-300"
                  >
                    314 368 9583
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-emerald-300" />
                  <p>Relocating to North Carolina</p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/StephenScott_CV.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-2xl bg-emerald-400 px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-emerald-300"
                >
                  Open CV
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
