var express = require('express');
var router = express.Router();

const Centroid = require('../models/centroid');
const { setup, getMaxWordCount } = require('../algorithms/prepareData');
const { kMeans } = require('../algorithms/kMeans');
let blogs = setup();
const minMax = getMaxWordCount(blogs);

/* Routes */
router.get("/", function(req, res) { // Get all users
    let allBlogs = [...blogs];
    let kArray = createCentroids();

    kArray = kMeans(kArray, allBlogs);
    let finalResult = prettify(kArray);

    res.json(finalResult);
    blogs = setup();
});

function prettify(kArray) {
  let array = [[], [], [], [], []]

  kArray.forEach(element => {
    let id = element.cluster;
    array[id].push(element.name);
  });

  return array;
}

function createCentroids() {
  let k1 = new Centroid(0, minMax);
  let k2 = new Centroid(1, minMax);
  let k3 = new Centroid(2, minMax);
  let k4 = new Centroid(3, minMax);
  let k5 = new Centroid(4, minMax);
  let kArray = [k1, k2, k3, k4, k5];

  return kArray;
}

module.exports = router;