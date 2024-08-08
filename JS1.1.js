// function addSum(a, b) {
//   let ans = a + b;
//   return ans;
// }

// const sum = addSum(3, 4);
// console.log(sum, typeof sum);

// function canVote(num) {
//   if (num < 18) {
//     console.log("cannot vote");
//   } else {
//     console.log("he can vote");
//   }
// }
// canVote(15);

// user1 = {
//   fname: "Rohith",
//   age: 23,
//   gender: "male",
// };
// function Greet(user) {
//   if (user.gender === "male") {
//     console.log("Hello Mr " + user.fname + ", your age is " + user.age);
//   } else {
//     console.log("Hello Mrs " + user.fname + ", your age is " + user.age);
//   }
//   if (user.age > 18) {
//     console.log("You can vote");
//   } else {
//     console.log("You cannot vote");
//   }
// }

// Greet(user1);

const users = [
  {
    name: "Rohith",
    age: 21,
    gender: "male",
  },
  {
    name: "Rakesh",
    age: 15,
    gender: "male",
  },
  {
    name: "priya",
    age: 21,
    gender: "female",
  },
];

const Valid = users.filter(function ValidUsers(user) {
  if (user.age > 20) {
    console.log(user.name);
  }
});
