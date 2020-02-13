
const fetchBreedDescription = function(breedName, callback) {
  
  const request = require('request');
  let breed = breecName;
  let searchParameters = '?q=';
  let url = 'https://api.thecatapi.com/v1/breeds/search';
  let searchQuery = url + searchParameters + breed;
  
  
  request(searchQuery, (error, body) => {
    // In order to scan this data like a JavaScript object, we need to convert the string version of it into an object first. As discussed in the JSON Reading earlier, this is called deserialization and we can do this by "parsing" the string.
    let data = JSON.parse(body);
    //print error details if request isnt possible
    if (error) return error;
    // if the array data holds any information return the breds description, it it doesn't return that it does not exist
    if (data[0]) {
      let description = data[0].description
      return description;
    } 
  });


};

module.exports = fetchBreedDescription;