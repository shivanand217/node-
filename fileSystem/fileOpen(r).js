var fs = require("fs");

var buf = new Buffer(1024);
// 'r' mode
fs.open('input2.txt', 'r', function(err, fd) {
    if(err) {
        console.log(err);
    } else {
        console.log("\nFile opened in 'r' mode..");
        console.log("Reading the file.");

        fs.read(fd,buf,0,buf.length,0,function(err,bytes) {
            if(err) {
                console.log(err);
            } else {
                // print read only bytes to avoid junk
                if(bytes > 0) {
                    console.log("File content is: "+buf.slice(0,bytes).toString());
                }
                // close the opened file
                fs.close(fd, function(err) {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log("File closed successfully.");
                    }
                });
            }
        });
    }
}); 
