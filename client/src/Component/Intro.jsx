import React from 'react'
import { ReactDOM } from 'react'
import Teacher from "../img/teacher-explaining.jpg"
import { Link } from 'react-router-dom';

function Intro()
{
    return (<>
     <section className="intro mt-5">
        <div className="heading">
          <h4>Why this Ananlys<span>is Compulsary?</span></h4>
          <p>Education is the foundation of a prosperous and empowered society. Education plays a vital role in the development of a nation. However, dropout rates in Indian schools have been a major cause of concern for policymakers and educators. It
            is also a significant issue in many countries worldwide, especially in developing countries. The dropout rate is measured in terms of the percentage of students who leave school before completing their level/grade. It is a critical indicator
            of the effectiveness of the education system
          </p>
        </div>
        <div className="container">
          <div className="instructor platform">
            <h4>FOR Development</h4>
            <button>Start a trial today</button>
          </div>
          <div className="student platform">
            <h4>FOR GOVERNMENT</h4>
            <Link to="/siginadmin"> <button>Enter Access code</button></Link>
          </div>
        </div>
      </section>


      <section className="everything mt-6">
        <div className="main">
          <div className="content">
            <div className="orange-circle" />
            <h4>Dropout Rate in India , <span>Why dropout Analysis is important</span></h4>
            <p>The Constitution (Eighty-sixth Amendment) Act, 2002, established Article 21-A in the Constitution of India, proclaiming the right to free and compulsory education for all children aged six to fourteen as a Fundamental Right, with implementation details to be determined by the State. Despite this fundamental right, the issue of high school dropout rates persists in the state of Gujarat, largely driven by socio-economic factors such as poverty, social disparities, and economic reasons. </p>
            <a href>Learn More</a>
          </div>
          <div className="img">
            <div className="blue" />
            <div className="orange" />
            <img src={Teacher} alt="" />
            <div className="play">
              <i className="bi bi-play-fill" />
            </div>
          </div>
        </div>
      </section>

      
    </>);
}
export default Intro;