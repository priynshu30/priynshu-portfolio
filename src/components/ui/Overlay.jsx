import React, { useState, useEffect } from 'react';
import { MousePointer2, Move, LayoutGrid, Download, FileText, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import HUDFrame from './HUDFrame';
import TypewriterText from './TypewriterText';
import '../../styles/Overlay.css';

const DataStream = () => {
  const [logs, setLogs] = useState(['INIT_OS... OK', 'MAPPING_SPACE... OK', 'READY']);
  
  useEffect(() => {
    const newLogs = [
      'SCANNING_SECTOR_7G',
      'VECTOR_LOCKED',
      'CORE_TEMP_NOMINAL',
      'GRAVITY_CONSTANT: 0.00ms²',
      'ANTIGRAVITY_DRIVE: ACTIVE',
      'NEURAL_LINK_ESTABLISHED'
    ];
    let i = 0;
    const interval = setInterval(() => {
      setLogs(prev => [...prev.slice(-4), newLogs[i]]);
      i = (i + 1) % newLogs.length;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="data-stream">
      {logs.map((log, i) => (
        <div key={i} className="log-entry">{'>'} {log}</div>
      ))}
    </div>
  );
};

const Radar = () => {
  return (
    <div className="radar-container">
      <div className="radar-circle">
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="radar-sweep"
        />
        <div className="radar-crosshair-h" />
        <div className="radar-crosshair-v" />
        <motion.div 
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="radar-blip"
        />
      </div>
      <div className="radar-label">RANGE_SCAN: ACTIVE</div>
    </div>
  );
};

const SECTION_DATA = {
    about: {
        header: 'PRIYANSHU',
        lines: [
            'ROLE: MERN_STACK_DEVELOPER',
            'LOCATION: AGRA_UP_INDIA',
            'EDUCATION: MCA_LPU_2026',
            'GPA: 7.10/10.0'
        ],
        desc: 'MERN Stack Developer proficient in React, TypeScript, and Node.js. Solved 250+ LeetCode problems.',
        color: '#3b82f6'
    },
    skills: {
        header: 'CORE_ENGINE',
        lines: [
            'FRONTEND: REACT/TS/REDUX/TAILWIND',
            'BACKEND: NODE/EXPRESS/JWT/MVC',
            'TESTING: VITEST/UNIT_TESTS/RTL',
            'TOOLS: GIT/POSTMAN/NETLIFY'
        ],
        color: '#8b5cf6'
    },
    projects: {
        header: 'ASSET_LOGS',
        lines: [
            'URBANCART: E-COMM_SPA_100+',
            'DOCCARE: HEALTHCARE_JWT',
            'ENTERTAINMENT: TMDB_MEDIA',
            'LEETCODE: 250+_SOLVED'
        ],
        color: '#ec4899'
    },
    experience: {
        header: 'COMMAND_HISTORY',
        lines: [
            'PEER_MENTOR: ALMABETTER',
            'AWARDS: LPU_EXCELLENCE_2024',
            'CERT: APPLIED_FULL_STACK',
            'CERT: DOEACC_O_LEVEL'
        ],
        color: '#10b981'
    },
    contact: {
        header: 'COMM_CHANNELS',
        lines: [
            'EMAIL: priyanshukumarr444@gmail.com',
            'SIGNAL: +91 9012965152',
            'PROFILES: GITHUB/LINKEDIN'
        ],
        color: '#f59e0b'
    }
};

const DataPod = ({ sectionKey, onEnter }) => {
    const data = SECTION_DATA[sectionKey];
    if (!data) return null;

    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -50 }}
            transition={{ duration: 0.3 }}
            className="data-pod-ui"
            style={{ '--accent-color': data.color }}
        >
            <div className="pod-header">
                <div className="pod-dot" />
                <span>{data.header}</span>
            </div>
            <div className="pod-lines">
                {data.lines.map((line, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + (i * 0.05) }}
                        className="pod-line"
                    >
                        <span className="pod-line-prefix">{">>" }</span>
                        <span className="pod-line-text">{line}</span>
                    </motion.div>
                ))}
            </div>
            <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: data.color, color: '#fff' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onEnter(sectionKey)}
                className="pod-jump-btn"
            >
                INITIATE_DATA_JUMP
            </motion.button>
            <div className="pod-footer" />
        </motion.div>
    );
};

function Overlay({ toggleView, setActiveSection, activeSection, handleEnterSection }) {
  const navItems = ['about', 'skills', 'projects', 'experience', 'contact'];

  return (
    <div className="overlay-container">
      <header className="header">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1 }}
        >
            <div className="branding-wrapper">
                <div className="biometric-avatar">
                    <img src="/profile_avatar.png" alt="Biometric ID" onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }} />
                    <div className="biometric-scanline"></div>
                </div>
                <div className="branding-info">
                    <h1 className="logo" onClick={() => setActiveSection(null)}>PRIYANSHU</h1>
                    <div className="role-tag">
                        <Code2Icon size={10} />
                        <span>MERN_STACK_DEVELOPER // 2024</span>
                    </div>
                </div>
            </div>
            <TypewriterText 
                text="SYSTEM_STATUS: NOMINAL_OPERATION" 
                delay={1000} 
                speed={40} 
                className="version-text" 
            />
        </motion.div>
        
        <nav className="nav">
          {navItems.map((item, index) => (
            <motion.button
              key={item}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5 + (0.1 * index), duration: 0.5 }}
              whileHover={{ x: -10, color: '#3b82f6' }}
              className="nav-item"
              onClick={() => setActiveSection(item)}
              style={{ color: activeSection === item ? '#3b82f6' : '' }}
            >
              <div className="nav-pulse" style={{ opacity: activeSection === item ? 1 : 0 }} />
              <span className="nav-number">0{index + 1}</span>
              {item}
            </motion.button>
          ))}
        </nav>
      </header>

      <div className="middle-content">
        <AnimatePresence mode="wait">
            {activeSection && ( activeSection !== 'projects' ? (
                <DataPod 
                    key={activeSection} 
                    sectionKey={activeSection} 
                    onEnter={handleEnterSection} 
                />
            ) : (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="project-preview-pod"
                >
                    <div className="pod-header">ASSET_PREVIEW</div>
                    <div className="project-preview-viewport">
                        <img src="/urbancart.png" alt="Project Preview" className="project-preview-img" onError={(e) => { e.target.src = 'https://via.placeholder.com/400x200?text=PROJECT_SCREENSHOT'; }} />
                        <div className="viewport-overlay"></div>
                    </div>
                    <button onClick={() => handleEnterSection('projects')} className="pod-jump-btn">VIEW_PROJECT_DATABASE</button>
                </motion.div>
            ))}
        </AnimatePresence>
      </div>

      <div className="hud-bottom">
        <HUDFrame title="CENTRAL_NAV_TERMINAL" delay={1000}>
          <div className="hud-bottom-content holographic-flicker">
            <div className="hud-meta">
                <Radar />
                <div className="controls-hint">
                    <div className="hint-item">
                    <MousePointer2 size={12} />
                    <span>INTERACT_NODE</span>
                    </div>
                    <div className="hint-item">
                    <Move size={12} />
                    <span>ORBIT_SWEEP</span>
                    </div>
                </div>
            </div>
            <DataStream />
          </div>
        </HUDFrame>
        
        <div className="action-buttons">
            <motion.a 
                href="/resume.pdf"
                download="Resume_FullStack.pdf"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8 }}
                className="download-button"
            >
                <div className="liquid-layer"></div>
                <Download size={16} />
                <span>EXPORT_CV.pdf</span>
            </motion.a>

            <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
                onClick={toggleView} 
                className="toggle-button"
            >
                <div className="btn-glitch-layer"></div>
                <FileText size={16} />
                <span>UNFOLD_LEGACY</span>
            </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
