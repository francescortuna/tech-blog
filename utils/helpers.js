const moment = require("moment");

module.exports = {
  format_date: (date) => {
    return moment().format("MMMM Do, YYYY");
  },

  format_content: (content) => {
    if (content.length > 39) {
      const newContent = content.split("").slice(0, 650);
      newContent.push("...");

      return newContent.join("");
    } else {
      return content;
    }
  },
};
