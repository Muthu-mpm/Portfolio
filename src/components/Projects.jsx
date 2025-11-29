import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="section container">
      <h2 style={{ 
        fontSize: 'clamp(2rem, 5vw, 3rem)', 
        marginBottom: '3rem', 
        textAlign: 'center' 
      }}>
        Featured <span className="gradient-text">Projects</span>
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
