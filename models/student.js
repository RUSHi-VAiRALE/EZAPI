const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    studentName : String,
    studentEmail : String,
    studentEdu : String,
    studentMobNumber : Number
})

module.exports = mongoose.model("Student",studentSchema);