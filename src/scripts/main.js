'use strict';

const data = document.querySelectorAll('span.population');

const sum = Array(data).reduce(
  (accum, currentValue) => accum + currentValue,
  0,
);
const average = sum / Array(data).length;

document.querySelector('span.total-population').textContent(sum);
document.querySelector('span.average-population').textContent(average);
