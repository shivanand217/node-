var fs = require("fs");

// Asynchronous opening file
// fs.open() opens a file
// fs.close() closes a file

var buf = new Buffer(1024);
// r+ mode
fs.open('input.txt', 'r+' , function(err, fd) {
    if(err) {
        console.log(err);
    } else {
        console.log("\nFile opened in 'r+' mode");
        console.log("Reading this file.");

        fs.read(fd,buf,0,buf.length,0,function(err,bytes) {
            if(err) {
                console.log(err);
            }
            // printing only read bytes
            if(bytes > 0) {
                console.log("File content is: "+buf.slice(0,bytes).toString());
            }
            // close the opened file
            fs.close(fd , function(err) {
                if(err) {
                    console.log(err);
                } else {
                    console.log("file closed successfully.");
                }
            });
        });
    }
});


