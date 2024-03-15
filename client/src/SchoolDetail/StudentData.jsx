import React from 'react'
import { ReactDOM } from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function StudentData() {
    const history = useNavigate();
   
   
    const [name, setStudentName] = useState('')

    const [Address, setStudentAddress] = useState('')
    const [Mobile, setStudentMobile] = useState('')
    const [Board, setStudentBoard] = useState('')
    const [District, setStudentDistrict] = useState('');
    const [Dob, setStudentDob] = useState('');
    const [age, setStudentAge] = useState('');
    const [caste, setStudentcaste] = useState('');
    const [gender, setStudentGender] = useState('');
    const [mothername, setStudentMotherName] = useState('');
    const [fathername, setStudentFatherName] = useState('');
    const [Aadharnumber, setStudentAadhar] = useState('');
    const [SamagraId, setStudentSamagraId] = useState('');
    const [eduaction, setStudentEduaction] = useState('');
    const [DropoutReason, setStudentDropoutReason] = useState('');
    const [State, setStudentState] = useState('');
    const [studentDropoutYear, setStudentDropoutYear] = useState('');

    async function submit(e) {
        e.preventDefault();
        if( Board!="" && Mobile!="" && name!="" && Address!="" && District!="")
       { try {

            await axios.post("http://localhost:5000/SchoolDashboard/StudentAdd", {
                 name, Aadharnumber, Address, Mobile, Board, District,Dob,age,gender,caste,mothername,fathername,State,SamagraId,eduaction,DropoutReason,studentDropoutYear
            })
                .then(res => {
                    if (res.data == "exist") {
                        // history("/home",{state:{id:email}})
                        //   history("/");
                        alert("email already exist")
                    }
                    else if(res.data=="ok")
                       { history("/StudentDashboard");}
                    
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);

        }}
        else {
            alert("Please enter the full detail")
        }
       
    }

    return (
        <>
            <h1 style={{paddingLeft: '20px'}}>Fill Student Data</h1>
            <form method="post" style={{padding: '20px 650px 50px 50px'}} action="/AdminDashBoard/StudentAdd">
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Student Addhar Number </label>
                    <input type="Number" className="form-control" id="exampleInputPassword1" placeholder="Enter 12 Digit Aadhar Number"
                        onChange={(e) => setStudentAadhar(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Student Name</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Name"
                        onChange={(e) => setStudentName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Student Father Name</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Student Father Name"
                        onChange={(e) => setStudentFatherName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Student Mother Name</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Student Mother Name"
                        onChange={(e) => setStudentMotherName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Student State</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Student 
State"
                        onChange={(e) => setStudentState(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Student DOB</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Student 
DOB"
                        onChange={(e) => setStudentDob(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Student Age</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Student Age"
                        onChange={(e) => setStudentAge(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Student Gender</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Student 
Gender"
                        onChange={(e) => setStudentGender(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Student Caste</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Student 
Caste"
                        onChange={(e) => setStudentcaste(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Student Samagra Id</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Student 
Samagra Id"
                        onChange={(e) => setStudentSamagraId(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Student Education Till Now</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Student 
Eduaction Qualification"
                        onChange={(e) => setStudentEduaction(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Student District</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter District"
                        onChange={(e) => setStudentDistrict(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Student Mobile Number</label>
                    <input type="Number" className="form-control" id="exampleInputPassword1" placeholder="Enter Mobile Number"
                        onChange={(e) => setStudentMobile(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Student Board</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Student School
Affiliation"
                        onChange={(e) => setStudentBoard(e.target.value)} />
                </div>
            

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Student Address</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Student 
Address"
                        onChange={(e) => setStudentAddress(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Student Reason Behind Dropout</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Student 
Dropout Reason"
                        onChange={(e) => setStudentDropoutReason(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Student Dropout Year</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Student 
Dropout Year"
                        onChange={(e) => setStudentDropoutYear(e.target.value)} />
                </div>


                <button type="submit" className="btn btn-primary" onClick={submit}>
                    Submit
                </button>
            </form>
        </>
    );
}
export default StudentData;