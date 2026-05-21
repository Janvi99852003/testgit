function Header() {
  return (
    <header style={{
      background: '#1a1a2e',
      color: 'white',
      padding: '1.5rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Janvi</h1>
        <p style={{ margin: '4px 0 0', opacity: 0.6, fontSize: '13px' }}>React Developer</p>
      </div>
      <nav style={{ display: 'flex', gap: '1.5rem' }}>
        <a href="#about"    style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>About</a>
        <a href="#skills"   style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>Skills</a>
        <a href="#projects" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>Projects</a>
        <a href="#contact"  style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
//     ↑ ALWAYS add this at the bottom
//       Without it, App.js can't import this component