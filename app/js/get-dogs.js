import { apiData } from './api-data';
const images = require('../img/*.jpg');

// Create a list of adoptable dogs
export var getDogs = function() {
  // console.log(apiData);
  return apiData
    .map(function(dog) {
      var html = `
      <h2>${dog.name}</h2>
      <img src="${images[dog.photo]}" alt="A photo of ${dog.name}" />
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
