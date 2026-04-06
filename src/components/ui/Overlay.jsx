import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import '../../styles/Overlay.css';

// Reusable Reveal Animation Component
const RevealText = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className="reveal-text">
      <motion.div
        className="reveal-inner"
        initial={{ y: "100%", opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

const Portfolio = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio-container">
      {/* Fixed Navigation */}
      <nav className="nav-header">
        <div className="nav-logo" onClick={() => window.scrollTo({top: 0, behavior:'smooth'})}>
          Priyanshu.
        </div>
        <div className="nav-links">
          <span className="nav-link" onClick={() => scrollTo('about')}>About</span>
          <span className="nav-link" onClick={() => scrollTo('projects')}>Projects</span>
          <span className="nav-link" onClick={() => scrollTo('expertise')}>Expertise</span>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="section hero-section" id="hero">
        <RevealText delay={0.2}>
          <h1 className="heading-primary">Modern</h1>
        </RevealText>
        <RevealText delay={0.4}>
          <h1 className="heading-primary">Digital</h1>
        </RevealText>
        <RevealText delay={0.6}>
          <h1 className="heading-primary">Craft.</h1>
        </RevealText>
        
        <FadeIn delay={0.8} className="hero-sub">
          <p>MERN Stack Developer proficient in React, TypeScript, and Node.js. Architecting clean, scalable, and immersive web experiences from the ground up.</p>
        </FadeIn>
      </main>

      {/* About Section */}
      <section className="section about-section section-dark" id="about">
        <div className="about-content">
          <FadeIn>
            <div className="about-image-container">
              {/* Optional sophisticated self-portrait or abstract art */}
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" alt="Abstract" className="about-image" />
            </div>
          </FadeIn>
          
          <div className="about-text">
            <RevealText>
              <span className="text-label">01 / The Architect</span>
            </RevealText>
            <RevealText delay={0.2}>
              <h2 className="heading-secondary">Building highly performant systems.</h2>
            </RevealText>
            <FadeIn delay={0.4}>
              <p className="text-body mb-4">
                I merge highly technical backend architecture with incredibly smooth, intentional frontend interfaces. Form and function, perfectly balanced.
              </p>
              <br/>
              <p className="text-body">
                Location: Agra, India<br/>
                Education: MCA, LPU (2026)<br/>
                Focus: MERN Stack & Algorithm Optimization
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section projects-section" id="projects">
        <RevealText>
          <span className="text-label">02 / Selected Works</span>
        </RevealText>
        <RevealText delay={0.2}>
          <h2 className="heading-secondary">Digital Products.</h2>
        </RevealText>

        <div className="projects-grid">
          {[
            { title: 'UrbanCart', tag: 'E-Comm SPA', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop' },
            { title: 'DocCare', tag: 'Healthcare System', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop' },
            { title: 'MeetConnect', tag: 'Interview Platform', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop' },
            { title: 'Entertainment App', tag: 'TMDB Media', img: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1935&auto=format&fit=crop' }
          ].map((project, i) => (
            <FadeIn key={i} delay={i * 0.2}>
              <div className="project-card">
                <div className="project-image-wrapper">
                  <img src={project.img} alt={project.title} className="project-image" />
                </div>
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-tags">
                    <span className="project-tag">{project.tag}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section expertise-section section-dark" id="expertise">
        <RevealText>
          <span className="text-label">03 / Capabilities</span>
        </RevealText>
        <RevealText delay={0.2}>
          <h2 className="heading-secondary">Core Engine.</h2>
        </RevealText>

        <div className="expertise-grid">
          <FadeIn delay={0.3}>
            <div className="expertise-list">
              <span className="text-label">Development Stack</span>
              <div className="expertise-item">
                <div className="expertise-item-header">
                  <span className="expertise-title">Frontend</span>
                </div>
                <p className="text-body">React, TypeScript, Redux Toolkit, Tailwind CSS, Framer Motion</p>
              </div>
              <div className="expertise-item">
                <div className="expertise-item-header">
                  <span className="expertise-title">Backend</span>
                </div>
                <p className="text-body">Node.js, Express, MongoDB, JWT, MVC Architecture</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="expertise-list">
              <span className="text-label">Engineering Log</span>
              <div className="expertise-item">
                <div className="expertise-item-header">
                  <span className="expertise-title">Data Structures & Algos</span>
                  <span className="expertise-date">Ongoing</span>
                </div>
                <p className="text-body">250+ LeetCode problems solved. Deep focus on optimization.</p>
              </div>
              <div className="expertise-item">
                <div className="expertise-item-header">
                  <span className="expertise-title">Peer Mentor</span>
                  <span className="expertise-date">AlmaBetter</span>
                </div>
                <p className="text-body">Guiding junior developers through full-stack lifecycle.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer / Contact */}
      <section className="section footer-section" id="contact">
        <RevealText>
          <h2 className="heading-secondary">Let's build<br/>something timeless.</h2>
        </RevealText>
        
        <FadeIn delay={0.4} className="social-links">
          <a href="mailto:priyanshukumarr444@gmail.com" className="social-link"><Mail size={18} className="mr-2 inline"/> Email</a>
          <a href="#" className="social-link"><Github size={18} className="mr-2 inline"/> GitHub</a>
          <a href="#" className="social-link"><Linkedin size={18} className="mr-2 inline"/> LinkedIn</a>
        </FadeIn>
      </section>
    </div>
  );
};

export default Portfolio;
