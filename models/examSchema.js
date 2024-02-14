const mongoose = require("mongoose")

const examSchema = new mongoose.Schema({
    examName : String,
    examQualification : String,
    examStartDate : String,
    examEndDate : String,
    examMessage : String,
    examDescription : String,
    examUploadDate : String,
    isPrime : Boolean
})

module.exports = mongoose.model("Exam",examSchema);