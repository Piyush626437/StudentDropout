import React from 'react'
import { Link } from 'react-router-dom';

function Header()
{
    return(<>
     <header>
        <nav className="navbar bg-cream">
          <div className="logo">
            <div className="square" />
            <h4>DropoutAnalysis</h4>
          </div>
          <ul className="nav-list">
            <li><a href='/'>Home</a></li>
            <li><a href='/getoverview'>GetOverview </a></li>
            
            {/* <li><a href='/aboutus'>About Us</a></li> */}
            <Link to="/siginadmin">  <button className="login"  >Login </button> </Link>
            {/* <button className="signup">Sign Up</button> */}
          </ul>
          <div className="hamburger">
            <div className="line line-1" />
            <div className="line line-2" />
            <div className="line lin2-3" />
          </div>
        </nav>
      </header>
    </>);
}
export default Header;