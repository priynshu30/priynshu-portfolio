import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/App.css';

function App() {
  const [photoError, setPhotoError] = useState(false);
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const pageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const xTo = gsap.quickTo(cursorRef.current, 'x', {
      duration: 0.18,
      ease: 'power3.out',
    });
    const yTo = gsap.quickTo(cursorRef.current, 'y', {
      duration: 0.18,
      ease: 'power3.out',
    });
    const xDotTo = gsap.quickTo(cursorDotRef.current, 'x', {
      duration: 0.08,
      ease: 'power3.out',
    });
    const yDotTo = gsap.quickTo(cursorDotRef.current, 'y', {
      duration: 0.08,
      ease: 'power3.out',
    });

    const onMouseMove = (event) => {
      xTo(event.clientX - 18);
      yTo(event.clientY - 18);
      xDotTo(event.clientX - 4);
      yDotTo(event.clientY - 4);
    };

    const hoverTargets = document.querySelectorAll('a, button, .info-card, .project-card');
    const handleEnter = () => cursorRef.current?.classList.add('cursor-grow');
    const handleLeave = () => cursorRef.current?.classList.remove('cursor-grow');

    hoverTargets.forEach((item) => {
      item.addEventListener('mouseenter', handleEnter);
      item.addEventListener('mouseleave', handleLeave);
    });
    window.addEventListener('mousemove', onMouseMove);

    gsap.to('.hero-content', {
      y: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: '#home',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to('.hero-visual', {
      y: 40,
      ease: 'none',
      scrollTrigger: {
        trigger: '#home',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.utils.toArray('.content-section').forEach((section) => {
      gsap.from(section, {
        y: 32,
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      hoverTargets.forEach((item) => {
        item.removeEventListener('mouseenter', handleEnter);
        item.removeEventListener('mouseleave', handleLeave);
      });
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="portfolio-page" ref={pageRef}>
      <div ref={cursorRef} className="custom-cursor-ring" />
      <div ref={cursorDotRef} className="custom-cursor-dot" />
      <header className="top-nav">
        <div className="brand">logo</div>
        <nav className="menu">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#services">services</a>
          <a href="#work">work</a>
          <a href="#experience">testimonials</a>
          <a href="#contact">contact</a>
        </nav>
      </header>

      <main className="hero section-reveal reveal-delay-1" id="home">
        <div className="left-cover-bg">left cover bg</div>
        <aside className="socials fade-in-left">
          <a href="#" target="_blank" rel="noreferrer">YouTube</a>
          <a href="#" target="_blank" rel="noreferrer">Instagram</a>
          <a href="#" target="_blank" rel="noreferrer">Facebook</a>
          <a href="#" target="_blank" rel="noreferrer">Dribbble</a>
          <a href="#" target="_blank" rel="noreferrer">Pinterest</a>
          <a href="https://github.com/priyanshu" target="_blank" rel="noreferrer">Github</a>
        </aside>

        <section className="hero-content fade-in-up reveal-delay-2">
          <p className="eyebrow">avatar</p>
          <h1>
            <span className="reveal-word">Transforming</span>{' '}
            <span className="reveal-word">Ideas</span>
            <br />
            <span className="reveal-word">Into</span>{' '}
            <span className="reveal-word">Digital Reality</span>
          </h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate,
            exercitationem harum, quia nulla temporibus deleniti libero veniam
            vero beatae numquam ducimus illum ab similique ipsam tempore fugit
            quod laudantium debitis.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">View Projects</a>
            <a className="btn btn-secondary" href="#contact">Contact Me</a>
          </div>
        </section>

        <section className="hero-visual fade-in-up reveal-delay-3">
          <div className="rounded-text badge-top">rounded text</div>
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
          <div className="rounded-text badge-bottom">rounded text</div>
          <div className="ring-text">react - node - mongodb - typescript -</div>
        </section>
      </main>

      <section className="content-section section-reveal reveal-delay-1" id="about">
        <h2>Professional Summary</h2>
        <p>
          Results-driven Full Stack Developer (MERN) with hands-on experience
          building 3+ production-grade web applications. Strong in API design,
          authentication, responsive frontend development, and scalable project
          architecture. Solved 250+ LeetCode problems across arrays, trees,
          dynamic programming, and graph problems.
        </p>
      </section>

      <section className="content-section section-reveal reveal-delay-2" id="services">
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

      <section className="content-section section-reveal reveal-delay-3" id="work">
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

      <section className="content-section section-reveal reveal-delay-2" id="experience">
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

      <section className="content-section section-reveal reveal-delay-3" id="contact">
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
