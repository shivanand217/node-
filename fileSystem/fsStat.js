var fs = require("fs");

// fs.stats() shows file info , Asynchronously

function getFileInfo() {
    var p;    
    fs.stat('input.txt', function(err, stats) {
        if(err) {
            console.log(err);
        } else {
            console.log("We got the Info :D\n"+"Here it is:");
            console.log(stats);
        }
    });
}
getFileInfo();
