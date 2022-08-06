const moment = require('moment');

function to_object (username, text)
{
    return {
        username,
        text,
        time: moment().format('h:mm a')
    }
}

module.exports = to_object;