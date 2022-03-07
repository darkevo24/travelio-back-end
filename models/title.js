const mongoose = require("mongoose");

const titleSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    }
});

const title = mongoose.model("title",titleSchema);
module.exports = title;