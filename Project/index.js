import express from "express"
import path from "path"
import mongoose from "mongoose";
import { error } from "console";
import cors from 'cors'
import { Int32 } from "mongodb";
import multer from 'multer';
import xlsx from 'xlsx';
// const cors = require('cors');
var user = []; //userr data array

//connecting database
mongoose.connect("mongodb://127.0.0.1:27017/StudentDropout", ).then(() => console.log("connecting"))
    .catch((e) => console.log(e));
const app = express();

//Schema
const AdminSchema = new mongoose.Schema({

    adminName: String,
    adminEmail: String,
    adminPassword: String,
});
const SchoolSchema = new mongoose.Schema({

    schoolId: Number,
    schoolName: String,
    schoolDistrict: String,
    schoolMobileNumber: Number,
    schoolBoard: String,
    schoolEmail: String,
    schoolPassword: String,
    schoolAddress: String,

});

const GovernmentOfficerSchema = new mongoose.Schema({


    officerId: String,
    offcerName: String,
    officerEmailId: String,
    officerMobileNumber: Number,
    officerPosition: String,
    officerPassword: String,

});

const StudentDropoutDataSchema = new mongoose.Schema({



    studentName: String,
    studentDistrict: String,
    studentMobileNumber: Number,
    studentBoard: String,
    studentEmail: String,
    studentAddress: String,
    studentDOB: String,
    studentAge: Number,
    studentGender: String,
    studentState: String,
    studentMotherName: String,
    studentFatherName: String,
    studentAadharNumber: Number,
    studentSamagraId: Number,
    studentCaste: String,
    studentEducation: String,
    studentDropoutReason: String,
    studentDropoutYear: String,

});

const Admin = mongoose.model("Admin", AdminSchema);

const School = mongoose.model("School", SchoolSchema);

const GovernmentOfficers = mongoose.model("GovernmentOfficers", GovernmentOfficerSchema);

const StudentDropoutData = mongoose.model("StudentDropoutData", StudentDropoutDataSchema);



// setting ejs
app.set("view engine", "ejs");

// path for punbliic
// app.use(express.static(path.join(path.resolve(), "public")));
//Middleware
app.use(express.urlencoded({ extended: true }))

// Use the cors middleware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
    // app.use(cors())





app.get("/", (req, res) => {
    res.render("index", { name: "Piyush" });
})

//To add data in mongo by index.ejs
app.post("/add", async(req, res) => {
    // user.push({
    //     username: req.body.name,
    //     useremail: req.body.email,
    //     usernumber: req.body.number
    // });
    console.log(req.body);
    await Admin.create({ adminName: req.body.name, adminEmail: req.body.email, adminPassword: req.body.number });
    res.send("Nice");
})

//to show user data directly without database
app.get("/user", (req, res) => {
    res.json({
        user,
    })
})

app.post("/siginadmin/check", async(req, res) => {
    const { email, password } = req.body

    try {
        const checkin = await Admin.findOne({
            adminEmail: email,
            adminPassword: password,



        })


        if (checkin) {
            res.json("exist")
        } else {
            res.json("notexist")
        }

    } catch (e) {
        res.json("fail")
    }

})

app.post("/siginschool/check", async(req, res) => {
    const { email, password } = req.body

    try {
        const check = await School.findOne({
            schoolEmail: email,
            schoolPassword: password
        })

        // console.log(check)
        if (check) {
            res.json("exist")
        } else {
            res.json("notexist")
        }

    } catch (e) {
        res.json("fail")
    }

})

app.post("/sigingovernofficer/check", async(req, res) => {
    const { email, password } = req.body
    console.log(password)
    try {
        const check = await GovernmentOfficers.findOne({

            officerEmailId: email,
            officerPassword: password
        })

        // console.log(check)
        if (check) {
            res.json("exist")
        } else {
            res.json("notexist")
        }

    } catch (e) {
        res.json("fail")
    }

})

app.post("/AdminDashBoard/SchoolAdd", async(req, res) => {
    const { email, password, name, Id, Address, Mobile, Board, District } = req.body

    try {
        const check = await School.findOne({
            schoolEmail: email,

        })


        if (check) {
            res.json("exist")
        } else {
            await School.create({
                schoolName: name,
                schoolPassword: password,
                schoolId: Id,
                schoolMobileNumber: Mobile,

                schoolBoard: Board,
                schoolDistrict: District,
                schoolEmail: email,
                schoolAddress: Address
            });

            res.json("ok")
        }

    } catch (e) {
        res.json("fail")
    }

})
app.post("/AdminDashBoard/OfficerAdd", async(req, res) => {
    const { email, password, name, Id, Mobile, position } = req.body

    try {
        const check = await GovernmentOfficers.findOne({
            officerEmailId: email


        })


        if (check) {
            res.json("exist")
        } else {
            await GovernmentOfficers.create({
                offcerName: name,
                officerPassword: password,
                officerId: Id,

                officerMobileNumber: Mobile,
                officerPosition: position,
                officerEmailId: email


            });

            res.json("ok")
        }

    } catch (e) {
        res.json("fail")
    }

})
app.post("/SchoolDashboard/StudentAdd", async(req, res) => {
    const { name, Aadharnumber, Address, Mobile, Board, District, Dob, age, gender, caste, mothername, fathername, State, SamagraId, eduaction, DropoutReason, studentDropoutYear } = req.body

    try {
        const check = await StudentDropoutData.findOne({
            studentAadharNumber: Aadharnumber,

        })


        if (check) {
            res.json("exist")
        } else {
            await StudentDropoutData.create({
                studentName: name,


                studentMobileNumber: Mobile,
                studentAge: age,
                studentBoard: Board,
                studentCaste: caste,
                studentDropoutReason: DropoutReason,
                studentFatherName: fathername,
                studentMotherName: mothername,
                studentEducation: eduaction,
                studentAadharNumber: Aadharnumber,
                studentDistrict: District,
                studentAddress: Address,
                studentSamagraId: SamagraId,
                studentDOB: Dob,
                studentGender: gender,
                studentState: State,
                studentDropoutYear: studentDropoutYear,


            });

            res.json("ok")
        }

    } catch (e) {
        res.json("fail")
    }

})

//fetching data from DB
app.get('/fetch', async(req, res) => {
    try {
        const fetchData = await StudentDropoutData.find();
        res.json(fetchData);
        console.log(fetchData)

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }

});


//Update 
const updateDocument = async(_id) => {
    try {
        const result = await Message.findByIdAndUpdate({ _id }, {
            $set: {
                name: "Rohan",
                number: 9826097088
            },
            new: true

        });
        console.log(result);
    } catch (err) {
        console.log("error Occur");
    }
}
app.get('/update', async(req, res) => {
    try {
        //   const userId = req.params.id;
        //   const { name, email, age } = req.body;
        //   const updatedUser = await User.findByIdAndUpdate(userId, { name, email, age }, { new: true });
        //   res.json(updatedUser);
        updateDocument("64e5e9b08acf5da60ccdad89");
        res.send("Here Data is updated")
            // console.log("Done")
    } catch (error) {
        console.log("error at updates")
    }
});



//Pagination
app.get('/page', async(req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 2;
        const skip = (page - 1) * limit;

        const totalUsers = await Message.countDocuments();
        const totalPages = Math.ceil(totalUsers / limit);

        const users = await Message.find().skip(skip).limit(limit);

        res.json({ users, totalPages, currentPage: page });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//table
app.get('/table', async(req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 3;
        const skip = (page - 1) * limit;

        // Fetch the data from the database with pagination
        const users = await Message.find().skip(skip).limit(limit);
        const totalUsers = await Message.countDocuments();
        const totalPages = Math.ceil(totalUsers / limit);

        // Generate HTML table
        const tableRows = users.map(user => `
        <tr>
          <td>${user.name}</td>
          <td>${user.emai}</td>
          <td>${user.age}</td>
        </tr>
      `).join('');

        const table = `
        <html>
        <head>
          <title>User Data Table</title>
        </head>
        <body>
          <table border="1">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
            ${tableRows}
          </table>
          <br>
          <p>Page ${page} of ${totalPages}</p>
        </body>
        </html>
      `;

        res.send(table);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// excel
const storage = multer.memoryStorage();
const upload = multer({ storage });

const Student = mongoose.model('Student', {

    studentName: String,
    studentDistrict: String,
    studentMobileNumber: Number,
    studentBoard: String,
    studentEmail: String,
    studentAddress: String,
    studentDOB: String,
    studentAge: Number,
    studentGender: String,
    studentState: String,
    studentMotherName: String,
    studentFatherName: String,
    studentAadharNumber: Number,
    studentSamagraId: Number,
    studentCaste: String,
    studentEducation: String,
    studentDropoutReason: String,
    studentDropoutYear: String,
});

const GovernmentOffical = mongoose.model('GovernmentOffical', {
    officerName: String,
    OfficerId: Number,
    OfficerMobileNumber: Number,

    OfficerPosition: String,
    OfficerMailId: String,
    OfficerPassword: String,


});

app.post('/upload-student-data', upload.single('excelFile'), async(req, res) => {
    try {
        const excelBuffer = req.file.buffer;
        const workbook = xlsx.read(excelBuffer, { type: 'buffer' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const parsedData = xlsx.utils.sheet_to_json(worksheet);

        const savedData = await StudentDropoutData.insertMany(parsedData);
        res.json(savedData);
    } catch (error) {
        res.status(500).json({ error: 'Error uploading student data.' });
    }
});
app.listen("5000", () => {
    console.log("server working");
});