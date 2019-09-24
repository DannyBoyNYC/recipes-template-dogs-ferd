// Create the dog listing markup
var createListing = function(dog) {
  var content =
    '<h2></h2>' +
    '<p><img src=""></p>' +
    '<p>' +
    'Age: <br>' +
    'Size: <br>' +
    'Gender: <br>' +
    'Breeds: ' +
    '</p>' +
    '<strong>Other Details:</strong>' +
    '<p>Description</p>';
  return content;
};

// Create a list of adoptable dogs
var getDogs = function() {
  console.log(apiData);
  return apiData
    .map(function(dog) {
      var html = 'Dog! ';
      return html;
    })
    .join('');
};
// Load list of adoptable dogs into the DOM
var dogList = document.querySelector('#dogs');
dogList.innerHTML = getDogs();
