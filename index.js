var es = require('event-stream');
var prefix = require('autoprefixer');

module.exports = function(){
  'use strict';

  var opts = arguments.length > 0 ? [].slice.call(arguments, 0) : ['> 1%','last 2 versions','ff 17','opera 12.1'];


  return es.map(function(file,callback){
  	file.contents = prefix(opts).compile(String(file.contents));
  	callback(null,file)
  });

};