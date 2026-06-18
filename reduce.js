// /*
// reduce() কী?

// reduce() হলো JavaScript Array-এর একটি method যা একটি array-এর সব element ঘুরে একটি single value তৈরি করে।
// */

// /*
// সিনট্যাক্স:
// array.reduce((accumulator, currentValue) => {
//   return updatedAccumulator;
// }, initialValue);

// accumulator (acc) → আগের iteration-এর result
// currentValue → বর্তমান element
// initialValue → accumulator-এর শুরু মান
// */

// // Array-এর সব সংখ্যার যোগফল:
// const numbers = [10, 20, 30, 40];

// const sum = numbers.reduce((acc, num) => {
//   return acc + num;
// }, 0);

// // console.log(sum);

// // Shopping Cart Total
// const cart = [
//   { name: "Rice", price: 500 },
//   { name: "Fish", price: 300 },
//   { name: "Oil", price: 200 },
// ];

// const total = cart.reduce((acc, item) => {
//   acc.push(item.name);
//   return acc;
// }, []);

// console.log(total);

// // Shopping Cart Total Price
// const totalPrice = cart.reduce((acc, item) => {
//   return acc + item.price;
// }, 0);
// console.log(totalPrice);

// // Bank Account Balance
// const transactions = [5000, -1000, -500, 2000];

// const balance = transactions.reduce((acc, amount) => {
//   return acc + amount;
// }, 0);

// // console.log(balance);

// // Count Occurrences
// const fruits = ["apple", "banana", "apple", "mango", "apple"];

// const cartCount = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});
// console.log(cartCount);

// // Group Data
// const users = [
//   { name: "Rahul", city: "Kolkata" },
//   { name: "Souvik", city: "Kolkata" },
//   { name: "Amit", city: "Delhi" },
// ];

// const Data1 = users.reduce((acc, tatha) => {
//   if (!acc[tatha.city]) {
//     acc[tatha.city] = [];
//   }
//   acc[tatha.city].push(tatha.name);
//   return acc;
// }, {});
// console.log(Data1);

// // practice set 1
// const num2 = [5, 10, 15, 20];
// const sumNum = num2.reduce((acc, add) => {
//   return acc + add;
// }, 0);
// console.log(sumNum);

// // practice set 2
// const multiply = num2.reduce((acc, multiply) => {
//   return acc * multiply;
// }, 1);
// console.log(multiply);

// // practice set 3
// const shorting = num2.reduce((acc, short) => {
//   return short > acc ? short : acc;
// }, 0);
// console.log(shorting);

// // practice set 4
// const myNums = [45, 12, 78, 3, 56, 9];
// const small = myNums.reduce((acc, smal) => {
//   return smal < acc ? smal : acc;
// }, myNums[0]);
// console.log(small);

// // practice set 5
// const oddEvenNums = [1, 2, 3, 4, 5];

// const filter = oddEvenNums.reduce(
//   (acc, num) => {
//     if (num % 2 === 0) {
//       acc.even.push(num); // Push even numbers to the 'even' array
//     } else {
//       acc.odd.push(num); // Push odd numbers to the 'odd' array
//     }
//     return acc;
//   },
//   // Initial value for the accumulator
//   {
//     odd: [],
//     even: [],
//   },
// );
// console.log(filter);

// // practice set 6
const words = ["apple", "banana", "apple", "mango", "banana", "apple"];

// const extract = words.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});
// console.log(extract);

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (acc, crnt) => {
    if (crnt % 2 !== 0) {
      acc.odd.push(crnt);
    }
    acc.even.push(crnt);
    return acc;
  },
  { even: [], odd: [] },
);
// console.log(sum);

const CountFruits = words.reduce((acc, current) => {
  acc[current] = (acc[current] || 0) + 1;
  return acc;
}, {});
console.log(CountFruits);
