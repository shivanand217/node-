const fs = require('fs')

const path = require('path')

// Like folder and file should be

// /shiv/shiv.txt

// node file.js shiv txt

// process all the files with the provided extension

const folder = process.argv[2];

const ext = '.'+process.argv[3];

// folder name first arg

// extension name second arg

fs.readdir(folder, function(err, files){

	if(err){
		return console.error(err);
	}

	files.forEach(function (file){

		if(path.extname(file) == ext){
			console.log(file);
		}

	})
})
