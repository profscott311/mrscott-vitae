<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Stephen Scott, M.Ed. | Literacy Educator</title>

  <style>
    :root {
      --navy: #17324D;
      --blue: #4F6D8A;
      --light-blue: #E8F0F7;
      --gray: #DCE2E8;
      --off-white: #F8F9FA;
      --white: #FFFFFF;
      --text: #222222;
      --muted: #5F6B75;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.6;
      color: var(--text);
      background: var(--off-white);
    }

    header {
      background: var(--navy);
      color: var(--white);
      padding: 24px 8%;
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 24px;
      flex-wrap: wrap;
    }

    .site-title {
      font-size: 1.1rem;
      font-weight: bold;
      letter-spacing: .3px;
    }

    nav a {
      color: var(--white);
      text-decoration: none;
      margin-left: 18px;
      font-size: .95rem;
    }

    nav a:hover {
      text-decoration: underline;
    }

    .hero {
      background: linear-gradient(135deg, var(--navy), var(--blue));
      color: var(--white);
      padding: 90px 8%;
    }

    .hero-content {
      max-width: 900px;
    }

    .hero h1 {
      font-size: clamp(2.5rem, 6vw, 4.5rem);
      line-height: 1.1;
      margin-bottom: 16px;
    }

    .hero h2 {
      font-size: clamp(1.3rem, 3vw, 2rem);
      font-weight: 400;
      margin-bottom: 20px;
      color: var(--light-blue);
    }

    .hero p {
      font-size: 1.15rem;
      max-width: 760px;
      margin-bottom: 32px;
    }

    .buttons {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }

    .button {
      display: inline-block;
      padding: 12px 20px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: bold;
      border: 2px solid var(--white);
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

    .section-title {
      color: var(--navy);
      font-size: 2rem;
      margin-bottom: 18px;
    }

    .section-intro {
      max-width: 800px;
      color: var(--muted);
      margin-bottom: 36px;
      font-size: 1.05rem;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 24px;
    }

    .card {
      background: var(--white);
      border: 1px solid var(--gray);
      border-radius: 10px;
      padding: 26px;
      box-shadow: 0 4px 14px rgba(0,0,0,.04);
    }

    .card h3 {
      color: var(--navy);
      margin-bottom: 10px;
    }

    .stats {
      background: var(--white);
    }

    .stat-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 20px;
    }

    .stat {
      background: var(--light-blue);
      border-left: 5px solid var(--blue);
      padding: 22px;
      border-radius: 8px;
    }

    .stat strong {
      display: block;
      font-size: 1.6rem;
      color: var(--navy);
    }

    .quote-section {
      background: var(--light-blue);
    }

    blockquote {
      background: var(--white);
      border-left: 5px solid var(--blue);
      padding: 22px;
      border-radius: 8px;
      font-style: italic;
    }

    blockquote cite {
      display: block;
      margin-top: 12px;
      font-style: normal;
      font-weight: bold;
      color: var(--navy);
    }

    footer {
      background: var(--navy);
      color: var(--white);
      padding: 40px 8%;
      text-align: center;
    }

    footer a {
      color: var(--white);
    }

    @media (max-width: 700px) {
      nav {
        align-items: flex-start;
      }

      nav div:last-child {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      nav a {
        margin-left: 0;
      }
    }
  </style>
</head>

<body>

<header>
  <nav>
    <div class="site-title">Stephen Scott, M.Ed.</div>
    <div>
      <a href="#about">About</a>
      <a href="#teaching">Teaching</a>
      <a href="#approach">My Approach</a>
      <a href="#impact">Student Impact</a>
      <a href="#endorsements">Endorsements</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>
</header>

<main>

  <section class="hero">
    <div class="hero-content">
      <h1>Stephen Scott, M.Ed.</h1>
      <h2>Literacy Educator | College Instructor | Instructional Leader</h2>
      <p>
        Supporting literacy growth from middle school through college through teaching,
        curriculum design, coaching, and feedback.
      </p>
      <div class="buttons">
        <a class="button primary" href="#teaching">View Teaching Work</a>
        <a class="button secondary" href="#impact">Student Impact</a>
        <a class="button secondary" href="#contact">Contact</a>
      </div>
    </div>
  </section>

  <section class="stats">
    <div class="stat-grid">
      <div class="stat">
        <strong>17+</strong>
        Years in Education
      </div>
      <div class="stat">
        <strong>M.Ed.</strong>
        English Education
      </div>
      <div class="stat">
        <strong>K–12 → College</strong>
        Literacy Instruction
      </div>
      <div class="stat">
        <strong>Feedback</strong>
        Revision-centered teaching
      </div>
    </div>
  </section>

  <section id="about">
    <h2 class="section-title">About</h2>
    <p class="section-intro">
      I am a literacy educator, college instructor, and instructional leader with experience
      supporting students and teachers across middle school, high school, and college settings.
      My work has centered on reading, writing, revision, student confidence, and practical
      support that helps learners move forward.
    </p>
    <p class="section-intro">
      Across my career, I have served as a classroom teacher, reading interventionist,
      graduation coach, instructional coach, curriculum writer, mentor, and developmental
      reading and writing instructor. The common thread has remained the same: helping
      students and educators grow through clear instruction, meaningful feedback, and
      strong relationships.
    </p>
  </section>

  <section id="teaching">
    <h2 class="section-title">Teaching</h2>
    <p class="section-intro">
      My teaching experience spans K–12 literacy instruction and college developmental
      reading and writing. I design learning experiences that help students build confidence,
      strengthen reading comprehension, develop writing skills, and understand revision as
      part of the learning process.
    </p>

    <div class="cards">
      <div class="card">
        <h3>College Teaching</h3>
        <p>
          At Valencia College, I teach Developmental Reading and Writing, focusing on active
          reading, academic writing, revision, feedback, and college readiness.
        </p>
      </div>

      <div class="card">
        <h3>K–12 Literacy</h3>
        <p>
          My K–12 work includes English Language Arts, intensive reading, intervention,
          student support, and literacy development for diverse learners.
        </p>
      </div>

      <div class="card">
        <h3>Course Design</h3>
        <p>
          I use scaffolded assignments, clear module structure, weekly communication, and
          revision-centered feedback to help students understand expectations and improve.
        </p>
      </div>
    </div>
  </section>

  <section id="approach">
    <h2 class="section-title">My Approach</h2>
    <p class="section-intro">
      My teaching philosophy is built around active learning, meaningful feedback, revision,
      and the belief that students grow when they are supported and challenged.
    </p>

    <div class="cards">
      <div class="card">
        <h3>Literacy</h3>
        <p>
          Reading and writing are tools students use to think, communicate, analyze, and
          participate in academic and professional communities.
        </p>
      </div>

      <div class="card">
        <h3>Feedback</h3>
        <p>
          Feedback should do more than explain a grade. It should give students a path
          forward and help them understand how to improve.
        </p>
      </div>

      <div class="card">
        <h3>Revision</h3>
        <p>
          Strong writing develops through practice, reflection, and revision. Students need
          opportunities to revisit their thinking and strengthen their work.
        </p>
      </div>

      <div class="card">
        <h3>Relationships</h3>
        <p>
          Students are more willing to take academic risks when they know their instructor
          sees them, respects them, and believes they can grow.
        </p>
      </div>
    </div>
  </section>

  <section id="impact" class="quote-section">
    <h2 class="section-title">Student Impact</h2>
    <p class="section-intro">
      Student feedback across courses has consistently highlighted confidence, support,
      clear instruction, revision, and meaningful feedback.
    </p>

    <div class="cards">
      <blockquote>
        “I went unsure, quiet and nervous and leaving with confidence.”
        <cite>Valencia College Student</cite>
      </blockquote>

      <blockquote>
        “His feedback is thoughtful and detailed, which truly helped me grow as a writer.”
        <cite>Valencia College Student</cite>
      </blockquote>

      <blockquote>
        “He really wants you to succeed and gives feedback that pushes you without discouraging you.”
        <cite>Valencia College Student</cite>
      </blockquote>
    </div>
  </section>

  <section id="endorsements">
    <h2 class="section-title">Professional Endorsements</h2>
    <p class="section-intro">
      Recommendations, observations, and student evaluations reflect a consistent emphasis on
      student-centered teaching, literacy growth, feedback, curriculum design, and instructional leadership.
    </p>

    <div class="cards">
      <div class="card">
        <h3>College Teaching</h3>
        <p>
          “Stephen’s instruction clearly supports the competencies expected in ENC1101.”
        </p>
        <p><strong>— Ian Dreilinger, Associate Dean, Valencia College</strong></p>
      </div>

      <div class="card">
        <h3>Student-Centered Practice</h3>
        <p>
          “He asks thoughtful questions and shows genuine dedication to his students’ success.”
        </p>
        <p><strong>— Kristen Williamson, Professor, Valencia College</strong></p>
      </div>

      <div class="card">
        <h3>Instructional Leadership</h3>
        <p>
          “His feedback was precise and actionable.”
        </p>
        <p><strong>— Professional Recommendation</strong></p>
      </div>
    </div>
  </section>

  <section id="contact">
    <h2 class="section-title">Contact</h2>
    <p class="section-intro">
      For professional inquiries, teaching opportunities, or collaboration, please reach out.
    </p>
    <p>
      <strong>Email:</strong> <a href="mailto:scottstephena@gmail.com">scottstephena@gmail.com</a>
    </p>
    <p>
      <strong>Website:</strong> mrscott.education
    </p>
  </section>

</main>

<footer>
  <p>Stephen Scott, M.Ed. | Literacy Educator | College Instructor | Instructional Leader</p>
  <p>&copy; 2026 Stephen Scott. All rights reserved.</p>
</footer>

</body>
</html>
