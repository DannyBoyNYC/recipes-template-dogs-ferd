import { getSummary } from './get-summary';
import { getDogs } from './get-dogs';

// Load list of adoptable dogs into the DOM
var dogList = document.querySelector('#dogs');
dogList.innerHTML = getSummary() + getDogs();
