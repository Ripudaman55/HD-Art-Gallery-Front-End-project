import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here





    
    console.log('Logging in with email:', email, 'and password:', password);
  };

  return (
    <div className="container">
      <h1 className="title">Welcome to My ArtGallery</h1>
      
      <form className="form">
        <div className="form-group">
          <label className="label">Email:</label>
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label">Password:</label>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn" type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Home;
