import React from 'react'
import { ReactDOM } from 'react'
import girl from '../img/girl.png'
function Header()
{
    return(<>
    <>
    <section className="hero bg-cream">
        <div className="main">
          <div className="hero-content">
            <h2><span>Start</span> Analysising The Dropout Data <br /></h2>
            <p>We welcomes you</p>
            <div className="buttons">
              <button>Start Analysis</button>
              <div className="play">
                <i className="bi bi-play-fill" />
                <a href>Watch How it works</a>
              </div>
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
