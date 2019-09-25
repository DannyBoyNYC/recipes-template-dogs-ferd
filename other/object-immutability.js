// object immutability

var lunch = {
  sandwich: 'turkey',
  chips: 'cape cod',
  drink: 'soda'
};

var moreLunch = lunch;

// Logs {sandwich: 'turkey', chips: 'cape cod', drink: soda}
console.log(moreLunch);

// Remove "chips" from lunch
delete lunch.chips;

// Logs {sandwich: 'turkey', drink: soda}
console.log(moreLunch);
console.log(lunch);

// Create an immutable copy of the original array
var evenMoreLunch = Object.assign({}, lunch);

// Add a snack
evenMoreLunch.snack = 'cookies';

// Logs {sandwich: 'turkey', drink: soda, snack: 'cookies'}
console.log(evenMoreLunch);

// Logs {sandwich: 'turkey', drink: soda, }
console.log(lunch);
