"use strict";
// use strcit will help you to debug from console log

function logger() {
  console.log("My name is Barry");
}

// calling, running, invoking
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

// fruitProcessor(5, 0);
console.log(fruitProcessor(5, 0));
fruitProcessor(6, 1);
// const appleJuice = fruitProcessor(5, 0);

// console.log(appleJuice);

function calcAge(birthYear) {
  return 2023 - birthYear;
}

const age = calcAge(1993);

const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};

const age2 = calcAge2(1993);

console.log(calcAge(1993), calcAge2(1993));

console.log(age, age2);
