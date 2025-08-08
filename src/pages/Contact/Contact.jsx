import { useState } from 'react';
import '../../shared/styles/form.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setError(''); // Clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!/^[A-Za-z\s]+$/.test(name)) {
      setError('Name must contain only letters and spaces');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Invalid email format');
      return;
    }

    if (!subject) {
      setError('Please select a subject');
      return;
    }

    if (message.trim().length < 10) {
      setError('Message must be at least 10 characters');
      return;
    }

    alert('Message sent successfully!');
    console.log('Form Data:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact-form">
      <form id="reach" onSubmit={handleSubmit}>
        <h1>Contact Us</h1><br />

        <input
          type="text"
          id="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <select
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        >
          <option value="">Select Subject</option>
          <option>Order Issue</option>
          <option>Returns</option>
          <option>Other</option>
        </select>

        <textarea
          id="message"
          rows="4"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea><br /><br />

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <input type="submit" value="Send Message" />
      </form>
    </section>
  );
};

export default Contact;
