const moment = require("moment");

module.exports = {
    format_date: (date) => {
        return moment().format("MMMM Do, YYYY")
    }
}