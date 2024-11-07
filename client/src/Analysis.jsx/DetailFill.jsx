// DetailFill
import React from 'react'
import { ReactDOM } from 'react'
import Teacher from "../img/teacher-explaining.jpg"
import { Link } from 'react-router-dom';
import download from "../img/download.jpg";
import Gender from "../img/Gender.jpeg"

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
            <div className="container" >
                
                
                <div className="student platform">
                    <h4>Analysis The Dropout Data </h4>
                    <Link to="/analysisdata">  <button className="login"  >See Now </button> </Link>
                </div>
                <div className="student platform" style={{backgroundImage: `url(${Gender})` }}>
                    <h4>See The Predicted Result</h4>
                    <Link to="/prediction">  <button className="login"  >See Now </button> </Link>
                </div>
               
            </div>
        </section>
       





    </>);
}
export default DetailFill;