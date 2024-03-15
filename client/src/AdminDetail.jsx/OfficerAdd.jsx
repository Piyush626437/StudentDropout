import React from 'react'
import { ReactDOM } from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function OfficerAdd() {
    const history = useNavigate();
    const [email, setOfficerEmail] = useState('')
    const [password, setOfficerPassword] = useState('')
    const [name, setOfficerName] = useState('')
    const [Id, setOfficerId] = useState('')
    const [position,setOfficerPosition]=useState('');
    const [Mobile, setOfficerMobile] = useState('')
  

    async function submit(e) {
        e.preventDefault();
        if(email!="" && password!=""&& Id!=""  && Mobile!="" && name!="" && position!="")
       { try {

            await axios.post("http://localhost:5000/AdminDashBoard/OfficerAdd", {
                email, password, name, Id, Mobile,position,
            })
                .then(res => {
                    if (res.data == "exist") {
                        // history("/home",{state:{id:email}})
                        //   history("/");
                        alert("email already exist")
                    }
                    else if(res.data=="ok")
                       { history("/GovofficerDashboard");}
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

       console.log(email)
    }

    return (
        <>
            <form method="post" action="/AdminDashBoard/OfficerAdd">
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Officer Id</label>
                    <input type="Number" className="form-control" id="exampleInputPassword1" placeholder="Enter Id"
                        onChange={(e) => setOfficerId(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Officer Name</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Name"
                        onChange={(e) => setOfficerName(e.target.value)} />
                </div>
               
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Officer Mobile Number</label>
                    <input type="Number" className="form-control" id="exampleInputPassword1" placeholder="Enter Mobile Number"
                        onChange={(e) => setOfficerMobile(e.target.value)} />
                </div>

             
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Officer Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Officer Email" 
                      onChange={(e) => setOfficerEmail(e.target.value)}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                     onChange={(e) => setOfficerPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Officer Position</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Officer Position"
                        onChange={(e) => setOfficerPosition(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={submit}>
                    Submit
                </button>
            </form>
        </>
    );
}
export default OfficerAdd;