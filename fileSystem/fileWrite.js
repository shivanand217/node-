var fs = require("fs");

// fs.writeFile() going to overwrite existing file
// callback takes only one parameter 'error'
// fs.writeFile(filename, data[, options], callback)

fs.writeFile('input.txt', "Simple easy learning!!", function(err) {    
    if(err) {
        console.log(err);
    } else {
        console.log("data written successfully");
        console.log("let's read newly written data!!");
   
        fs.readFile('input.txt', function(err, data) {
            if(err) {
                console.log(err);
            } else {
                console.log("Asynchronous read: " + data.toString());
            }
        });
    }
});