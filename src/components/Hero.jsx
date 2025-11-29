import React from 'react';
import { motion } from 'framer-motion';
import ThreeBackground from './ThreeBackground';

const Hero = () => {
  return (
    <section style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden' }}>
      <ThreeBackground />
      
      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 1, 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '1rem', lineHeight: 1.1 }}>
            <span className="gradient-text">Creative Developer</span><br />
            & 3D Specialist
          </h1>
          <p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '2rem' }}>
            Crafting immersive web experiences with Three.js, WebGL, and React.
          </p>
          <button 
            style={{ 
              padding: '1rem 2rem', 
              fontSize: '1.2rem', 
              backgroundColor: 'var(--accent-color)', 
              color: 'white', 
              borderRadius: '50px',
              fontWeight: 600,
              boxShadow: '0 4px 15px var(--accent-glow)',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          >
            View Work
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
