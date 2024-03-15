import React from 'react'
import { ReactDOM } from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function SchoolAdd() {
    const history = useNavigate();
    const [email, setSchoolEmail] = useState('')
    const [password, setSchoolPassword] = useState('')
    const [name, setSchoolName] = useState('')
    const [Id, setSchoolId] = useState('')
    const [Address, setSchoolAddress] = useState('')
    const [Mobile, setSchoolMobile] = useState('')
    const [Board, setSchoolBoard] = useState('')
    const [District, setSchoolDistrict] = useState('');

    async function submit(e) {
        e.preventDefault();
        if(email!="" && password!=""&& Id!="" && Board!="" && Mobile!="" && name!="" && Address!="" && District!="")
       { try {

            await axios.post("http://localhost:5000/AdminDashBoard/SchoolAdd", {
                email, password, name, Id, Address, Mobile, Board, District,
            })
                .then(res => {
                    if (res.data == "exist") {
                        // history("/home",{state:{id:email}})
                        //   history("/");
                        alert("email already exist")
                    }
                    else if(res.data=="ok")
                       { history("/AdminDashboard");}
                    
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
            <form method="post" action="/AdminDashBoard/SchoolAdd">
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">School Id</label>
                    <input type="Number" className="form-control" id="exampleInputPassword1" placeholder="Enter Id"
                        onChange={(e) => setSchoolId(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">School Name</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Name"
                        onChange={(e) => setSchoolName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">School District</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter District"
                        onChange={(e) => setSchoolDistrict(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">School Mobile Number</label>
                    <input type="Number" className="form-control" id="exampleInputPassword1" placeholder="Enter Mobile Number"
                        onChange={(e) => setSchoolMobile(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">School Board</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter School 
Affiliation"
                        onChange={(e) => setSchoolBoard(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">School Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter school Email" 
                      onChange={(e) => setSchoolEmail(e.target.value)}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                     onChange={(e) => setSchoolPassword(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">School Address</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter School 
Address"
                        onChange={(e) => setSchoolAddress(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={submit}>
                    Submit
                </button>
            </form>
        </>
    );
}
export default SchoolAdd;