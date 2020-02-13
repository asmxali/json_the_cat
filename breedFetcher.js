const request = require('request');
let searchParameters = '?q=';
let url = 'https://api.thecatapi.com/v1/breeds/search';


const fetchBreedDescription = function(breedName, callback) {
  let searchQuery = url + searchParameters + breedName;
  request(searchQuery, (error, response, body) => {
    // In order to scan this data like a JavaScript object, we need to convert the string version of it into an object first. As discussed in the JSON Reading earlier, this is called deserialization and we can do this by "parsing" the string.
    let data = JSON.parse(body);
    //print error details if request isnt possible
    if (error)  {
      callback(error,null);
    }
    // if the array data holds any information return the breds description, it it doesn't return that it does not exist
    if (data[0]) {
      //console.log(`The description for ${breed} is: \n${data[0].description}`);
      //return data[0].description;
      callback(null, data[0].description);
    } else {
      //console.log(`The breed "${breed}" does not exist`);
      //return error;
      callback(null,"This breed does not exist");
    }
  
    
    //returns datatype: should be object now instead of string
    //console.log("\nThe data type for this request is: ",typeof data);
  });
  
};

module.exports = { fetchBreedDescription };
