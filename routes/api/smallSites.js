const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');

//DB Schema Object
const SmallSites = require('../../models/SmallSites');

//router.get('/', (req, res) => res.send('Small Sites Router'));

// @route GET api/smallSites
// @desc Get small business sites
// @access Public
router.get('/', async (req, res) => {
  try {
    const smallSites = await SmallSites.find({
      frontPage: true
    });

    res.json(smallSites);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route POST api/smallSites
// @desc Save small business entry as new or update by ID
// @access Private
/*
router.post('/', async (req, res) => {
  try {
    console.log(req.body);

    const {
      _id,
      thumbnail,
      imgFullPath,
      imgTitle,
      link,
      frontPage = false
    } = req.body;

    let site = await SmallSites.findById(_id);
    if (site) {
      //update entry
      site.thumbnail = thumbnail;
      site.imgFullPath = imgFullPath;
      site.imgTitle = imgTitle;
      site.link = link;
      site.frontPage = frontPage;

      await site.save();
      res.json(site);
      console.log('Should update');
    } else {
      //Create a new entry
      newSite = new SmallSites({
        thumbnail,
        imgFullPath,
        imgTitle,
        link,
        frontPage
      });

      newSite.save();
      res.json(newSite);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
*/

module.exports = router;
