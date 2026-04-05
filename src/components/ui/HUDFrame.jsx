import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import TypewriterText from './TypewriterText';

const HUDFrame = ({ children, title, delay = 0 }) => {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBooted(true), delay + 500);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="hud-frame-container">
      <motion.div 
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay, duration: 1, ease: "circOut" }}
        className="hud-border-glow"
      />
      
      <div className="hud-content">
        {title && (
            <div className="hud-title-bar">
                <div className="hud-title-dot" />
                <TypewriterText 
                    text={title} 
                    delay={delay + 800} 
                    speed={30} 
                    className="hud-title-text" 
                />
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: delay + 1.2, duration: 1 }}
                    className="hud-title-line" 
                />
            </div>
        )}
        
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: booted ? 1 : 0 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
      </div>
      
      {/* Decorative Corner Elements */}
      {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map(pos => (
        <motion.div 
            key={pos}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.2 * (['top-left', 'top-right', 'bottom-left', 'bottom-right'].indexOf(pos)), duration: 0.5 }}
            className={`hud-corner ${pos}`} 
        />
      ))}
      
      <div className="hud-scanline" />
    </div>
  );
};

export default HUDFrame;
