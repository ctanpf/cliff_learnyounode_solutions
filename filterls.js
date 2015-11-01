var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var type = '.' + process.argv[3];

fs.readdir(dir, function (err, list){
	for (var i = 0; i < list.length; i++){
		if (path.extname(list[i])=== type){
			console.log(list[i]);
		}
	}
});
