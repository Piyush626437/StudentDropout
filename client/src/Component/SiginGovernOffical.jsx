import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import "./log.css"

function SignGovernOffical()
{
    const history=useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        if(email!="" && password!="")
        {  try {
            console.log(password);
              await axios.post("http://localhost:5000/sigingovernofficer/check", {
                  email, password
              })
                  .then(res => {
                      if (res.data == "exist") {
                          // history("/home",{state:{id:email}})
                          history("/GovOfficerDashboard");
                        //   alert("ok")
                      }
                      else if (res.data == "notexist") {
                          alert("User have not sign up")
                      }
                  })
                  .catch(e => {
                      alert("wrong details")
                      console.log(e);
                  })
  
          }
          catch (e) {
              console.log(e);
  
          }}
          else{
              alert("Please Enter the Email & Password")
          }
    }


    return (
        <div className="login">

            

            {/* <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <input type="submit" onClick={submit} />

            </form> */}


                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <form method="post" action="/sigingovernofficer/check">
                            <h3>Sign In As Government Officer</h3>

                            <div className="mb-3">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                           

                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary" onClick={submit}>
                                    Submit
                                </button>
                            </div>
                            <p className="forgot-password text-right">
                                <a href="/siginadmin">Sign As Admin</a>
                            </p>
                            <p className="forgot-password text-right">
                                <a href="/siginschool">Sign As School</a>
                            </p>
                        </form>
                    </div>
                </div>


           

            {/* <Link to="/signup">Signup Page</Link> */}

        </div>
    )
}
export default SignGovernOffical;