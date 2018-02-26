var fs = require("fs");

// always call Asynchronous method in this way
// fs.readFile() reads a file asynchronously
// fs.stat(path, callback)

fs.readFile('input.txt', function(err, data) {
    if(err) {
        console.log(err);
        console.log('\n');
    } else {
        console.log("Asynchronous read 1:" + data.toString());
    }
});
