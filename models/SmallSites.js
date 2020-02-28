const mongoose = require('mongoose');

const SmallSitesSchema = new mongoose.Schema({
  thumbnail: { type: String },
  imgFullPath: { type: String },
  imgTitle: { type: String, required: true },
  link: { type: String },
  frontPage: { type: Boolean }
});

module.exports = SmallSites = mongoose.model('smallSites', SmallSitesSchema);
