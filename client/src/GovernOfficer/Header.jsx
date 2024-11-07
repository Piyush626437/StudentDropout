import React from 'react'
import { ReactDOM } from 'react'
import girl from '../img/girl.png'
import { Link } from 'react-router-dom';
function Header()
{
    return(<>
    <>
    <section className="hero bg-cream">
        <div className="main">
          <div className="hero-content">
            <h2><span>Government Officer</span> Dashboard <br /></h2>
            <p>Welcome To Indian Government Officer</p>
            <div className="buttons">
            <Link to="/analysisdashboard">  <button className="login"  >Start Now </button> </Link>
              
            </div>
          </div>
          {/* <div className="img">
            <img src={girl} alt="" />
          </div> */}
        </div>
      </section>
    </>
    </>);
}
export default Header;
