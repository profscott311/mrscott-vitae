export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
              Stephen Scott • Literacy Teacher
            </p>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-white md:text-6xl">
              Structured literacy systems that move readers forward.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              I build classroom systems that help students move from avoidance
              to confidence, from surface answers to evidence-based thinking,
              and from teacher-supported routines toward independent reading
              behaviors.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/StephenScott_CV.pdf"
                className="rounded-full bg-sky-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-sky-300"
              >
                View CV
              </a>

              <a
                href="#reader-movement"
                className="rounded-full border border-slate-600 px-5 py-3 text-sm font-bold text-white transition hover:border-sky-400 hover:text-sky-300"
              >
                Reader Movement Data
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-4 shadow-2xl">
            <img
              src="/stephen_scott_headshot.jpg"
              alt="Stephen Scott"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/70">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 py-8 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-950 p-5">
            <p className="text-3xl font-black text-sky-400">16+ yrs</p>
            <p className="mt-2 text-sm text-slate-300">
              Teaching across middle school and college literacy settings
            </p>
          </div>

          <div className="rounded-2xl bg-slate-950 p-5">
            <p className="text-3xl font-black text-sky-400">6–8</p>
            <p className="mt-2 text-sm text-slate-300">
              Intensive Reading systems focused on stamina, strategy, and growth
            </p>
          </div>

          <div className="rounded-2xl bg-slate-950 p-5">
            <p className="text-3xl font-black text-sky-400">~47%</p>
            <p className="mt-2 text-sm text-slate-300">
              PM3 proficiency across Grades 6–8 intervention rosters
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-7">
            <p className="text-sm font-bold uppercase tracking-wide text-sky-400">
              Instructional Identity
            </p>

            <h2 className="mt-3 text-3xl font-black text-white">
              Intervention treated like a real literacy class.
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              Intensive Reading works best when students experience it as a
              serious literacy environment with strong routines, meaningful
              expectations, targeted support, and measurable goals.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              My approach centers on accountability, modeling, guided practice,
              small-group response, reading stamina, vocabulary development,
              annotation, and independent transfer.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-7">
            <p className="text-sm font-bold uppercase tracking-wide text-sky-400">
              Teaching Systems
            </p>

            <h2 className="mt-3 text-3xl font-black text-white">
              Repeatable routines. Real-time adjustment.
            </h2>

            <ul className="mt-5 space-y-3 text-slate-300">
              <li>• Small-group reading and targeted reteaching</li>
              <li>• FAST-aligned skill practice and strategy modeling</li>
              <li>• Morpheme/grapheme and vocabulary pattern support</li>
              <li>• Bubble-student tracking and threshold awareness</li>
              <li>• Annotation systems and evidence-based responses</li>
              <li>• Completion accountability and intervention follow-through</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="reader-movement"
        className="border-y border-slate-800 bg-white text-slate-950"
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-700">
            Reader Movement & Intervention Impact
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight">
            Meaningful growth was not only about who passed.
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-700">
            Across Grades 6–8 Intensive Reading, nearly half of students reached
            PM3 proficiency, while many additional students demonstrated
            measurable longitudinal growth, recovery growth, or stronger
            competitive performance from the previous year.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-slate-100 p-6">
              <p className="text-4xl font-black text-sky-700">~47%</p>
              <p className="mt-2 text-sm font-medium text-slate-700">
                overall PM3 proficiency across Grades 6–8 intervention rosters
              </p>
            </div>

            <div className="rounded-3xl bg-slate-100 p-6">
              <p className="text-4xl font-black text-sky-700">3</p>
              <p className="mt-2 text-sm font-medium text-slate-700">
                grade levels showing proficiency growth, sustained growth, or
                recovery movement
              </p>
            </div>

            <div className="rounded-3xl bg-slate-100 p-6">
              <p className="text-4xl font-black text-sky-700">ELL</p>
              <p className="mt-2 text-sm font-medium text-slate-700">
                multilingual learners showed meaningful stabilization and
                measurable upward movement
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl bg-sky-50 p-7">
            <h3 className="text-2xl font-black text-slate-950">
              Types of reader growth observed
            </h3>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h4 className="font-bold text-sky-800">Sustained Growth</h4>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Students crossed into stronger performance territory and
                  maintained gains through PM3.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h4 className="font-bold text-sky-800">Accelerated Growth</h4>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Students demonstrated higher ceiling potential once engagement,
                  confidence, and pacing improved.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h4 className="font-bold text-sky-800">Recovery Growth</h4>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Students rebounded after difficult testing cycles and showed
                  measurable movement.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h4 className="font-bold text-sky-800">
                  Emerging Competitive Performance
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Students approached or entered Level 3 territory for the first
                  time and now need continued consistency.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-700">
            The biggest takeaway from the data is that intervention growth is
            not always linear. Students improved when structured accountability,
            reading stamina, confidence, vocabulary support, and independent
            habits started working together.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-400">
          Classroom Systems
        </p>

        <h2 className="mt-4 text-4xl font-black text-white">
          Instruction built around movement, not compliance.
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-bold text-white">
              Bag of Chips Challenge
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Fast-paced literacy practice built around vocabulary, morphology,
              fluency, and reading strategy recall.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-bold text-white">
              FAST Skill Routines
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Focused practice aligned to reading standards, question types,
              evidence use, and stamina-building.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-bold text-white">
              Writing From Reading
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Students move from comprehension to claims, evidence, explanation,
              and revision.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-3xl font-black text-white">
            Selected Artifacts
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl bg-slate-950 p-5">
              <img
                src="/tracker.jpg"
                alt="Student data tracker"
                className="h-44 w-full rounded-2xl object-cover"
              />
              <h3 className="mt-4 font-bold text-white">Data Tracking</h3>
              <p className="mt-2 text-sm text-slate-300">
                Systems for monitoring growth, identifying patterns, and
                adjusting instruction.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-950 p-5">
              <img
                src="/Student-work.jpg"
                alt="Student work sample"
                className="h-44 w-full rounded-2xl object-cover"
              />
              <h3 className="mt-4 font-bold text-white">Student Work</h3>
              <p className="mt-2 text-sm text-slate-300">
                Evidence of reading, writing, annotation, and revision practice.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-950 p-5">
              <img
                src="/bagofchipschallenge.jpeg"
                alt="Bag of Chips Challenge"
                className="h-44 w-full rounded-2xl object-cover"
              />
              <h3 className="mt-4 font-bold text-white">
                Engagement Systems
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                High-energy literacy routines designed to make practice visible,
                measurable, and repeatable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© Stephen Scott</p>
          <p>Literacy Instruction • Intervention Systems • Reader Movement</p>
        </div>
      </footer>
    </main>
  );
}
