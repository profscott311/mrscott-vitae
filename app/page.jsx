export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
              Stephen Scott
            </p>
            <p className="text-sm text-slate-300">Educational Vitae</p>
          </div>

          <nav className="hidden gap-6 md:flex">
            <a href="#about" className="text-sm text-slate-300 transition hover:text-white">
              About
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

      {/* Hero */}
      <section className="bg-[linear-gradient(135deg,#0f2740_0%,#0c4a6e_52%,#0f766e_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_260px] md:items-center">
            <div>
              <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm font-medium text-sky-100">
                Literacy Educator • Instructional Leader
              </p>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
                Stephen Scott
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100 md:text-xl">
                Literacy educator focused on building systems that move students
                from comprehension to analysis and from paragraph writing to
                structured, evidence-based essays.
              </p>

              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-200">
                Experienced across middle grades intervention, secondary
                literacy, instructional coaching, and developmental college
                reading and writing.
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

      {/* Quick Stats */}
      <section className="border-b border-white/10 bg-slate-900/70">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 py-8 md:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-2xl font-bold text-white">16+</p>
            <p className="mt-1 text-sm text-slate-300">Years in education</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-2xl font-bold text-white">Grades 6–College</p>
            <p className="mt-1 text-sm text-slate-300">Teaching range</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-2xl font-bold text-white">Reading K–12</p>
            <p className="mt-1 text-sm text-slate-300">Key credential area</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-2xl font-bold text-white">Systems Focus</p>
            <p className="mt-1 text-sm text-slate-300">Instruction, writing, literacy growth</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              About
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">Who I am as an educator</h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-slate-300">
              <p>
                I build literacy systems that help students move from surface-level
                response to deeper thinking, clearer writing, and stronger
                independence. My work centers on explicit instruction,
                scaffolded practice, data-informed decision making, and classroom
                structures that make rigor more reachable.
              </p>

              <p>
                My background includes middle school intervention, adolescent
                literacy, college developmental reading and writing, mentoring,
                and instructional leadership. Across settings, I focus on
                clarity, consistency, and practical systems that teachers and
                students can actually sustain.
              </p>

              <p>
                I am especially interested in the intersection of reading,
                writing, and instructional design: how students build knowledge,
                how teachers make thinking visible, and how a classroom can be
                structured to produce meaningful growth rather than just activity.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold text-white">Core Focus Areas</h3>

            <div className="mt-5 flex flex-wrap gap-3">
              {[
                "Literacy Instruction",
                "Reading Intervention",
                "Writing Systems",
                "Developmental Education",
                "Instructional Coaching",
                "Curriculum Design",
                "Data-Informed Teaching",
                "Academic Support",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-100"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
                Current Work
              </h4>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                <li>Middle school intensive reading and literacy support</li>
                <li>College developmental reading and writing instruction</li>
                <li>System-building for student writing and intervention</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-slate-900/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">Professional experience</h2>

          <div className="mt-10 space-y-6">
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">Middle School Intensive Reading Teacher</h3>
                  <p className="mt-1 text-slate-300">Pinecrest Academy Four Corners</p>
                </div>
                <p className="text-sm text-slate-400">Current</p>
              </div>
              <p className="mt-4 text-slate-300 leading-8">
                Provide targeted reading instruction, intervention support, and
                writing development for middle grades students. Design structured
                literacy routines, benchmark-aligned practice, and classroom
                systems that support comprehension, fluency, and written response.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">Adjunct Professor of Developmental Reading and Writing</h3>
                  <p className="mt-1 text-slate-300">Valencia College</p>
                </div>
                <p className="text-sm text-slate-400">Current</p>
              </div>
              <p className="mt-4 text-slate-300 leading-8">
                Teach developmental college reading and writing with an emphasis
                on active reading, paragraph and essay development, revision,
                credibility, and evidence-based academic writing. Build modules,
                supports, and feedback systems that help students become more
                independent and more effective communicators.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">Middle Grades and Secondary Literacy Roles</h3>
                  <p className="mt-1 text-slate-300">Previous instructional positions</p>
                </div>
                <p className="text-sm text-slate-400">Prior experience</p>
              </div>
              <p className="mt-4 text-slate-300 leading-8">
                Previous experience includes middle grades ELA and literacy
                support, graduation coaching, intervention-focused instruction,
                student support systems, curriculum collaboration, and mentoring
                work designed to improve student performance and teacher practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
          Impact
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white">Instructional impact and strengths</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold text-white">Systems Builder</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Designs repeatable instructional systems for reading, writing,
              intervention, and feedback rather than relying on isolated lessons.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold text-white">Literacy-Focused</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Builds student growth through explicit reading instruction,
              scaffolded writing, text-dependent thinking, and practical
              strategies students can actually use.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold text-white">Data-Informed</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Uses assessment data, classroom evidence, and student work to make
              instructional decisions and adjust support where it matters most.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-emerald-300/15 bg-emerald-400/5 p-6">
          <h3 className="text-lg font-semibold text-white">Selected highlights</h3>
          <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-300 md:grid-cols-2">
            <li>Built classroom structures that support reading and writing growth</li>
            <li>Supported diverse learners across intervention and developmental settings</li>
            <li>Designed scaffolded writing systems from paragraph to essay</li>
            <li>Contributed to instructional consistency through mentoring and collaboration</li>
            <li>Focused on student thinking, not just completion</li>
            <li>Aligned instruction to standards, assessment demands, and long-term literacy goals</li>
          </ul>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-slate-900/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Philosophy
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">Teaching philosophy</h2>

          <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/60 p-8">
            <p className="text-base leading-8 text-slate-300">
              I believe strong literacy instruction should be both rigorous and
              accessible. Students deserve clear expectations, purposeful
              modeling, guided practice, and meaningful opportunities to think,
              revise, and improve. My goal is to help students become more
              capable readers, more precise writers, and more confident thinkers
              by building classrooms where structure supports growth rather than
              limiting it.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-300">
              I also believe effective teaching depends on teamwork,
              responsibility, adaptability, and problem solving. Teachers must
              respond to data, adjust to student needs, collaborate with others,
              and process information quickly enough to make instruction more
              effective in real time. Good teaching is not static. It is
              responsive, intentional, and grounded in evidence.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section id="credentials" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
          Credentials
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white">Education and certifications</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold text-white">Degrees</h3>
            <ul className="mt-4 space-y-4 text-sm leading-7 text-slate-300">
              <li>
                <span className="font-semibold text-slate-100">M.A. / M.Ed. in English Education</span>
                <br />
                Emphasis in literacy and instruction
              </li>
              <li>
                <span className="font-semibold text-slate-100">B.S. in Middle School Education</span>
                <br />
                English Language Arts and Social Sciences
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold text-white">Certifications and Endorsements</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
              <li>Reading K–12</li>
              <li>Middle Grades English Language Arts</li>
              <li>Middle Grades Social Sciences</li>
              <li>North Carolina licensure and related credentials</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-slate-900/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">Professional strengths</h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Curriculum Design",
              "Reading Intervention",
              "Academic Writing Instruction",
              "Assessment Analysis",
              "Instructional Scaffolding",
              "Small Group Instruction",
              "Standards Alignment",
              "Faculty Collaboration",
              "Student Support Systems",
              "Canvas and LMS Design",
              "Feedback and Revision Systems",
              "Instructional Planning",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 text-sm text-slate-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(15,39,64,0.9)_0%,rgba(12,74,110,0.85)_55%,rgba(15,118,110,0.8)_100%)] p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">Let’s connect</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-100">
            For professional inquiries, teaching opportunities, collaboration,
            or academic work, feel free to reach out.
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

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Stephen Scott. All rights reserved.</p>
          <p>Built with Next.js and Vercel.</p>
        </div>
      </footer>
    </main>
  );
}
