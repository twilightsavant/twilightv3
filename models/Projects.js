const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  projType: { type: String, required: true },
  liveSite: { type: Boolean },
  liveSiteAdd: { type: String },
  viewCode: { type: Boolean },
  viewCodeAdd: { type: String },
  oldSite: { type: Boolean },
  oldSiteAdd: { type: String },
  sitePic: { type: String },
  siteName: { type: String, required: true },
  description: { type: String },
  languages: { type: Array, required: true },
  bgLogo: { type: String },
  bgPix: { type: String },
  bgPic: { type: String },
  frontPage: { type: Boolean },
  order: { type: Number }
});

module.exports = Projects = mongoose.model('projects', ProjectSchema);
