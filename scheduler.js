const schedule = require('node-schedule');
const Client = require('node-rest-client').Client;
const client = new Client();

schedule.scheduleJob('0 0/20 * 1/1 * ? *', () => {
    client.get(process.env.ping_uri, (data, response) => {
    });
});