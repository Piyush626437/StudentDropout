import React, { useState } from 'react';
// import './App.css'; // Import your CSS file
import Log from './img/log.svg'
import Register from './img/register.svg'
import './CSSLOGIN.css'


function Login() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="" className={`sign-in-form ${isSignUpMode ? 'inactive' : ''}`}>
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />

            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>

          <form action="" className={`sign-up-form ${isSignUpMode ? '' : 'inactive'}`}>
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Sign Up" className="btn solid" />

            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className={`panel left-panel ${isSignUpMode ? '' : 'inactive'}`}>
          <div className="content">
            <h3>New here?</h3>
            <p>Here new user can get register</p>
            <button className="btn transparent" onClick={handleSignUpClick}>Sign Up</button>
          </div>
          <img src={Log}className="image" alt="" />
        </div>

        <div className={`panel right-panel ${isSignUpMode ? 'inactive' : ''}`}>
          <div className="content">
            <h3>One of us?</h3>
            <p>Please enter the username and password </p>
            <button className="btn transparent" onClick={handleSignInClick}>Sign In</button>
          </div>
          <img src={Register} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
