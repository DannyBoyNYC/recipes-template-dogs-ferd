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
  // Template
  // <h2>{Dog Name}</h2>
  // <p><img alt="A photo of {Dog Name}" src="photo.jpg"></p>
  //
  // <p>
  // 		Age: {age}<br>
  // 		Size: {size}<br>
  // 		Gender: {gender}<br>
  // 		Breeds: {breed1}, {breed2}
  // </p>
  //
  // <strong>Other Details:</strong>
  // <ul>
  // 		<li>{detail1: ex. No Cats}</li>
  // </ul>
  //
  // <p>{description}</p>
  return '';
};
// Load list of adoptable dogs into the DOM
var dogList = document.querySelector('#dogs');
dogList.innerHTML = getDogs();
