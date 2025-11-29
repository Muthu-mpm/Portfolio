import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "Three.js", "React Three Fiber", "WebGL", "GLSL Shaders", 
  "React.js", "Node.js", "MongoDB", "C# / OpenGL",
  "PrestaShop", "Shopify", "WordPress",
  "JavaScript (ES6+)", "HTML5/CSS3", "Git"
];

const About = () => {
  return (
    <section className="section container" style={{ maxWidth: '800px' }}>
      <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '2rem', textAlign: 'center' }}>
        About <span className="gradient-text">Me</span>
      </h2>
      
      <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.8 }}>
          I am a passionate Creative Developer specializing in 3D web experiences. 
          With a deep understanding of Three.js and WebGL, I bridge the gap between design and technology 
          to build immersive, high-performance applications. I have successfully delivered over 15 projects, 
          ranging from product configurators to architectural visualizations.
        </p>
        
        <h3 style={{ marginBottom: '1rem' }}>Technical Skills</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {skills.map((skill, index) => (
            <motion.span 
              key={index}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(99, 102, 241, 0.2)' }}
              style={{
                padding: '0.5rem 1.5rem',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '50px',
                fontSize: '0.9rem',
                border: '1px solid rgba(255,255,255,0.1)',
                cursor: 'default'
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
