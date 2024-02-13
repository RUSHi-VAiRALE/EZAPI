const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    studentName : String,
    studentEmail : String,
    studentEdu : String,
})

module.exports = mongoose.model("Student",studentSchema);