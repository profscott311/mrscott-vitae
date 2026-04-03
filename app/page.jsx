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
    "Assessment design",
  ];

  const focusRight = [
    "Reading intervention",
    "Instructional coaching",
    "Data-informed instruction",
    "Multilingual learner support",
    "Teacher mentoring",
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
        "Facilitated PLCs and served as a District PLC Representative.",
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
      label: "Westridge Middle improved its school grade, highest during that span (2020–2023)",
    },
    {
      value: "200 / 206",
      label: "Graduation Coach: students supported to graduation (2023–2024)",
    },
    {
      value: "17% → 28%",
      label: "FAST reading proficiency increase across grades 6–8",
    },
    {
      value: "PLCs",
      label: "Led and supported PLCs, coaching cycles, and teacher development",
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
        "Language Arts 5–9",
        "Social Studies 5–9",
        "Health K–12",
      ],
    },
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">

      {/* HERO */}
      <section className="bg-[linear-gradient(135deg,#0f2740_0%,#0c4a6e_52%,#0f766e_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_260px] items-center">
            <div>
              <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[1.05rem] text-sky-100">
                Literacy Educator • Instructional Leader
              </p>

              <h1 className="mt-6 text-5xl font-bold text-white">
                Stephen Scott
              </h1>

              <p className="mt-6 text-lg text-slate-100">
                Experienced educator and instructional leader working across middle grades literacy,
                intervention, instructional coaching, and developmental college reading and writing.
              </p>
            </div>

            <img
              src="/stephen_scott_headshot.jpg"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="bg-slate-900 py-8">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-4">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="bg-white/5 p-5 rounded-2xl">
              <p className="text-2xl font-bold">{fact.value}</p>
              <p className="text-sm text-slate-300">{fact.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOCUS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Instructional Focus</h2>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="flex flex-wrap gap-3">
            {focusLeft.map((item) => (
              <span key={item} className="pill-emerald">{item}</span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 justify-end">
            {focusRight.map((item) => (
              <span key={item} className="pill-sky">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Selected Impact Results</h2>

        <div className="mt-8 grid md:grid-cols-4 gap-4">
          {impactHighlights.map((item) => (
            <div key={item.label} className="bg-white/5 p-5 rounded-2xl">
              <p className="text-3xl font-bold">{item.value}</p>
              <p className="text-sm text-slate-300 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Credentials</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div className="bg-white/5 p-6 rounded-2xl">
            <h3 className="font-semibold">Education</h3>
            <ul className="mt-4 space-y-3">
              {credentials.degrees.map((d) => (
                <li key={d.degree}>
                  <strong>{d.degree}</strong><br />
                  {d.school}<br />
                  <span className="text-sm text-slate-400">{d.detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl">
            <h3 className="font-semibold">Licensure and Certifications</h3>

            <div className="mt-4 space-y-6">

              <div>
                <strong>North Carolina</strong>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  {credentials.certifications.northCarolina.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>

              <div>
                <strong>Florida</strong>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  {credentials.certifications.florida.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>

              <div>
                <strong>Missouri</strong>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  {credentials.certifications.missouri.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
