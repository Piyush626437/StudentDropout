import React, { useEffect, useState } from 'react'
import { ReactDOM } from 'react'
import axios from 'axios';
import Chart from "react-apexcharts";
import StudentData from '../SchoolDetail/StudentData';
function Bycaste() {
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

//   let Male22 = 0, Female22 = 0,Male23=0,Female23=0;
  // console.log(StudentDetail)
  let obc23=0,gen23=0,sc23=0,st23=0,obc22=0,gen22=0,sc22=0,st22=0;
  for (let i = 0; i < StudentDetail.length; i++) {
    if (StudentDetail[i].studentCaste.toLowerCase()=="gen" && StudentDetail[i].studentDropoutYear=="2023") gen23++;
    if (StudentDetail[i].studentCaste.toLowerCase()=="obc" && StudentDetail[i].studentDropoutYear=="2023") obc23++;
    if (StudentDetail[i].studentCaste.toLowerCase()=="sc" && StudentDetail[i].studentDropoutYear=="2023") sc23++;
    if (StudentDetail[i].studentCaste.toLowerCase()=="st" && StudentDetail[i].studentDropoutYear=="2023") st23++;
    if (StudentDetail[i].studentCaste.toLowerCase()=="gen" && StudentDetail[i].studentDropoutYear=="2022") gen22++;
    if (StudentDetail[i].studentCaste.toLowerCase()=="obc" && StudentDetail[i].studentDropoutYear=="2022") obc22++;
    if (StudentDetail[i].studentCaste.toLowerCase()=="sc" && StudentDetail[i].studentDropoutYear=="2022") sc22++;
    if (StudentDetail[i].studentCaste.toLowerCase()=="st" && StudentDetail[i].studentDropoutYear=="2022") st22++;
  
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
      {/* <div className="container-fluid mb-3">
                <h3 className="mt-3">Welcome to Piechart Gender </h3>
               

        <Chart
          type="bar"
          width={1380}
          height={700}
          series={[
            {
              name: "Social Media Subscriber",
              data: [Male,Female],
            },
          ]}
          options={{
            title: {
              text: "BarChar Developed by DevOps Team",
              style: { fontSize: 30 },
            },

            subtitle: {
              text: "This is BarChart Graph",
              style: { fontSize: 18 },
            },

            colors: ["#f90000"],
            theme: { mode: "light" },

            xaxis: {
              tickPlacement: "on",
              categories: [
                "Male",
                "Female",
                
              ],
              title: {
                text: "Social Media User",
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
                text: "User In (K)",
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
      </div> */}

      <header className="entry-content-header" /><div className="entry-content" itemProp="text"><h1 style={{ textAlign: 'center' }}><strong>Get Oviewview of Data By Caste</strong></h1>
        <p style={{ textAlign: 'justify' }}>Education is the foundation of a prosperous and empowered society. Education plays a vital role in the development of a nation. However, dropout rates in Indian schools have been a major cause of concern for policymakers and educators. It is also a significant issue in many countries worldwide, especially in developing countries.</p>
        <p style={{ textAlign: 'justify' }}>The dropout rate is measured in terms of the percentage of students who leave school before completing their level/grade. It is a critical indicator of the effectiveness of the education system. The UDISE+ 2021-22 data reveals that the overall dropout rate in schools in India is 1.5 percent, which is lower than the previous year’s rate of 1.8 percent. However, the rate is still a concern, especially in certain states.</p>
        <p style={{ textAlign: 'justify' }}>The UDISE+ 2021-22 data shows that the dropout rate is highest at the secondary level (9-10) with 12.6 percent, followed by upper primary (6-8) with 3 percent and primary (1-5) with 1.5 percent. The data further reveals that the dropout rate is higher for girls than boys at all levels of education.</p>
        <p style={{ textAlign: 'justify' }}>The rate is slightly higher for upper primary students (Classes 6-8), with an average of 3 percent. However, the dropout rate for secondary school students (Classes 9-10) is significantly higher at 12.6 percent.</p>
        <p style={{ textAlign: 'justify' }}>Below is the dropout percentage of student who have dropout the education according to caste wise.</p>
      </div>
      <div className="container-fluid mb-3">
        <h3 className="mt-3">Piechart By Castewise</h3>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Chart
          type="pie"
          width={500}
          height={550}
          
        
          series={[gen22,obc22,sc22,st22]}

          options={{
            title: {
              text: "Dropout 2022"
            },
            noData: { text: "Empty Data" },
            // colors:["#f90000","#f0f"],
            labels: ["Gen", "Obc" ,"Sc","St"]

          }}

        >
        </Chart> 
        <Chart
          type="pie"
          width={500}
          height={550}
          
        
          series={[gen23,obc23,sc23,st23]}

          options={{
            title: {
              text: "Dropout 2023"
            },
            noData: { text: "Empty Data" },
            // colors:["#f90000","#f0f"],
            labels: ["Gen", "Obc" ,"Sc","St"]

          }}

        >
        </Chart> 
        </div>
        </div>
        
    </React.Fragment>
  );
}
export default Bycaste;