// Generated by CoffeeScript 1.8.0
(function() {
  var filename, jsonData, jsonXlsx, outputFile, path;

  path = require('path');

  jsonXlsx = require('../lib/icg-json-to-xlsx');

  jsonData = [
    {
      "IsMember": true,
      "Name": "John",
      "Age": 24
    }, {
      "IsMember": false,
      "Name": "Paul",
      "Age": 44
    }, {
      "IsMember": true,
      "Name": "George",
      "Age": 12
    }
  ];

  filename = path.join(__dirname, "basic-sheet-output.xlsx");

  outputFile = jsonXlsx(filename, jsonData);

  console.log(outputFile);

}).call(this);
