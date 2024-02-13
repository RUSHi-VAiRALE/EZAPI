const mongoose = require("mongoose")

const examSchema = new mongoose.Schema({
    examName : String,
    examQualification : String,
    examStartDate : Date,
    examEndDate : Date
})

module.exports = mongoose.model("Exam",examSchema);