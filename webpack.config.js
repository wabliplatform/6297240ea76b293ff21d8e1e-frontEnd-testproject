const path = require('path');

module.exports = {
  entry: {
	'Home' : './javascript/Home.js',
	'Post' : './javascript/Post.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};