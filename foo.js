var fs = require('fs')
fs.readFile('files/start.txt', 'utf8', function (err, data) {
  var sentence = '';
  data = data.split('\n')
  sentence = ' ' + data[0];
    fs.readFile('files/next.txt', 'utf8', function (err, data) {
      data = data.split('\n')
      sentence = sentence + " " + data[0];
        fs.readFile('files/again.txt', 'utf8', function (err, data) {
          sentence = sentence + " " + data;
          console.log(sentence);
        })
    })
})
