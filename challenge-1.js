const heightMark = 1.69; //cm
const massMark = 78; //kg
const heightJohn = 1.95; //cm
const massJohn = 92; //kg

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
