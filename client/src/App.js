import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Table from './Component/Table';
import TableData from './Component/Table';
import Ecommerce from './Component/Ecommerce';
import Practise from './Component/Practise';
import { createContext } from 'react';
import CompB from './Component/CompB';
import Home from './Component/Home';
import Contact from './Component/Contact';
import About from './Component/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactDOM } from 'react';
// import Login from './Login';
import SiginAdmin from './Component/SiginAdmin';
import SiginSchool from './Component/SiginSchool';
import SchoolDashboard from './SchoolDetail/SchoolDashboard';
import AdminDashboard from './AdminDetail.jsx/AdminDashboard';
import SchoolAdd from './AdminDetail.jsx/SchoolAdd';
import StudentData from './SchoolDetail/StudentData';
import Byage from './Analysis.jsx/Byage';
import Bygender from './Analysis.jsx/Bygender';
import UploadForm from './UploadForm';
import Upload from './Upload';
import SignGovernOffical from './Component/SiginGovernOffical';
import Getoverview from './Component/Getoverview';
import Byyear from './Analysis.jsx/Byyear';
import GovOfficerDashboard from './GovernOfficer/GoverOfficerDashboard';
import Bycaste from './Analysis.jsx/Bycaste';
import OfficerAdd from './AdminDetail.jsx/OfficerAdd';
import AnalysisDashboard from './Analysis.jsx/AnalysisDashboard';
import AnalysisData from './Analysis.jsx/AnalysisData';
import Prediction from './Analysis.jsx/Prediction';

const fname = createContext();

function App() {
    return ( <
        >

        {
            /* <Router>
                    <Route path="/" element={<Home />} />
                    <Route path="/Contactus" element={<Contact />} />
                    <Route path="/about" element={<About/>} />
                    
            </Router> */
        }

        <Router >

            <
        Routes >
                <
        Route >
                    <
                        Route path="/"
                        exact element={< Home />}
                    /> <
                        Route path="/getoverview"
                        exact element={< Getoverview />}
                    /> { /* <Route path="/about" exact element={<About/>} /> */} <
                        Route path="/siginadmin"
                        exact element={< SiginAdmin />}
                    /> <
                        Route path="/siginschool"
                        exact element={< SiginSchool />}
                    /> <
                        Route path="/sigingovernmentoffical"
                        exact element={< SignGovernOffical />}
                    /> <
                        Route path="/SchoolDashboard"
                        exact element={< SchoolDashboard />}
                    /> <
                        Route path="/AdminDashboard"
                        exact element={< AdminDashboard />}
                    /> <
                        Route path="/GovOfficerDashboard"
                        exact element={< GovOfficerDashboard />}
                    /> <
                        Route path="/schooladd"
                        exact element={< SchoolAdd />}
                    /> <
                        Route path="/officeradd"
                        exact element={< OfficerAdd />}
                    /> <
                        Route path="/studentadd"
                        exact element={< StudentData />}
                    />  <
                        Route path="/byage"
                        exact element={< Byage />}
                    />  <
                        Route path="/bygender"
                        exact element={< Bygender />}
                    />

                    <
                        Route path="/upload"
                        exact element={< Upload />}
                    />  <
                        Route path="/byyear"
                        exact element={< Byyear />}
                    />  <
                        Route path="/bycaste"
                        exact element={< Bycaste />}
                    />  <
                        Route path="/officeradd"
                        exact element={< OfficerAdd />}
                    />
                    <
                    Route path="prediction"
                    exact element={< Prediction />}
                />
                 <
                    Route path="/analysisdata"
                    exact element={< AnalysisData />}
                />  <
                        Route path="/analysisdashboard"
                        exact element={< AnalysisDashboard />}
                    />  { /* <Route path="/byarea" exact element={<Byarea />} />  */} <
        /Route> <
        /Routes>

                    <
        /Router>

                    { /* K? */} { /* <Home/> */} { /* <Login/> */}



                    <
        />
                    );
}

                    export default App;
                    export {fname};