const firstRoundScoreDolphins = 96;
const secondRoundScoreDolphins = 108;
const thirdRoundScoreDolphins = 89;

const firstRoundScoreKoalas = 88;
const secondRoundScoreKoalas = 91;
const thirdRoundScoreKoalas = 110;

const scoreDolphins =
  (firstRoundScoreDolphins +
    secondRoundScoreDolphins +
    thirdRoundScoreDolphins) /
  3;
const scoreKoalas =
  (firstRoundScoreKoalas + secondRoundScoreKoalas + thirdRoundScoreKoalas) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas) {
  console.log("Koalas win the trophy");
} else {
  console.log("Both win the trophy");
}

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy", scoreDolphins, scoreKoalas);
// } else if (scoreDolphins < scoreKoalas) {
//   console.log("Koalas win the trophy", scoreDolphins, scoreKoalas);
// } else {
//   console.log("Both win the trophy", scoreDolphins, scoreKoalas);
// }

// "Dolphins win the trophy" if Dolphins win, or
//scoreDolphins > scoreKoalas
// "Koalas win the trophy" if Koalas win, or
// scoreDolphins < scoreKoalas
// "Both win the trophy" if their average scores are equal.
// scoreDolphins = scoreKoalas
