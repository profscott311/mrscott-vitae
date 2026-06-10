export default function ProfessionalPortfolioLandingPage() {
  const highlights = [
    "College Reading & Writing Instruction",
    "Literacy Development Across K–12 and Higher Education",
    "Curriculum Design • Revision • Feedback • Student Growth",
    "Instructional Coaching, PLC Leadership, and Faculty Collaboration",
  ];

  const experience = [
    {
      role: "Developmental Reading and Writing Instructor",
      org: "Valencia College – East Campus",
      location: "Orlando, FL",
      dates: "Aug 2024 – Present",
      bullets: [
        "Teach integrated reading and writing courses focused on college readiness, academic literacy, and student confidence.",
        "Design scaffolded learning cycles that connect active reading, annotation, discussion, drafting, feedback, revision, and reflection.",
        "Support developing college readers and writers through clear instruction in paragraph structure, essay development, evidence use, organization, and revision.",
        "Use consistent feedback, modeling, and accessible routines to help students build ownership of their reading and writing growth.",
      ],
    },
    {
      role: "Intensive Middle School Reading Teacher",
      org: "Pinecrest Four Corners",
      location: "Orlando, FL",
      dates: "Aug 2025 – Present",
      bullets: [
        "Deliver structured literacy instruction that supports comprehension, vocabulary development, written response, and reading confidence.",
        "Use student work, assessment evidence, and classroom observation to adjust instruction and provide targeted support.",
        "Differentiate through small-group teaching, modeling, guided practice, and scaffolded academic routines.",
        "Collaborate with ELA teachers to align reading support with grade-level standards and student needs.",
      ],
    },
    {
      role: "ELA Teacher | Reading Teacher | Instructional Coach | Graduation Coach",
      org: "Orange County Public Schools",
      location: "Orlando, FL",
      dates: "Aug 2015 – May 2025",
      bullets: [
        "Supported student growth through standards-aligned literacy instruction, responsive academic support, and student-centered classroom systems.",
        "Led instructional coaching cycles including co-planning, modeling, observation, feedback, and teacher reflection.",
        "Facilitated PLCs and served as District PLC Representative focused on curriculum alignment, assessment refinement, and instructional improvement.",
        "Contributed to schoolwide literacy improvement through leadership teams, curriculum vetting, digital content creation, mentoring, and multilingual learner support.",
      ],
    },
    {
      role: "Middle School Language Arts, Social Studies, and Reading Teacher",
      org: "Lewis and Clark Middle School & Eldon R1",
      location: "Jefferson City, MO",
      dates: "Aug 2009 – May 2015",
      bullets: [
        "Taught 7th and 8th grade Language Arts, Reading, and Social Studies.",
        "Led literacy initiatives including reading diagnostics, assessment design, writing instruction, and curriculum planning.",
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
      title: "Literacy Development Is Built Through Practice",
      text: "Students become stronger readers and writers when instruction gives them repeated chances to read actively, think clearly, draft honestly, revise meaningfully, and reflect on their growth.",
    },
    {
      title: "Feedback Should Create Movement",
      text: "Effective feedback does more than identify mistakes. It helps students understand what is working, what needs attention, and what specific next step will strengthen the next draft or revision.",
    },
    {
      title: "Revision Builds Confidence",
      text: "Revision teaches students that writing is not a one-shot performance. It is a process of discovery, decision-making, ownership, and growth.",
    },
    {
      title: "Students Need Ownership",
      text: "My goal is to help students move from compliance to control: understanding their choices as readers and writers, recognizing their progress, and building confidence as academic thinkers.",
    },
  ];

  const studentFeedback = [
    {
      quote: "The professor doesn't just assign stuff—he actually coaches you through it.",
      context: "Valencia College student feedback",
    },
    {
      quote: "The feedback provided throughout the course has really supported my learning.",
      context: "Valencia College student feedback",
    },
    {
      quote: "The professor gives clear instructions and helpful feedback that shows how to improve.",
      context: "Valencia College student feedback",
    },
    {
      quote: "His teaching truly increased my confidence and helped me grow as a writer.",
      context: "Valencia College student feedback",
    },
  ];

  const endorsements = [
    {
      name: "Ian Dreilinger",
      title: "Associate Dean, Valencia College",
      quote:
        "Stephen's dedication, thoughtful curriculum design, and rapport with students exemplify the qualities of an effective and impactful educator.",
    },
    {
      name: "Kristen Williamson",
      title: "Professor and Faculty Mentor, Valencia College",
      quote:
        "Stephen consistently demonstrates enthusiasm, a strong work ethic, and a willingness to engage with a variety of pedagogical approaches. He asks thoughtful questions and shows genuine dedication to his students.",
    },
    {
      name: "Alisha Teague",
      title: "Program Specialist, Secondary Literacy",
      quote:
        "Stephen brings clarity, engaging instructional ideas, adolescent literacy expertise, and a strong commitment to student success.",
    },
  ];

  const impactStats = [
    { stat: "18", label: "Years in Education" },
    { stat: "300+", label: "College Students Taught" },
    { stat: "90%+", label: "Would Recommend the Course" },
    { stat: "20+", label: "College Sections Taught" },
  ];

  const quickLinks = [
    { label: "About", href: "#what-i-do" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Student Impact", href: "#impact" },
    { label: "Endorsements", href: "#endorsements" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">Stephen Scott</p>
            <p className="text-sm text-slate-600">Professional Portfolio</p>
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
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm tracking-wide text-sky-100 backdrop-blur">
                Literacy Educator | College Instructor | Instructional Leader
              </p>

              <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
                Stephen Scott, M.Ed.
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-100 md:text-xl">
                College instructor, literacy educator, and instructional leader with 18 years of experience designing learning
                experiences that help students become stronger readers, writers, and thinkers. My work centers on literacy
                development, writing instruction, curriculum design, feedback, revision, coaching, and student growth across
                higher education and K–12 settings.
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

            <div className="space-y-5">
              <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl backdrop-blur">
                <img
                  src="/headshot.jpg"
                  alt="Stephen Scott"
                  className="h-80 w-full object-cover object-center"
                />
              </div>

              <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur">
                <h2 className="text-lg font-medium">Quick Snapshot</h2>
                <div className="mt-4 space-y-3 text-sm text-slate-100">
                  <p><span className="font-semibold text-white">Experience:</span> 18 Years in Education</p>
                  <p><span className="font-semibold text-white">Current Role:</span> Valencia College Instructor</p>
                  <p><span className="font-semibold text-white">Credentials:</span> Reading Endorsement & Literacy Coach Endorsement</p>
                  <p><span className="font-semibold text-white">Scope:</span> Experience Across K–12 and Higher Education</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-i-do" className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">What I Do</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              I design literacy learning that is structured, practical, and human. My goal is to help students read with purpose,
              write with clarity, revise with confidence, and take ownership of their growth.
            </p>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <h3 className="text-sm font-semibold">College Reading & Writing Instruction</h3>
                <p className="mt-1 text-sm leading-7 text-slate-700">
                  Teach developing college readers and writers through active reading, academic writing, feedback, revision, and reflection.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <h3 className="text-sm font-semibold">Literacy Development</h3>
                <p className="mt-1 text-sm leading-7 text-slate-700">
                  Support students in comprehension, vocabulary, analysis, written response, academic confidence, and independent learning habits.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <h3 className="text-sm font-semibold">Curriculum & Course Design</h3>
                <p className="mt-1 text-sm leading-7 text-slate-700">
                  Build learning progressions that connect reading, thinking, discussion, drafting, revision, and student reflection.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <h3 className="text-sm font-semibold">Instructional Coaching</h3>
                <p className="mt-1 text-sm leading-7 text-slate-700">
                  Support educators through collaboration, modeling, feedback, professional learning, and reflective instructional planning.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <h3 className="text-sm font-semibold">Leadership & Collaboration</h3>
                <p className="mt-1 text-sm leading-7 text-slate-700">
                  Contribute to teams through PLC facilitation, curriculum work, mentoring, and practical literacy leadership.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-sm">
            <h2 className="text-2xl font-semibold">Current Professional Focus</h2>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-base font-semibold">College Faculty Practice</h3>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-white/10 px-3 py-1">College Readiness</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Writing Instruction</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Academic Literacy</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-100">
                  <li>Teach integrated reading and writing courses for developing college readers and writers</li>
                  <li>Use structured writing cycles that move students from reading to drafting to revision</li>
                  <li>Build student confidence through clear expectations, feedback, reflection, and practical next steps</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-base font-semibold">Literacy Leadership</h3>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-white/10 px-3 py-1">Curriculum Design</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Coaching</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Student Growth</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-100">
                  <li>Design reading and writing instruction that is clear, accessible, and growth-oriented</li>
                  <li>Collaborate with teachers and faculty to strengthen instructional systems</li>
                  <li>Lead with a practical focus on student ownership, clarity, and sustainable improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="philosophy" className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <div className="rounded-3xl bg-gradient-to-br from-sky-900 to-emerald-800 p-10 text-white shadow-xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-200">Teaching Philosophy</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            A literacy philosophy built on feedback, revision, confidence, and student ownership
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-100">
            I believe students grow when reading and writing are taught as connected, learnable processes. Strong literacy
            instruction gives students clear expectations, meaningful models, active reading strategies, time to practice,
            feedback they can use, and opportunities to revise. My teaching is built around the belief that confidence grows
            when students understand what they are doing, why it matters, and how to improve.
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

      <section id="impact" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">Student Impact</p>
            <h2 className="mt-2 text-3xl font-semibold">Student Feedback & Classroom Impact</h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-slate-700">
              My strongest measure of impact is whether students leave class with more confidence, clearer thinking, and stronger
              control over their reading and writing. Across college and K–12 settings, I focus on the conditions that help
              students persist, revise, and grow.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {studentFeedback.map((item) => (
              <div key={item.quote} className="rounded-2xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg leading-8 text-slate-800">"{item.quote}"</p>
                <p className="mt-4 text-sm font-semibold text-emerald-700">{item.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="endorsements" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-700">Professional Endorsements</p>
            <h2 className="mt-2 text-3xl font-semibold">Colleagues on Teaching, Curriculum, and Leadership</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {endorsements.map((item) => (
              <div key={item.name} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
                <p className="text-base leading-8 text-slate-800">"{item.quote}"</p>
                <div className="mt-6 border-t border-slate-200 pt-4">
                  <h3 className="text-base font-semibold text-slate-900">{item.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-700">Impact at a Glance</p>
            <h2 className="mt-2 text-3xl font-semibold">Teaching, Growth, and Student Success</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((item) => (
              <div key={item.label} className="rounded-3xl bg-slate-50 p-7 text-center shadow-sm ring-1 ring-slate-200">
                <p className="text-4xl font-semibold text-slate-900">{item.stat}</p>
                <p className="mt-2 text-sm font-medium text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">Professional Strengths</p>
            <h2 className="mt-2 text-3xl font-semibold">What Hiring Committees Can Expect</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold">Student-Centered Literacy Teaching</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Instruction that combines high expectations with clear modeling, guided practice, feedback, and support.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold">Curriculum Design & Alignment</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Learning progressions that help students move from foundational skills toward analysis, composition, and independence.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold">Support for Diverse Learners</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Accessible reading and writing instruction designed for multilingual learners, developing writers, and students building academic confidence.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold">Collaborative Instructional Leadership</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Coaching, mentoring, PLC work, and professional learning that strengthen instruction across teams.
              </p>
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
                <p className="text-slate-700">B.S. in Middle School Education, Language Arts & Social Studies 5–9 · Conferred 2008</p>
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
              <h2 className="mt-2 text-3xl font-semibold">Teaching, literacy, curriculum, and leadership in one place</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
                This portfolio is designed for college leaders, hiring committees, academic leaders, and educators seeking a concise
                overview of my work in literacy instruction, college reading and writing, curriculum design, student growth, and
                instructional leadership.
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
