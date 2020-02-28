const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');

//DB Schema Object
const Projects = require('../../models/Projects');

//router.get('/', (req, res) => res.send('Project Router'));

// @route GET api/projects
// @desc Get FRONT PAGE Projects regardless of stack
// @access Public
router.get('/frontpage', async (req, res) => {
  try {
    const projects = await Projects.find({
      frontPage: true
    });

    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route GET api/projects
// @desc Get ALL Projects by stack type
// @access Public
router.get('/stack/:id', async (req, res) => {
  try {
    const projects = await Projects.find({
      projType: req.params.id
    });

    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route POST api/projects
// @desc Save project new or update by ID
// @access Private
/*
router.post('/', async (req, res) => {
  try {
    console.log(req.body);

    const {
      _id,
      projType,
      liveSite = false,
      liveSiteAdd,
      viewCode = false,
      viewCodeAdd,
      oldSite = false,
      oldSiteAdd,
      sitePic,
      siteName,
      description,
      languages,
      bgLogo,
      bgPix,
      bgPic,
      frontPage = false
    } = req.body;

    let proj = await Projects.findById(_id);
    if (proj) {
      //update project
      proj.projType = projType;
      proj.siteName = siteName;
      proj.liveSite = liveSite;
      proj.liveSiteAdd = liveSiteAdd;
      proj.viewCode = viewCode;
      proj.viewCodeAdd = viewCodeAdd;
      proj.oldSite = oldSite;
      proj.oldSiteAdd = oldSiteAdd;
      proj.sitePic = sitePic;
      proj.description = description;
      proj.languages = languages;
      proj.bgLogo = bgLogo;
      proj.bgPix = bgPix;
      proj.bgPic = bgPic;
      proj.frontPage = frontPage;

      await proj.save();
      res.json(proj);
    } else {
      //Create a new project
      newProj = new Projects({
        projType,
        liveSite,
        liveSiteAdd,
        viewCode,
        viewCodeAdd,
        oldSite,
        oldSiteAdd,
        sitePic,
        siteName,
        description,
        languages,
        bgLogo,
        bgPix,
        bgPic,
        frontPage
      });

      newProj.save();
      res.json(newProj);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
*/

module.exports = router;
