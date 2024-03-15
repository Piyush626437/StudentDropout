import React ,{ useState, useEffect} from "react";
import  Chart  from "react-apexcharts";
import { ReactDOM } from 'react'
import axios from 'axios';
function Byyear()
{
    const [StudentDetail, setStudentDetail] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:5000/fetch')
        .then(response => {
          let jsonString = response.data;
          // let jsonObject = JSON.parse(jsonString);
          setStudentDetail(jsonString);  // Update state with fetched data
          // console.log(jsonString)
  
        })
        .catch(err => console.log("error in table react"));
      // console.log(StudentDetail)
    }, [])
  
 let Y2022=0,Y2023=0;
 for (let i = 0; i < StudentDetail.length; i++) {
    if (StudentDetail[i].studentDropoutYear=="2023") Y2023++;
    if (StudentDetail[i].studentDropoutYear=="2022") Y2022++;
   
   
  }

    return(
        <React.Fragment>
          <header className="entry-content-header" /><div className="entry-content" itemProp="text"><h1 style={{ textAlign: 'center' }}><strong>Get Oviewview of Data By Year Wise</strong></h1>
        <p style={{ textAlign: 'justify' }}>Education is the foundation of a prosperous and empowered society. Education plays a vital role in the development of a nation. However, dropout rates in Indian schools have been a major cause of concern for policymakers and educators. It is also a significant issue in many countries worldwide, especially in developing countries.</p>
        <p style={{ textAlign: 'justify' }}>The dropout rate is measured in terms of the percentage of students who leave school before completing their level/grade. It is a critical indicator of the effectiveness of the education system. The UDISE+ 2021-22 data reveals that the overall dropout rate in schools in India is 1.5 percent, which is lower than the previous year’s rate of 1.8 percent. However, the rate is still a concern, especially in certain states.</p>
        <p style={{ textAlign: 'justify' }}>The UDISE+ 2021-22 data shows that the dropout rate is highest at the secondary level (9-10) with 12.6 percent, followed by upper primary (6-8) with 3 percent and primary (1-5) with 1.5 percent. The data further reveals that the dropout rate is higher for girls than boys at all levels of education.</p>
        <p style={{ textAlign: 'justify' }}>The rate is slightly higher for upper primary students (Classes 6-8), with an average of 3 percent. However, the dropout rate for secondary school students (Classes 9-10) is significantly higher at 12.6 percent.</p>
        <p style={{ textAlign: 'justify' }}>Below is the dropout percentage of student who have dropout the education according to Year wise.</p>
      </div>

            <div className="container-fluid mb-3" >
                <h3 className="mt-3"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Year Wise Data </h3>
                <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Chart 
                
                type="pie"
                width={500}
                height={550}

                series={ [Y2022,Y2023] }                

                options={
                  {
                        // title:{ text:"Dropout according to area"
                        // } , 
                       noData:{text:"Empty Data"},                        
                      // colors:["#f90000","#f0f"],
                      labels:["Year 2022","Year 2023"]                     

                 }}
                >
                </Chart>
                </div>
            </div>
         

       
      
        </React.Fragment>
    );
}
export default Byyear;