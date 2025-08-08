import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../shared/styles/form.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pass: '',
    gender: '',
    city: '',
  });

  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const existingUser = users.find((user) => user.email === formData.email);

    if (existingUser) {
      const message = '❌ Email already registered!';
      setResponseMsg(message);
      alert(message);
      return;
    }

    const updatedUsers = [...users, formData];
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));

    const successMessage = '✅ Registration successful! Redirecting to login...';
    setResponseMsg(successMessage);
    alert(successMessage);

    setFormData({
      name: '',
      email: '',
      pass: '',
      gender: '',
      city: '',
    });

    setTimeout(() => navigate('/login'), 2000);
  };

  return (
    <form onSubmit={handleSubmit} id="my-form">
      <h1>Create an Account</h1><br />

      <label htmlFor="name">
        Name <i className="fa fa-asterisk" style={{ fontSize: '10px', color: 'red' }}></i>
      </label>
      <input
        type="text"
        id="name"
        name="name"
        pattern="^[A-Za-z\s\-]+$"
        title="Name should not contain numbers or digits"
        value={formData.name}
        onChange={handleChange}
        required
      /><br />

      <label htmlFor="email">
        Email <i className="fa fa-asterisk" style={{ fontSize: '10px', color: 'red' }}></i>
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      /><br />

      <label htmlFor="pass">
        Password <i className="fa fa-asterisk" style={{ fontSize: '10px', color: 'red' }}></i>
      </label>
      <input
        type="password"
        id="pass"
        name="pass"
        pattern="^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$"
        title="Password must be at least 8 characters long and include at least 1 number and 1 special character (!@#$%^&*)"
        value={formData.pass}
        onChange={handleChange}
        required
      /><br />

      <label>
        Gender <i className="fa fa-asterisk" style={{ fontSize: '10px', color: 'red' }}></i>
      </label>
      <div style={{ display: 'flex', gap: '20px', marginTop: '0.2rem' }}>
        <label htmlFor="male" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
            required
          />
          <p>Male</p>
        </label>
        <label htmlFor="female" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
          />
          <p>Female</p>
        </label>
      </div>

      <label htmlFor="city">
        City <i className="fa fa-asterisk" style={{ fontSize: '10px', color: 'red' }}></i>
      </label>
      <select name="city" id="city" value={formData.city} onChange={handleChange} required>
        <option value="">Select City</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Chennai">Chennai</option>
        <option value="Bangalore">Bangalore</option>
      </select><br /><br />

      <div className="signin">
        <p>Already have an account? <Link to="/login">Sign in</Link>.</p>
      </div><br />

      <input type="submit" value="Submit" />
      <div id="response" style={{ marginTop: '10px', color: 'green' }}>{responseMsg}</div>
    </form>
  );
};

export default Register;
