import React from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your login logic here
    console.log(`Logging in with username: ${username}, password: ${password}`);
  };

  return (
    <div className="container">
      <header>
        <h1 className="map-name">My Map</h1>
      </header>
      <div className="login-wrapper">
        <div className="map-image">
          {/* Insert your map PNG here */}
        </div>
        <div className="login-form">
          <h1>Welcome Back!</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username or Email</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="remember-me">
              <input type="checkbox" id="remember-me" /> Remember Me
            </label>
            <a href="#">Forgot Password?</a>
            <button type="submit">Sign In</button>
            <button type="button">Sign Up</button> </form>
          <div className="social-signup">
            <a href="https://google.com/login">
              <i className="fab fa-google"></i> Sign Up with Google
            </a>
            <a href="https://facebook.com/login">
              <i className="fab fa-facebook-f"></i> Sign Up with Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
