export default function Home() {
  return (
    <>
      <style>{`
        :root {
          --navy: #17324d;
          --blue: #4f6d8a;
          --light-blue: #e8f0f7;
          --gray: #dce2e8;
          --off-white: #f8f9fa;
          --white: #ffffff;
          --text: #222222;
          --muted: #5f6b75;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          line-height: 1.6;
          color: var(--text);
          background: var(--off-white);
        }

        .nav {
          background: var(--navy);
          color: var(--white);
          padding: 22px 8%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .site-title {
          font-weight: 700;
          letter-spacing: 0.3px;
        }

        .nav-links {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }

        .nav-links a {
          color: var(--white);
          text-decoration: none;
          font-size: 0.95rem;
        }

        .nav-links a:hover {
          text-decoration: underline;
        }

        .hero {
          background: linear-gradient(135deg, var(--navy), var(--blue));
          color: var(--white);
          padding: 90px 8%;
        }

        .hero-content {
          max-width: 950px;
        }

        .hero h1 {
          font-size: clamp(2.6rem, 6vw, 4.8rem);
          line-height: 1.08;
          margin: 0 0 16px;
        }

        .hero h2 {
          font-size: clamp(1.25rem, 3vw, 2rem);
          font-weight: 400;
          color: var(--light-blue);
          margin: 0 0 20px;
        }

        .hero p {
          font-size: 1.15rem;
          max-width: 780px;
          margin: 0 0 32px;
        }

        .buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .button {
          display: inline-block;
          padding: 12px 20px;
          border-radius: 6px;
          border: 2px solid var(--white);
          text-decoration: none;
          font-weight: 700;
        }

        .button.primary {
          background: var(--white);
          color: var(--navy);
        }

        .button.secondary {
          color: var(--white);
        }

        section {
          padding: 70px 8%;
        }

        .white {
          background: var(--white);
        }

        .light {
          background: var(--light-blue);
        }

        .section-title {
          color: var(--navy);
          font-size: 2rem;
          margin: 0 0 18px;
        }

        .section-intro {
          max-width: 850px;
          color: var(--muted);
          margin: 0 0 36px;
          font-size: 1.05rem;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
        }

        .card,
        .quote {
          background: var(--white);
          border: 1px solid var(--gray);
          border-radius: 10px;
          padding: 26px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.04);
        }

        .card h3 {
          color: var(--navy);
          margin: 0 0 10px;
        }

        .card p {
          margin: 0;
        }

        .stats {
          background: var(--white);
        }

        .stat {
          background: var(--light-blue);
          border-left: 5px solid var(--blue);
          padding: 22px;
          border-radius: 8px;
        }

        .stat strong {
          display: block;
          color: var(--navy);
          font-size: 1.45rem;
          margin-bottom: 4px;
        }

        .quote {
          border-left: 5px solid var(--blue);
          font-style: italic;
        }

        .quote cite {
          display: block;
          margin-top: 14px;
          font-style: normal;
          font-weight: 700;
          color: var(--navy);
        }

        .contact a {
          color: var(--navy);
          font-weight: 700;
        }

        footer {
          background: var(--navy);
          color: var(--white);
          text-align: center;
          padding: 38px 8%;
        }

        footer p {
          margin: 6px 0;
        }

        @media (max-width: 700px) {
          .nav {
            align-items: flex-start;
          }

          .nav-links {
            flex-direction: column;
            gap: 8px;
          }

          section {
            padding: 56px 7%;
          }

          .hero {
            padding: 74px 7%;
          }
        }
      `}</style>

      <nav className="nav">
        <div className="site-title">Stephen Scott, M.Ed.</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#teaching">Teaching</a>
          <a href="#approach">My Approach</a>
          <a href="#impact">Student Impact</a>
          <a href="#endorsements">Endorsements</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Stephen Scott, M.Ed.</h1>
            <h2>Literacy Educator | College Instructor | Instructional Leader</h2>
            <p>
              Helping students and educators grow through literacy, feedback, curriculum design,
              and meaningful relationships.
            </p>
            <div className="buttons">
              <a className="button primary" href="#teaching">View Teaching Work</a>
              <a className="button secondary" href="#impact">Student Impact</a>
              <a className="button secondary" href="#contact">Contact</a>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="grid">
            <div className="stat">
              <strong>18 Years</strong>
              In education
            </div>
            <div className="stat">
              <strong>M.Ed.</strong>
              Learning, Teaching & Curriculum
            </div>
            <div className="stat">
              <strong>K–12 → College</strong>
              Literacy instruction
            </div>
            <div className="stat">
              <strong>Curriculum & Coaching</strong>
              Instructional leadership
            </div>
          </div>
        </section>

        <section id="about">
          <h2 className="section-title">About</h2>
          <p className="section-intro">
            I am a literacy educator, college instructor, and instructional leader with experience
            supporting students and teachers across middle school, high school, and college settings.
            My work has centered on reading, writing, revision, student confidence, and practical
            support that helps learners move forward.
          </p>
          <p className="section-intro">
            Across my career, I have served as a classroom teacher, reading interventionist,
            graduation coach, instructional coach, curriculum writer, mentor, and developmental
            reading and writing instructor. The common thread has remained the same: helping
            students and educators grow through clear instruction, meaningful feedback, and
            strong relationships.
          </p>
        </section>

        <section id="teaching" className="white">
          <h2 className="section-title">Teaching</h2>
          <p className="section-intro">
            My teaching experience spans K–12 literacy instruction and college developmental
            reading and writing. I design learning experiences that help students build confidence,
            strengthen reading comprehension, develop writing skills, and understand revision as
            part of the learning process.
          </p>

          <div className="grid">
            <div className="card">
              <h3>College Teaching</h3>
              <p>
                At Valencia College, I teach Developmental Reading and Writing, focusing on active
                reading, academic writing, revision, feedback, and college readiness.
              </p>
            </div>

            <div className="card">
              <h3>K–12 Literacy</h3>
              <p>
                My K–12 work includes English Language Arts, intensive reading, intervention,
                student support, and literacy development for diverse learners.
              </p>
            </div>

            <div className="card">
              <h3>Course Design</h3>
              <p>
                I use scaffolded assignments, clear module structure, weekly communication, and
                revision-centered feedback to help students understand expectations and improve.
              </p>
            </div>

            <div className="card">
              <h3>Leadership & Coaching</h3>
              <p>
                My experience includes instructional coaching, mentoring, curriculum development,
                professional learning, and literacy-focused leadership.
              </p>
            </div>
          </div>
        </section>

        <section id="approach">
          <h2 className="section-title">My Approach</h2>
          <p className="section-intro">
            My teaching philosophy is built around active learning, meaningful feedback, revision,
            and the belief that students grow when they are supported and challenged.
          </p>

          <div className="grid">
            <div className="card">
              <h3>Literacy</h3>
              <p>
                Reading and writing are tools students use to think, communicate, analyze, and
                participate in academic and professional communities.
              </p>
            </div>

            <div className="card">
              <h3>Feedback</h3>
              <p>
                Feedback should do more than explain a grade. It should give students a path
                forward and help them understand how to improve.
              </p>
            </div>

            <div className="card">
              <h3>Revision</h3>
              <p>
                Strong writing develops through practice, reflection, and revision. Students need
                opportunities to revisit their thinking and strengthen their work.
              </p>
            </div>

            <div className="card">
              <h3>Relationships</h3>
              <p>
                Students are more willing to take academic risks when they know their instructor
                sees them, respects them, and believes they can grow.
              </p>
            </div>
          </div>
        </section>

        <section id="impact" className="light">
          <h2 className="section-title">Student Impact</h2>
          <p className="section-intro">
            Student feedback across courses has consistently highlighted confidence, support,
            clear instruction, revision, and meaningful feedback.
          </p>

          <div className="grid">
            <blockquote className="quote">
              “I went unsure, quiet and nervous and leaving with confidence.”
              <cite>Valencia College Student</cite>
            </blockquote>

            <blockquote className="quote">
              “His feedback is thoughtful and detailed, which truly helped me grow as a writer.”
              <cite>Valencia College Student</cite>
            </blockquote>

            <blockquote className="quote">
              “He really wants you to succeed and gives feedback that pushes you without discouraging you.”
              <cite>Valencia College Student</cite>
            </blockquote>
          </div>
        </section>

        <section id="endorsements" className="white">
          <h2 className="section-title">Professional Endorsements</h2>
          <p className="section-intro">
            Recommendations, observations, and student evaluations reflect a consistent emphasis on
            student-centered teaching, literacy growth, feedback, curriculum design, and instructional leadership.
          </p>

          <div className="grid">
            <div className="card">
              <h3>College Teaching</h3>
              <p>
                “Stephen’s instruction clearly supports the competencies expected in ENC1101.”
              </p>
              <p><strong>— Ian Dreilinger, Associate Dean, Valencia College</strong></p>
            </div>

            <div className="card">
              <h3>Student-Centered Practice</h3>
              <p>
                “He asks thoughtful questions and shows genuine dedication to his students’ success.”
              </p>
              <p><strong>— Kristen Williamson, Professor, Valencia College</strong></p>
            </div>

            <div className="card">
              <h3>Literacy & Curriculum</h3>
              <p>
                “Stephen supported the writing and vetting of Secondary ELA curriculum resources used by teachers across OCPS.”
              </p>
              <p><strong>— Alisha Teague, Secondary Literacy Program Specialist</strong></p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <h2 className="section-title">Contact</h2>
          <p className="section-intro">
            For professional inquiries, teaching opportunities, or collaboration, please reach out.
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:scottstephena@gmail.com">scottstephena@gmail.com</a>
          </p>
          <p>
            <strong>Website:</strong> mrscott.education
          </p>
        </section>
      </main>

      <footer>
        <p>Stephen Scott, M.Ed. | Literacy Educator | College Instructor | Instructional Leader</p>
        <p>© 2026 Stephen Scott. All rights reserved.</p>
      </footer>
    </>
  );
}
