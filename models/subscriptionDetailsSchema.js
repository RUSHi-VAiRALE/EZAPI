const mongoose = require("mongoose")

const subcriptionSchema = new mongoose.Schema({
    studentId : String,
    subScriptionPlanId : String,
    ExamIds : Array,
    transactionId : String,
    Sub_Start_Date : String,
    Sub_End_Date : String
})

module.exports = mongoose.model("Subscription", subcriptionSchema)