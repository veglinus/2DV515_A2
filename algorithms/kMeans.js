const { performance } = require('perf_hooks');
const { pearson } = require("../algorithms/pearson");

function kMeans(kArray, allBlogs) {
    let previousData = [];
    let compareData = [];
    let iterations = 0;

    console.log("Starting kMeans!")
    let start = performance.now()
    do {
      //console.log("Iteration " + iteration);
      previousData = compareData;
      compareData = [];

      allBlogs = kStep(kArray, allBlogs);
      kArray = moveCentroids(kArray, allBlogs);

      allBlogs.forEach(element => {
        compareData.push({name: element.name, cluster: element.cluster})
      });

      iterations++;
    } while (JSON.stringify(previousData) != JSON.stringify(compareData));
    let end = performance.now();

    var timeElapsed = Math.round(end - start);
    var average = Math.round(timeElapsed / iterations);
    console.log("Operation took " + timeElapsed + "ms\tIterations: " + iterations + "\tAverage iteration time: " + average + "ms");

    return compareData;
}

function kStep(kArray, allBlogs) {
    kArray.forEach(kCentroid => {
      allBlogs.forEach(blog => {
        pearson(kCentroid, blog);
      });
    });
  
    return allBlogs;
  }
  
function moveCentroids(kArray, blogs) {
    let array = [
      {
        id: 0,
        members: 0,
        data: {}
      },
      {
        id: 1,
        members: 0,
        data: {}
      },
      {
        id: 2,
        members: 0,
        data: {}
      },
      {
        id: 3,
        members: 0,
        data: {}
      },
      {
        id: 4,
        members: 0,
        data: {}
      },
    ];
  
    blogs.forEach(blog => {
      let myArray = array[blog.cluster];
      myArray.members++;
      
      for (var key in blog.data) {
        let value = blog.data[key];
        if (key in myArray.data) {
          myArray.data[key] += value; // Add to value
        } else { // If key for word doesn't exist yet
          myArray.data[key] = value;
        }
      }
    })
    
    array.forEach(cluster => {
      for (var key in cluster.data) {
        let word = cluster.data[key];
        word = word / cluster.members; // To make average
      }
  
      let i = cluster.id;
      kArray[i].data = cluster.data; // Set centroid to new valuse
    });
  
    console.log("C0 members: " + array[0].members + "\tC1 members: " + array[1].members + "\tC2 members: " + array[2].members + "\tC3 members: " + array[3].members + "\tC4 members: " + array[4].members)
  
    return kArray;
}

module.exports = { kMeans : kMeans };