function ProjectCard({ title, description, tech, link }) {
  return (
    <div style={{
      border: '1px solid #e1e4e8',
      borderRadius: '12px',
      padding: '1.25rem',
      marginBottom: '1rem',
      background: 'white'
    }}>
      <h3 style={{ margin: '0 0 8px', fontSize: '1.1rem' }}>{title}</h3>
      <p style={{ color: '#555', fontSize: '14px', margin: '0 0 12px', lineHeight: '1.6' }}>{description}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{
          background: '#e8f5e9',
          color: '#2e7d32',
          padding: '3px 12px',
          borderRadius: '99px',
          fontSize: '12px',
          fontWeight: '500'
        }}>
          {tech}
        </span>
        {link && (
          <a href={link} style={{ fontSize: '13px', color: '#0366d6' }}>View →</a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;