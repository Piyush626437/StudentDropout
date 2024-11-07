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
            <h2><span>Admin</span> Dashboard <br /></h2>
            <p>We welcomes admin </p>
            <div className="buttons">
              {/* <button>Start Analysis</button> */}
              <Link to="/analysisdashboard">  <button  >Start Analysis </button> </Link>
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
