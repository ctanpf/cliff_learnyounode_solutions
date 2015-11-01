var fs = require('fs')
var file = process.argv[2]
var newline = undefined;
function asyn(callback){
	fs.readFile(file, function done(err, file){
		newline = file.toString().split('\n').length - 1;
		callback();
	});
}


function getNew(){
	console.log(newline);
}

asyn(getNew);