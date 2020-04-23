const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const labelSchema = new Schema({
  label: String,
});

const Label = mongoose.model("Label", labelSchema);

module.exports = Label;