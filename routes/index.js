const express = require("express");
const router = express.Router();

const EventSchedule = require("../schema");

/* GET scheduled events. */
router.get('/', async (req, res) => {
    const ev = await EventSchedule.find({});
    res.send(ev);
});

// ping event
router.get('/ping', (req, res) => {
    console.log(`Ping ${new Date()}`);
    res.send({});
});
module.exports = router;
