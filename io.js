var fs = require('fs');
var str = fs.readFileSync(process.argv[2]).toString();
str = str.split("\n");
var newline = str.length -1;
console.log(newline);
