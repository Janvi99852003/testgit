function SkillBadge({ name }) {
  //               ↑ receives "name" as a prop from the parent

  return (
    <span style={{
      background: '#e8f5e9',
      color: '#2e7d32',
      padding: '5px 14px',
      borderRadius: '99px',
      fontSize: '13px',
      fontWeight: '500',
      display: 'inline-block',
      margin: '4px'
    }}>
      {name}
    </span>
  );
}

export default SkillBadge;