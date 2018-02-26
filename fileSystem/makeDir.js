// fs.mkdir(path[, mode], callback)

var fs = require("fs");

console.log("Going to create directory C:/tmp/test");
fs.mkdir('/tmp/test', function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("directory C:/tmp/test created..");
    }
});

console.log("Going to create directory C:/tmp/test1");
fs.mkdir('/tmp/test1', function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("directory C:/tmp/test1 created..");
    }
});

console.log("Going to create directory C:/tmp/test2");
fs.mkdir('/tmp/test2', function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("directory C:/tmp/test2 created..");
    }
});

