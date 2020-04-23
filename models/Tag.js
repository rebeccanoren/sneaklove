const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const labelSchema = new Schema({
  tags: String,
});

const Label = mongoose.model("Label", labelSchema);

module.exports = Label;