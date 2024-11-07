// DetailFill
import React from 'react'
import { ReactDOM } from 'react'
import Teacher from "../img/teacher-explaining.jpg"
import { Link } from 'react-router-dom';
import download from "../img/download.jpg";


function DetailFill() {
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
                    <h4>Analysis The Data</h4>
                    <Link to="/analysisdashboard">  <button className="login"  >Analysis Now</button> </Link>
                </div>
                <div className="student platform">
                    <h4>Add School </h4>
                    <Link to="/schooladd">  <button className="login"  >Add Now </button> </Link>
                </div>
                <div className="student platform" style={{backgroundImage: `url(${download})` }}>
                    <h4>Add Government Officer</h4>
                    <Link to="/officeradd">  <button className="login"  >Add Now </button> </Link>
                </div>
              
            </div>
        </section>
        <footer className="mt-6">
            <div className="edu-logo">
                <div className="logo">
                    <h4>Dropout Analysis</h4>
                    <div className="square" />
                </div>
                <div className="v-line" />
                <span>Here you get the full analyisis of Student data</span>
            </div>
            <div className="subscribe-letter mt-4">
                <h5>Get the analysis here </h5>
                <div className="form">
                    <input type="text" placeholder="Your Email" />
                    <button>Get started</button>
                </div>
            </div>
            <div className="links mt-4" style={{color: "white" }}>
                <a href  style={{color: "white" }}>Careers</a>
                <a href>Privacy</a>
                <a href>Terms &amp; Condition</a>
            </div>
           
        </footer>





    </>);
}
export default DetailFill;