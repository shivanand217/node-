// File System
var fs = require("fs");

var buffer = new Buffer(1024);

console.log("going to open an existing file.");
// opening a file in read and write mode , r+
fs.open('input.txt', 'r+', function(err, fd) {
    if(err) {
        console.log(err); 
    } else {
        console.log("File opened...");
        console.log("going to truncate file after 10 bytes..");
        
        // file truncate
        // fs.ftruncate(fd, len, callback)        
        // now file opened truncate it after 2 bytes
        fs.ftruncate(fd, 2, function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log("file truncated successfully , after 2, bytes");
                console.log("going to read the same file.");
                
                fs.read(fd,buff1,0,buff1.length,0,function(err,bytes) {
                    if(err) {
                        console.log(err);
                    } else {
                        if(bytes > 0) {
                            console.log(buff1.slice(0,bytes).toString());
                        }      
                        fs.close(fd,function(err) {
                            if(err) {
                                console.log(err);
                            } else {
                                console.log("file closed success.");
                            }
                        });
                    }
                });
            }
        });
    }
});