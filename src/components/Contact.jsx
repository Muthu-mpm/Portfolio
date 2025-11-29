import React from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section className="section container" style={{ textAlign: 'center', paddingBottom: '4rem' }}>
      <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>
        Let's Work <span className="gradient-text">Together</span>
      </h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
        Have a project in mind? Looking for a 3D expert to join your team? 
        I'm always open to discussing new opportunities.
      </p>
      
      <a 
        href="mailto:muthu.shader@gmail.com"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '1rem 2.5rem',
          fontSize: '1.2rem',
          backgroundColor: 'var(--text-primary)',
          color: 'var(--bg-primary)',
          borderRadius: '50px',
          fontWeight: 600,
          transition: 'transform 0.2s'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <Mail size={20} />
        Get in Touch
      </a>
      
      <footer style={{ marginTop: '5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
