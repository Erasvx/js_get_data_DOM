'use strict';

const total = document.querySelector('.total-population');

const average = document.querySelector('.average-population');

const populations = document.querySelectorAll('.population');

let sum = 0;

populations.forEach((element) => {
  const text = element.textContent.replace(/,/g, '');

  sum += parseFloat(text);
});

total.textContent = sum.toLocaleString('en-US');

average.textContent = (sum / populations.length).toLocaleString('en-US');
