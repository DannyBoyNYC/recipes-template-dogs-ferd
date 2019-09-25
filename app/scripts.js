// Create a list of available breeds, and how many of each breed there are
var getSummary = function() {
  var breeds = apiData.reduce(function(breeds, dog) {
    console.log('breeds reducer ', breeds);
    dog.breeds.forEach(breed => {
      console.log('breed forEach DOG ', breed);
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
  if (Object.keys(breeds).length > 1) {
    return 'yowza';
  }
};

console.log(getSummary());

// Create a list of adoptable dogs
var getDogs = function() {
  // console.log(apiData);
  return apiData
    .map(function(dog) {
      var html = `
      <h2>${dog.name}</h2>
      <img src="${dog.photo}" alt="A photo of ${dog.name}" />
      <ul>
        <li>Age: ${dog.age}</li>
        <li>Size: ${dog.size}</li>
        <li>Gender: ${dog.gender}</li>
        <li>Breeds: ${dog.breeds.join(', ')}</li>
        <ul>
          ${
            dog.details.length < 1
              ? `<li>No additional details</li>`
              : dog.details
                  .split(', ')
                  .map(detail => {
                    return `<li>${detail}</li>`;
                  })
                  .join('')
          }
        </ul>
      </ul>
      `;
      return html;
    })
    .join('');
};
// Load list of adoptable dogs into the DOM
var dogList = document.querySelector('#dogs');
dogList.innerHTML = getSummary() + getDogs();
