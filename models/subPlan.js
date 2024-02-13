const mongoose = require("mongoose")

const planSchema = new mongoose.Schema({
    planCost : Number,
    planValidity : Number,
    planNotifications : Number,
    planReminders : Number,
    planInterest : Number,
})

module.exports = mongoose.model("Plan",planSchema);