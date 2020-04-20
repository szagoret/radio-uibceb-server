const mongoose = require('mongoose');

const eventScheduleSchema = new mongoose.Schema({
    name: String,
    date: Date
});

module.exports = mongoose.model('EventSchedule', eventScheduleSchema);