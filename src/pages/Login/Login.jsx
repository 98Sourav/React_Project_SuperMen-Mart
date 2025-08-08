import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../shared/styles/form.css';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    pass: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    const matchedUser = storedUsers.find(
      user => user.email === formData.email && user.pass === formData.pass
    );

    if (matchedUser) {
      alert('✅ Login successful!');
      setFormData({ email: '', pass: '' });
      localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));
      setTimeout(() => navigate('/'), 1000);
    } else {
      alert('❌ Invalid email or password!');
    }
  };

  return (
    <form onSubmit={handleSubmit} id="my-form">
      <h1>Login</h1><br />

      <label htmlFor="email">
        Email <i className="fa fa-asterisk" style={{ fontSize: '10px', color: 'red' }}></i>
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        required
      /><br />

      <label htmlFor="pass">
        Password <i className="fa fa-asterisk" style={{ fontSize: '10px', color: 'red' }}></i>
      </label>
      <input
        type={showPassword ? 'text' : 'password'}
        id="pass"
        name="pass"
        placeholder="Enter your password"
        value={formData.pass}
        onChange={handleChange}
        required
      />

      <small
        style={{
          cursor: 'pointer',
          display: 'block',
          marginTop: '5px',
          marginBottom: '15px',
          color: '#007bff'
        }}
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? '🙈 Hide Password' : '👁️ Show Password'}
      </small>

      <input type="submit" value="Login" />
    </form>
  );
};

export default Login;
