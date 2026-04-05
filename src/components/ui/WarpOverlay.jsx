import React from 'react';
import { motion } from 'framer-motion';

const WarpOverlay = ({ isWarping }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isWarping ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="warp-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        zIndex: 1000,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* High-speed streak lines */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isWarping ? { 
            scaleX: [0, 5, 0], 
            opacity: [0, 0.8, 0],
            translateX: ['-100%', '100%']
          } : {}}
          transition={{ 
            duration: 0.5, 
            repeat: Infinity, 
            delay: Math.random() * 0.5,
            ease: "expoIn" 
          }}
          style={{
            position: 'absolute',
            width: '100px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #3b82f6, #fff, transparent)',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transformOrigin: 'left'
          }}
        />
      ))}
      
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={isWarping ? { scale: [0, 20], opacity: [0, 1, 0] } : {}}
        transition={{ duration: 0.8, ease: "circIn" }}
        style={{
            width: '100px',
            height: '100px',
            background: 'radial-gradient(circle, #fff, #3b82f6, transparent)',
            borderRadius: '50%',
            filter: 'blur(20px)'
        }}
      />
    </motion.div>
  );
};

export default WarpOverlay;
