const express = require("express")
const mongoose = require("mongoose")
const pg = require("pg")
const cors = require("cors")
const port = 8001
const bodyParser = require("body-parser");
const app = express();
const Plan = require("./models/subPlan")
const Exam = require("./models/examSchema");
const Subscription = require("./models/subscriptionDetailsSchema")
app.use(express.json());
const Student = require("./models/student")
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());
app.use(bodyParser.json)
// connect to db
mongoose.connect("mongodb+srv://rushivairale:hMhBAmtpe6MXrk4w@cluster0.mi0lpr7.mongodb.net/kshitijArtsDB?retryWrites=true&w=majority");


//formant frontend:- {/* <b>11 PREMIUM Notifications</b> and<br> <b>12 Reminders</b> for the<br> <b>3 Interests</b> that you will select. */}

app.get("/",(req, res)=>{
    res.send("server is working")
})

// const db = new pg.Client({
//     user : "postgres",
//     host : "localhost",
//     database : "EZDatabase",
//     password : "Tommy777#",
//     port : "5432"
// });

// db.connect();

// app.get("/sqlQuery",(req, res)=>{
//     db.query("SELECT * FROM Student", (err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data.rows)
//         res.send(data.rows)
//     }
// });
// })

// to add a new Student
app.post("/addStudent",async(req, res)=>{
    try {
        const stud = new Student({
    studentName : req.body.studName,
    studentEmail : req.body.studEmail,
    studentEdu : req.body.studEdu
})
    const nStud = await stud.save();
    res.send(nStud)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

// get a specific Student by id
app.get("/student/:id", async(req, res)=>{
    await Student.findOne({_id : req.params.id})
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.log(err)
        res.send(err)
    })
})


// add subcription plan Details
app.post("/addPlan", async(req, res)=>{
    try {
        const plan = new Plan({
        planCost : req.body.planCost,
        planValidity : req.body.planValidity,
        planNotifications : req.body.planNotifications,
        planReminders : req.body.planReminders,
        planInterest : req.body.planInterest,
    })
        const nPlan = await plan.save();
        res.send(nPlan);
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

// add Exam Deatails
app.post("/addExam",async(req, res)=>{
    try {
        const newExam  = new Exam({
            examName : req.body.examName,
            examQualification : req.body.examQualification,
            examStartDate : req.body.examStartDate,
            examEndDate : req.body.examEndDate,
            examMessage : req.body.examMessage,
            examDescription : req.body.examDescription,
            isPrime : req.body.isPrime,
            examUploadDate : req.body.examUploadDate
        })

        const nExam = await newExam.save();
        res.send(nExam)
    } catch (error) {
        console.log(error),
        res.send(error)
    }
})

// get all Exams
app.get("/getAllExams", async(req,res)=>{
    await Exam.find()
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.log(err)
        res.send(err)
    })
})

// add Subscription Plan
app.post("/newSubPlan", async(req,res)=>{
    console.log(req.query)
    const array = []
    array.push(req.query.p1)
    array.push(req.query.p2)
    array.push(req.query.p3)
    console.log(array)
    const nSubPlan = new Subscription ({
        studentId : req.body.studentID,
        subScriptionPlanId : req.body.subPlanid,
        ExamIds : array,
        Sub_Start_Date : req.body.sub_start_date,
        Sub_End_Date : req.body.sub_end_date
    })

    await nSubPlan.save();
    res.send(req.body)
})

//get all subscribed exams
app.get("/getStudentExams/:id",async(req,res)=>{
    const array = new Array()

    const data = await Subscription.findOne({studentId : req.params.id})
    await Promise.all(data.ExamIds.map(async(dt)=>{
        const a = await Exam.findOne({_id : dt})
        array.push(a)
    })
    )
    console.log(array)
    res.send(array)
})








app.listen(port, (req,res)=>{
    console.log("server is running on"+port)
})