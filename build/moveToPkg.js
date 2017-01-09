var fs = require('fs');
var path = require('path');

var files = fs.readdirSync('./dist');

files.forEach(function(file){
  console.log(file)
  var fileName = file.split('-')[1];
  var dirname = fileName.replace('.js','');
  fs.renameSync(path.join(process.cwd(), '/dist/', file), path.join(process.cwd(), 'packages/', dirname, '/lib/index.js'));
})