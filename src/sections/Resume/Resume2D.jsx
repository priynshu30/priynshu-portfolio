import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink, ArrowLeft, Globe, Database, Server, Cpu, Layers, Code2, GraduationCap, Award, Users } from 'lucide-react';
import '../../styles/Resume2D.css';

function Resume2D({ toggleView, initialSection }) {
  const sectionRefs = React.useRef({});

  React.useEffect(() => {
    if (initialSection && sectionRefs.current[initialSection]) {
        sectionRefs.current[initialSection].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [initialSection]);

  const skills = [
    { name: 'React.js / Vite', icon: <Globe size={14} />, level: 'Expert' },
    { name: 'Node.js / Express', icon: <Server size={14} />, level: 'Advanced' },
    { name: 'TypeScript / JS (ES6+)', icon: <Cpu size={14} />, level: 'Advanced' },
    { name: 'MongoDB / Mongoose / SQL', icon: <Database size={14} />, level: 'Advanced' },
    { name: 'Redux Toolkit', icon: <Layers size={14} />, level: 'Expert' },
    { name: 'Vitest / RTL / Git', icon: <Code2 size={14} />, level: 'Advanced' },
  ];
  
  const projects = [
    { 
        title: 'UrbanCart', 
        subtitle: 'Premium E-Commerce Platform',
        description: 'Built a responsive SPA managing 100+ products with cart, wishlist, search, and filter. Achieved full test coverage with Vitest.',
        tech: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Vitest'],
        link: '#',
        image: '/urbancart.png'
    },
    { 
        title: 'DocCare', 
        subtitle: 'Doctor Appointment Platform',
        description: 'Developed a full-stack healthcare platform with secure JWT authentication and role-based access control for patients and doctors.',
        tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
        link: '#',
        image: '/doccare.png'
    },
    { 
        title: 'Entertainment App', 
        subtitle: 'Movie & TV Series Platform',
        description: 'Integrated TMDB API for real-time movie data. Managed global state with Redux Toolkit and designed an engaging responsive UI.',
        tech: ['React', 'Node.js', 'MongoDB', 'Redux Toolkit', 'TMDB API'],
        link: '#',
        image: '/entertainment.png'
    }
  ];

  const experience = [
    {
        company: 'ALMABETTER',
        role: 'Peer Mentor – JavaScript & React',
        period: 'MAR 2024 - PRESENT',
        desc: 'Mentoring 20+ peers in JavaScript and React fundamentals, improving project completion rates by 30%.'
    }
  ];

  const education = [
    {
        institution: 'LOVELY PROFESSIONAL UNIVERSITY (DISTANCE)',
        degree: 'Master of Computer Applications (MCA)',
        period: '2023 - 2026',
        details: 'CGPA: 7.10 | Focus: Full Stack Web Development, Database Management'
    },
    {
        institution: "ST. JOHN'S COLLEGE, AGRA",
        degree: 'B.Sc. – Physics, Statistics & Mathematics',
        period: '2021 - 2023',
        details: 'CGPA: 6.0 | Strong foundation in analytical thinking and problem-solving.'
    }
  ];

  return (
    <div className="resume-2d-container">
      <motion.button 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={toggleView} 
        className="back-button"
      >
        <ArrowLeft size={16} />
        <span>RE_ENTER_3D_SPACE</span>
      </motion.button>

      <div className="resume-content">
        <header className="hero">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-inner"
          >
            <div className="hero-avatar">
                <img src="/profile_avatar.png" alt="Priyanshu" onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }} />
            </div>
            <div className="hero-text">
                <h1 className="name">PRIYANSHU</h1>
                <p className="title">MERN STACK DEVELOPER // AGRA, UP, INDIA</p>
                <div className="links">
                    <a href="mailto:priyanshukumarr444@gmail.com" className="link-item"><Mail size={18} /><span>EMAIL</span></a>
                    <a href="https://github.com" className="link-item"><Github size={18} /><span>GITHUB</span></a>
                    <a href="https://linkedin.com" className="link-item"><Linkedin size={18} /><span>LINKEDIN</span></a>
                </div>
            </div>
          </motion.div>
        </header>

        <section className="section" ref={(el) => (sectionRefs.current['about'] = el)} id="about">
          <h2><div className="h2-dot" />01_PROFESSIONAL_SUMMARY</h2>
          <p className="bio">
            MERN Stack Developer with hands-on experience building full-stack applications using React, TypeScript, Node.js, Express, and MongoDB. 
            Proficient in REST APIs, JWT authentication, Redux Toolkit, and responsive UI development. 
            Solved 250+ LeetCode problems demonstrating strong DSA skills.
          </p>
        </section>

        <section className="section" ref={(el) => (sectionRefs.current['skills'] = el)} id="skills">
          <h2><div className="h2-dot" />02_TECHNICAL_SKILLS</h2>
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <motion.div 
                key={skill.name} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="skill-card"
              >
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section" ref={(el) => (sectionRefs.current['projects'] = el)} id="projects">
          <h2><div className="h2-dot" />03_FEATURED_PROJECTS</h2>
          <div className="project-grid-2d">
            {projects.map((project, i) => (
              <motion.div 
                key={project.title} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="project-card-2d"
              >
                <div className="project-img-wrapper">
                    <img src={project.image} alt={project.title} onError={(e) => { e.target.src = 'https://via.placeholder.com/400x200?text=PROJECT_IMAGE'; }} />
                </div>
                <div className="project-info-2d">
                    <div className="project-header-2d">
                        <h3>{project.title}</h3>
                        <ExternalLink size={16} />
                    </div>
                    <p>{project.description}</p>
                    <div className="project-tech">
                      {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section" ref={(el) => (sectionRefs.current['experience'] = el)} id="experience">
          <h2><div className="h2-dot" />04_EXPERIENCE_&_LEADERSHIP</h2>
          <div className="timeline">
            {experience.map((exp, i) => (
              <motion.div 
                key={exp.company} 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="timeline-item"
              >
                <div className="timeline-marker" />
                <div className="timeline-content">
                    <div className="exp-header">
                        <span className="company"><Users size={14} style={{marginRight: '8px'}}/>{exp.company}</span>
                        <span className="period">{exp.period}</span>
                    </div>
                    <span className="role">{exp.role}</span>
                    <p>{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <h2><div className="h2-dot" />05_ACADEMIC_PROFILE</h2>
          <div className="education-list">
            {education.map((edu, i) => (
              <motion.div 
                key={edu.institution}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + (i * 0.1) }}
                className="edu-card"
              >
                <div className="edu-header">
                    <span className="institution"><GraduationCap size={16} /> {edu.institution}</span>
                    <span className="period">{edu.period}</span>
                </div>
                <span className="degree">{edu.degree}</span>
                <p className="edu-details">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section">
            <h2><div className="h2-dot" />06_CERTIFICATIONS & AWARDS</h2>
            <div className="awards-grid">
                <div className="award-item">
                    <Award size={16} color="#3b82f6" />
                    <span>Excellence in Web Development – LPU (Nov 2024)</span>
                </div>
                <div className="award-item">
                    <Award size={16} color="#3b82f6" />
                    <span>Applied Full Stack Development – AlmaBetter</span>
                </div>
                <div className="award-item">
                    <Award size={16} color="#3b82f6" />
                    <span>DOEACC 'O' Level – NIELIT</span>
                </div>
            </div>
        </section>

        <section className="section" ref={(el) => (sectionRefs.current['contact'] = el)} id="contact">
          <h2><div className="h2-dot" />07_ESTABLISH_LINK</h2>
          <form className="contact-terminal">
            <div className="form-group">
                <label>INPUT_NAME</label>
                <input type="text" placeholder="RECRUITER_NAME" />
            </div>
            <div className="form-group">
                <label>INPUT_EMAIL</label>
                <input type="email" placeholder="OFFICE@CORP.COM" />
            </div>
            <div className="form-group">
                <label>INPUT_MESSAGE</label>
                <textarea placeholder="INTERVIEW_PROPOSAL_DETAILS..." rows="4"></textarea>
            </div>
            <button type="submit" className="terminal-submit">
                TRANSMIT_SIGNAL
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Resume2D;
