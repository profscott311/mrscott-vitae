        </div>
      </section>

      <section id="endorsements" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="mb-10 text-center">
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
          <div className="mb-10 text-center">
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

      <section id="experience" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="mb-10 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">Experience</p>
            <h2 className="mt-2 text-3xl font-semibold">Selected Professional Roles</h2>
          </div>

          <div className="space-y-6">
            {experience.map((job) => (
              <div key={job.role + "-" + job.org} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
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
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">Credentials</p>
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
              <h2 className="mt-2 text-3xl font-semibold">Teacher preparation, instructional coaching, college writing, and literacy leadership</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
                This portfolio shares my work in teacher mentoring, coaching cycles, college reading and writing,
                curriculum design, and collaborative instructional improvement.
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
