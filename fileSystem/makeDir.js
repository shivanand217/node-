// fs.mkdir(path[, mode], callback)
// Asynchronously
/* create directories anywhere you want from node console */
var fs = require("fs");

fs.mkdir('/tmp/test', function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("directory C:/tmp/test created..");
    }
});

fs.mkdir('/tmp/test1', function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("directory C:/tmp/test1 created..");
    }
});

fs.mkdir('/tmp/test2', function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("directory C:/tmp/test2 created..");
    }
});

fs.mkdir('E:/tmp', function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("directory E:/tmp created..");
    }
});

fs.mkdir('E:/tmp/tmp1', function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("directory E:/tmp/tmp1 created..");
    }
});

fs.mkdir('E:/tmp/tmp2', function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("directory E:/tmp/tmp2 created..");
    }
});

fs.mkdir('E:/tmp/tmp3', function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("directory E:/tmp/tmp3 created..");
    }
});