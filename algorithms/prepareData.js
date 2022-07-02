const Blog = require("../models/blog");
const csvToJson = require('convert-csv-to-json');
const dataPath = "./data/blogdata.txt";

function setup() {
    try {
        let json = csvToJson.fieldDelimiter("\t").getJsonFromCsv(dataPath);
        let blogList = [];
        
        json.forEach(blogdata => {
            let newBlog = new Blog(blogdata);
            blogList.push(newBlog);
        });

        return blogList;

      } catch (error) {
          throw error;
      }
}

function getMaxWordCount(blogs) {
    let array = {};
  
    
    blogs.forEach(blog => {
      for (let i = 0; i < blog.keys.length; i++) {
        let value = blog.data[i];
        let key = blog.keys[i];
  
        if (key in array) {
          if (array[key] < value) {
            array[key] = value;
          }
        } else { // If key for word doesn't exist yet
          array[key] = value;
        }
      }
    })


    return array;
  }
  

module.exports = { setup : setup, getMaxWordCount: getMaxWordCount };