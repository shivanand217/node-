// fs.readdir(path, callback)
// Asynchronously
// callback function which gets
// two arguments (err, files) where files is an array of 
// the names of the files in the directory excluding '.' and '..'

/* read any directory from console */

var fs = require("fs");

console.log("Going to read directory E:/tmp.");

fs.readdir('E:/tmp/',function(err,files) {
    if(err) {
        console.log(err);
    } else {
        console.log("This directory contains following contents: ");
        files.forEach( function(file) {
            console.log(file);
        });
        console.log("Files which does not contains any extension are directories");
    }
});