import React from 'react';
import { Mail, Github, Linkedin, ExternalLink, ArrowLeft } from 'lucide-react';
import '../../styles/Resume2D.css';

function Resume2D({ toggleView }) {
  const skills = ['React', 'Three.js', 'GSAP', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind', 'MongoDB'];
  
  const projects = [
    { title: 'Project One', description: 'A massive 3D universe visualizer.' },
    { title: 'Project Two', description: 'Advanced physics engine for the web.' },
    { title: 'Project Three', description: 'Interactive AI simulation platform.' }
  ];

  return (
    <div className="resume-2d-container">
      <button onClick={toggleView} className="back-button">
        <ArrowLeft size={20} />
        <span>Back to 3D View</span>
      </button>

      <div className="resume-content">
        <section className="hero">
          <h1 className="name">John Doe</h1>
          <p className="title">Full Stack Developer & 3D Web Artist</p>
          <div className="links">
            <a href="#"><Mail size={18} /></a>
            <a href="#"><Github size={18} /></a>
            <a href="#"><Linkedin size={18} /></a>
          </div>
        </section>

        <section className="section">
          <h2>About Me</h2>
          <p>
            I specialize in building immersive web experiences that push the boundaries of modern browsers. 
            Merging technical full-stack skills with a passion for 3D art and design.
          </p>
        </section>

        <section className="section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map(skill => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Projects</h2>
          <div className="project-list">
            {projects.map(project => (
              <div key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-link">
                  <ExternalLink size={14} /> View Project
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Contact</h2>
          <form className="contact-form" action="https://formspree.io/f/your-id" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required rows="4"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Resume2D;
