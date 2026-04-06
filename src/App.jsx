import { useState } from 'react';
import './styles/App.css';

function App() {
  const [photoError, setPhotoError] = useState(false);

  return (
    <div className="portfolio-page">
      <header className="top-nav">
        <div className="brand">Priyanshu</div>
        <nav className="menu">
          <a href="#home">home</a>
          <a href="#about">summary</a>
          <a href="#services">services</a>
          <a href="#work">work</a>
          <a href="#experience">experience</a>
          <a href="#contact">contact</a>
          <a className="resume-link" href="/Priyanshu_Resume.pdf" download>resume</a>
        </nav>
      </header>

      <main className="hero section-reveal" id="home">
        <aside className="socials">
          <a href="mailto:priyanshukumarr444@gmail.com">Email</a>
          <a href="tel:+919012965152">+91 9012965152</a>
          <a href="https://github.com/priyanshu" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/priyanshu" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://leetcode.com/u/priynshu30" target="_blank" rel="noreferrer">LeetCode</a>
          <a href="#contact">Agra, UP, India</a>
        </aside>

        <section className="hero-content">
          <p className="eyebrow">full stack developer · mern stack · typescript</p>
          <h1>
            Building Scalable
            <br />
            Web Experiences
          </h1>
          <p className="description">
            Results-driven MERN developer with experience building production-grade
            web apps using React, TypeScript, Node.js, Express, and MongoDB. I focus
            on REST APIs, JWT authentication, Redux Toolkit, and responsive UI.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">View Projects</a>
            <a className="btn btn-secondary" href="#contact">Contact Me</a>
          </div>
        </section>

        <section className="hero-visual">
          <div className="avatar-circle">
            {!photoError ? (
              <img
                className="avatar-photo"
                src="/profile.jpg"
                alt="Priyanshu"
                onError={() => setPhotoError(true)}
              />
            ) : (
              <div className="avatar-inner">PRIYANSHU</div>
            )}
          </div>
          <div className="ring-text">react - node - mongodb - typescript -</div>
        </section>
      </main>

      <section className="content-section section-reveal" id="about">
        <h2>Professional Summary</h2>
        <p>
          Results-driven Full Stack Developer (MERN) with hands-on experience
          building 3+ production-grade web applications. Strong in API design,
          authentication, responsive frontend development, and scalable project
          architecture. Solved 250+ LeetCode problems across arrays, trees,
          dynamic programming, and graph problems.
        </p>
      </section>

      <section className="content-section section-reveal" id="services">
        <h2>Technical Skills</h2>
        <div className="card-grid">
          <article className="info-card">
            <h3>Frontend</h3>
            <p>React.js, TypeScript, JavaScript, Redux Toolkit, Vite, Tailwind CSS</p>
          </article>
          <article className="info-card">
            <h3>Backend</h3>
            <p>Node.js, Express.js, REST APIs, JWT Authentication, Middleware, MVC</p>
          </article>
          <article className="info-card">
            <h3>Database</h3>
            <p>MongoDB, Mongoose, SQL, PostgreSQL (basic)</p>
          </article>
          <article className="info-card">
            <h3>Tools</h3>
            <p>Git, GitHub, Postman, Netlify, Vercel, Docker, GitHub Actions</p>
          </article>
        </div>
      </section>

      <section className="content-section section-reveal" id="work">
        <h2>Featured Projects</h2>
        <div className="project-list">
          <article className="project-card">
            <h3>UrbanCart</h3>
            <p>
              Responsive e-commerce app with cart, wishlist, filtering, localStorage
              persistence, and tested UI flows.
            </p>
            <div className="project-actions">
              <a href="https://urbancart.vercel.app" target="_blank" rel="noreferrer">Live Demo</a>
              <a href="https://github.com/priynshu30/urbancart" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </article>
          <article className="project-card">
            <h3>DocCare</h3>
            <p>
              Full-stack healthcare platform with JWT auth, role-based access,
              appointment APIs, and MVC architecture.
            </p>
            <div className="project-actions">
              <a href="https://doccare.vercel.app" target="_blank" rel="noreferrer">Live Demo</a>
              <a href="https://github.com/priynshu30/doccare" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </article>
          <article className="project-card">
            <h3>Entertainment App</h3>
            <p>
              Movie and TV web app using TMDB API with search, bookmarks, auth,
              and responsive dashboard-style UI.
            </p>
            <div className="project-actions">
              <a href="https://entertainme.vercel.app" target="_blank" rel="noreferrer">Live Demo</a>
              <a href="https://github.com/priynshu30/entertainment-app" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </article>
        </div>
      </section>

      <section className="content-section section-reveal" id="experience">
        <h2>Experience & Education</h2>
        <div className="timeline">
          <article className="timeline-item">
            <h3>Peer Mentor — JavaScript & React</h3>
            <p>AlmaBetter (Remote) · Mar 2024 – Present</p>
            <p>Mentored 20+ peers and improved project completion rates by 30%.</p>
          </article>
          <article className="timeline-item">
            <h3>Master of Computer Applications (MCA)</h3>
            <p>Lovely Professional University · 2023 – 2026 · CGPA: 7.10</p>
          </article>
          <article className="timeline-item">
            <h3>B.Sc. Physics, Statistics & Mathematics</h3>
            <p>St. John&apos;s College, Agra · 2021 – 2023 · CGPA: 6.0</p>
          </article>
        </div>
      </section>

      <section className="content-section section-reveal" id="contact">
        <h2>Contact</h2>
        <div className="contact-box">
          <p>Email: priyanshukumarr444@gmail.com</p>
          <p>Phone: +91 9012965152</p>
          <p>Location: Agra, Uttar Pradesh, India</p>
          <p>Certifications: Applied Full Stack Development, DOEACC O Level</p>
        </div>
      </section>
    </div>
  );
}

export default App;
