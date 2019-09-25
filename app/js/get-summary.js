import { apiData } from './api-data';
// Create a list of available breeds, and how many of each breed there are
export var getSummary = function() {
  var breeds = apiData.reduce(function(breeds, dog) {
    // console.log('breeds reducer ', breeds);
    dog.breeds.forEach(breed => {
      // console.log('breed forEach DOG ', breed);
      // If breed already exists, increase count
      if (breeds[breed]) {
        breeds[breed] = breeds[breed] + 1;
      } else {
        // Otherwise, create it
        breeds[breed] = 1;
      }
    });
    // return breeds to next loop!!!!!
    return breeds;
  }, {});
  if (Object.keys(breeds).length < 1) {
    return 'yowza';
  }
  var summary = '';
  for (var breed in breeds) {
    if (breeds.hasOwnProperty(breed)) {
      summary += `<li>${breed} (${breeds[breed]})</li>`;
    }
  }
  return `<h2>Available Breeds</h2>
  <ul>${summary}</ul>`;
};

// console.log(getSummary());
