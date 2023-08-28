const jonas = {
  firstName: "Jonas",
  lastName: "Schmedmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael";

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best firend is called ${jonas.friends[0]}`
);
console.log(jonas.getSummary());

// Challenge
// "Jonas is a 46-year old teacher, and he has a/no driver's license"
