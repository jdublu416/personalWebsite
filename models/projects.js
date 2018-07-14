const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  aSrc: { type: String, required: true },
  synopsis: { type: String, required: true },
  imageSrc:{type:String, required: true}
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
