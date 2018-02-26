// fs.rmdir(path, callback)

// remove a directory anywhere from node console

var fs = require("fs");

console.log("Going to delete directory C:/tmp/test");
fs.rmdir('/tmp/test',function(err) {
    if(err) {
        console.log(err);
    } else {
        // Checking if delete happened
        console.log("Going to read directory /tmp");
        fs.readdir('/tmp', function(err, files) {
            if(err) {
                console.log(err);
            } else {
                console.log("The directory C:/tmp contains: "+files);
            }
        });
    }
});