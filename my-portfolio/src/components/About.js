import { useState, useEffect } from 'react';

function About() {
  const [joke, setJoke] = useState('Fetching a joke...');

  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/jokes/programming/random')
      .then((res) => res.json())
      .then((data) => {
        setJoke(data[0].setup + ' — ' + data[0].punchline);
      })
      .catch(() => {
        setJoke('Why do programmers prefer dark mode? Because light attracts bugs!');
      });
  }, []);

  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <h2>Hi, I'm Janvi</h2>
      <p style={{ color: '#555', lineHeight: '1.7' }}>
        I am learning React and building my first portfolio website.
        I love writing clean code and creating beautiful UIs.
      </p>
      <p style={{ color: 'green', fontWeight: '500' }}>Available for work</p>
      <div style={{
        marginTop: '1rem',
        padding: '1rem 1.25rem',
        background: '#fff8e1',
        border: '1px solid #ffd54f',
        borderRadius: '10px',
        fontSize: '14px',
        color: '#555',
        lineHeight: '1.7'
      }}>
        <p style={{ margin: '0 0 4px', fontWeight: '500', color: '#333' }}>Random dev joke fetched from API:</p>
        <p style={{ margin: 0, fontStyle: 'italic' }}>{joke}</p>
      </div>
    </div>
  );
}

export default About;