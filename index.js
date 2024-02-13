const express = require("express")
const mongoose = require("mongoose")
const pg = require("pg")
const cors = require("cors")
const port = 3001
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
const Student = require("./models/student")
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());

mongoose.connect("mongodb+srv://rushivairale:hMhBAmtpe6MXrk4w@cluster0.mi0lpr7.mongodb.net/kshitijArtsDB?retryWrites=true&w=majority");


// const stud = new Student({
//     studentName : "Rushikesh Vairale",
//     studentEmail : "rushivairale932@gmail.com",
//     studentEdu : "PG"
// })

app.get("/",(req, res)=>{
    res.send("server is working")
})

// const ok = stud.save();
// console.log(ok)

// const db = new pg.Client({
//     user : "postgres",
//     host : "localhost",

// })

app.listen(port, (req,res)=>{
    console.log("server is running on"+port)
})