// fs.unlink(path[,filename], callback)
// Asynchronously

var fs = require("fs");

console.log("going to delete an exiting file");
fs.unlink('input2.txt',function(err) {
    if(err) {
        return console.log(err); 
    } else {
        console.log("File deleted successfully.");
    }
});