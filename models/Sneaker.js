const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sneakersSchema = new Schema({
  name: String,
  ref: String,
  sizes: Array,
  description: String,
  price: Number,
  category: {
    type: String,
    enum: ["men", "women", "kids"],
  },
  id_tags: [{
    type: Schema.Types.ObjectId,
    ref: 'Label'
  }],
  image: {
    type: String,
    default: "https://lp2.hm.com/hmgoepprod?set=quality[79],source[/76/5a/765aa1715235d0601e0d443a18153dfd9cdb275f.jpg],origin[dam],category[men_shoes_dressed],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]",
  },
});

const Sneakers = mongoose.model("Sneakers", sneakersSchema);

module.exports = Sneakers;