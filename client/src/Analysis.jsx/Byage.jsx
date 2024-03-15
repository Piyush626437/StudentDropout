import React, { useEffect, useState } from 'react'
import { ReactDOM } from 'react'
import axios from 'axios';
import Chart from "react-apexcharts";
import StudentData from '../SchoolDetail/StudentData';
function Byage() {
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

let A11=0,A12=0,A13=0,A14=0,A15=0;
for (let i = 0; i < StudentDetail.length; i++) {
  if (StudentDetail[i].studentAge==11) A11++;
  if (StudentDetail[i].studentAge==12) A12++;
  if (StudentDetail[i].studentAge==13) A13++;
  if (StudentDetail[i].studentAge==14) A14++;
  if (StudentDetail[i].studentAge==15) A15++;
}


  //    const [stdudentSubject, setStudentsubject]= useState([]);
  //    const [studentMarks, setStudentMarks]= useState([]);

  //    useEffect( ()=>{
  //        const sSubject=[];
  //        const sMarks=[];
  //        const getStudentdata= async()=>{
  //        const reqData= await fetch("http://localhost/reactgraphtutorial/marks");
  //        const resData= await reqData.json();       
  //        for(let i=0; i< resData.length; i++)
  //        {
  //         sSubject.push(resData[i].subject);
  //         sMarks.push(parseInt(resData[i].marks));
  //        }
  //        setStudentsubject(sSubject);
  //        setStudentMarks(sMarks);
  //         //console.log(resData); 
  //        }

  //     getStudentdata();

  //    },[]);

  return (
    <React.Fragment>

<header className="entry-content-header" /><div className="entry-content" itemProp="text"><h1 style={{ textAlign: 'center' }}><strong>Get Oviewview of Data By Age</strong></h1>
        <p style={{ textAlign: 'justify' }}>Education is the foundation of a prosperous and empowered society. Education plays a vital role in the development of a nation. However, dropout rates in Indian schools have been a major cause of concern for policymakers and educators. It is also a significant issue in many countries worldwide, especially in developing countries.</p>
        <p style={{ textAlign: 'justify' }}>The dropout rate is measured in terms of the percentage of students who leave school before completing their level/grade. It is a critical indicator of the effectiveness of the education system. The UDISE+ 2021-22 data reveals that the overall dropout rate in schools in India is 1.5 percent, which is lower than the previous year’s rate of 1.8 percent. However, the rate is still a concern, especially in certain states.</p>
        <p style={{ textAlign: 'justify' }}>The UDISE+ 2021-22 data shows that the dropout rate is highest at the secondary level (9-10) with 12.6 percent, followed by upper primary (6-8) with 3 percent and primary (1-5) with 1.5 percent. The data further reveals that the dropout rate is higher for girls than boys at all levels of education.</p>
        <p style={{ textAlign: 'justify' }}>The rate is slightly higher for upper primary students (Classes 6-8), with an average of 3 percent. However, the dropout rate for secondary school students (Classes 9-10) is significantly higher at 12.6 percent.</p>
        <p style={{ textAlign: 'justify' }}>Below is the dropout percentage of student who have dropout the education according to age wise.</p>
      </div>


      <div className="container-fluid mb-3">
                <h3 className="mt-3">line Chart </h3>
               

        <Chart
          type="line"
          width={480}
          height={500}
          series={[
            {
              name: "Age wise Data Overview",
              data: [A11,A12,A13,A14,A15],
            },
          ]}
          options={{
            title: {
              // text: "BarChar Developed by DevOps Team",
              style: { fontSize: 20 },
            },

            subtitle: {
              // text: "This is BarChart Graph",
              style: { fontSize: 18 },
            },

            colors: ["#f90000"],
            theme: { mode: "light" },

            xaxis: {
              tickPlacement: "on",
              categories: [
                "Age 11",
                "Age 12",
                "Age 13",
                "Age 14",
                "Age 15",
                
              ],
              title: {
                text: "Student Age",
                style: { color: "#f90000", fontSize: 30 },
              },
            },

            yaxis: {
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: "15", colors: ["#f90000"] },
              },
              title: {
                text: "Age",
                style: { color: "#f90000", fontSize: 15 },
              },
            },

            legend: {
              show: true,
              position: "right",
            },

            dataLabels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: {
                colors: ["#f4f4f4"],
                fontSize: 15,
              },
            },
          }}
        ></Chart>
      </div>

      {/* <header className="entry-content-header" /><div className="entry-content" itemProp="text"><h1 style={{ textAlign: 'center' }}><strong>Get Oviewview of Data By Gender</strong></h1>
        <p style={{ textAlign: 'justify' }}>Education is the foundation of a prosperous and empowered society. Education plays a vital role in the development of a nation. However, dropout rates in Indian schools have been a major cause of concern for policymakers and educators. It is also a significant issue in many countries worldwide, especially in developing countries.</p>
        <p style={{ textAlign: 'justify' }}>The dropout rate is measured in terms of the percentage of students who leave school before completing their level/grade. It is a critical indicator of the effectiveness of the education system. The UDISE+ 2021-22 data reveals that the overall dropout rate in schools in India is 1.5 percent, which is lower than the previous year’s rate of 1.8 percent. However, the rate is still a concern, especially in certain states.</p>
        <p style={{ textAlign: 'justify' }}>The UDISE+ 2021-22 data shows that the dropout rate is highest at the secondary level (9-10) with 12.6 percent, followed by upper primary (6-8) with 3 percent and primary (1-5) with 1.5 percent. The data further reveals that the dropout rate is higher for girls than boys at all levels of education.</p>
        <p style={{ textAlign: 'justify' }}>The rate is slightly higher for upper primary students (Classes 6-8), with an average of 3 percent. However, the dropout rate for secondary school students (Classes 9-10) is significantly higher at 12.6 percent.</p>
        <p style={{ textAlign: 'justify' }}>Below is the dropout percentage of student who have dropout the education according to gender wise.</p>
      </div> */}
      {/* <div className="container-fluid mb-3">
        <h3 className="mt-3">Piechart By Genderwise</h3>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Chart
          type="pie"
          width={400}
          height={550}
          
        
          series={[Male23, Female23]}

          options={{
            title: {
              text: "Dropout 2023"
            },
            noData: { text: "Empty Data" },
            // colors:["#f90000","#f0f"],
            labels: ["Male", "Female"]

          }}

        >
        </Chart>  <Chart
          type="pie"
          width={400}
          height={550}
          
        
          series={[Male22, Female22]}

          options={{
            title: {
              text: "Dropout 2022"
            },
            noData: { text: "Empty Data" },
            // colors:["#f90000","#f0f"],
            labels: ["Male", "Female"]

          }}

        >
        </Chart>
        
        </div>
        </div> */}
        
    </React.Fragment>
  );
}
export default Byage;