export default () => {
  // Read in the csv file.
  fs.readFile('../data/data.csv', function (err,data) {
    if (err) {
      return console.log(err);
    }
  })

   // Take csv convert to array of type characters
  var rawData = data.toString().split('\n');
  // define the array that will contain decade objects
  var arrObj = [];
  // Grab headers from the first row of the csv file
  var headers = rawData[0].split(',');
  
  for(var i = 1; i < rawData.length; i++) {
    var decadeData = rawData[i].split(',');
    var obj = {};
    
    for(var j = 0; j < data.length; j++) {
      decadeData[headers[j].trim()] = data[j].trim();
    }
    arrObj.push(obj);
  }
  return arrObj;
}