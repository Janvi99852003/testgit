import { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (name.trim() === '' || message.trim() === '') return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div style={{
        padding: '1.5rem',
        background: '#e8f5e9',
        borderRadius: '12px',
        color: '#2e7d32'
      }}>
        <h3 style={{ margin: '0 0 8px' }}>Message sent!</h3>
        <p style={{ margin: '0 0 12px' }}>Thanks {name}, I will get back to you soon.</p>
        <button
          onClick={() => { setName(''); setMessage(''); setSubmitted(false); }}
          style={{
            padding: '7px 16px',
            background: 'white',
            border: '1px solid #2e7d32',
            borderRadius: '8px',
            color: '#2e7d32',
            cursor: 'pointer',
            fontSize: '13px'
          }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          display: 'block',
          width: '100%',
          padding: '10px 14px',
          fontSize: '14px',
          borderRadius: '8px',
          border: '1px solid #ddd',
          marginBottom: '12px'
        }}
      />
      <textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        style={{
          display: 'block',
          width: '100%',
          padding: '10px 14px',
          fontSize: '14px',
          borderRadius: '8px',
          border: '1px solid #ddd',
          marginBottom: '12px',
          resize: 'vertical'
        }}
      />
      {name && (
        <p style={{ fontSize: '13px', color: '#888', marginBottom: '12px' }}>
          Hi {name}! What would you like to say?
        </p>
      )}
      <button
        onClick={handleSubmit}
        style={{
          padding: '10px 24px',
          background: '#1a1a2e',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          cursor: 'pointer'
        }}
      >
        Send Message
      </button>
    </div>
  );
}

export default ContactForm;