
const aws = require('aws-sdk');
const express = require('express');
const multer = require('multer');
const multers3 = require('multer-s3');

const app = express();

const spacesEndpoint = new aws.Endpoint('nyc3.digitaloceanspaces.com');
const s3 = new aws.S3({
  endpoint: spacesEndpoint
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'https://shiv-space.nyc3.digitaloceanspaces.com',
    acl: 'public-read',
    key: function (request, file, cb) {
      console.log(file);
      cb(null, file.originalname);
    }
  })
}).array('upload', 1);

app.use(express.static('files'));

app.get('/', function(request, response){
	response.sendFile(__dirname+'/files/index.html');
});

app.get("/success", function(request, response){
	response.sendFile(__dirname+ '/files/success.html');
});

app.get("/error", function(request, response){
	response.sendFile(__dirname+ '/files/error.html');
});

app.post('/upload', function (request, response, next) {
  upload(request, response, function (error) {
    if (error) {
      console.log(error);
      return response.redirect("/error");
    }
    console.log('File uploaded successfully.');
    response.redirect("/success");
  });
});


app.listen(3001, function(){
	console.log('Server listening on port 3001.');
});

