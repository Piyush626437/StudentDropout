import React from 'react'
import { ReactDOM } from 'react'
import girl from '../img/girl.png'
import { Link } from 'react-router-dom';
function Section()
{
    return(<>
    <>
    <section className="hero bg-cream">
        <div className="main">
          <div className="hero-content">
            <h2><span>
स्कूल चले हम</span> <br /> 
</h2>
            <p>नया-नया स्कूल खुला है चलो पढाई करने को। छोड़ो झगड़ा, वक्त पड़ा है बहुत लड़ाई करने को।
क ख ग से क्ष त्र ज्ञ तक? जल्दी-जल्दी पढ़ना है, ए बी सी डी पढ़कर हमको सबसे आगे बढ़ना है, पढ़-लिखकर ही लोग मिलेंगे हमें बड़ाई करने को </p>
            <div className="buttons">
            <Link to="/getoverview">   <button>Get Overview</button></Link>
              {/* <div className="play">
                <i className="bi bi-play-fill" />
                <a href>Watch How it works</a>
              </div> */}
            </div>
          </div>
          <div className="img">
            <img src={girl} alt="" />
          </div>
        </div>
      </section>
    </>
    </>);
}
export default Section;