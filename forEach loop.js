/* forEach() কী?
forEach() আসলে loop নয়, এটি Array-এর একটি method। এটি Array-এর প্রতিটি element-এর জন্য একটি function চালায়।

array.forEach(function(item, index) {
  // code
});
           __________OR________ */

// array.forEach((item, index) => {
//   // code
// });

/* Example 1: সব element print করা */
// const fruits = ["Apple", "Mango", "Banana"];

// fruits.forEach((xyz) => {
//   console.log(xyz);
// });

/* Output:

Apple
Mango
Banana

কী হচ্ছে?
প্রথমবার:
fruit = "Apple"
দ্বিতীয়বার:
fruit = "Mango"
তৃতীয়বার:
fruit = "Banana"

Example 2: Index ব্যবহার করা */
// const fruits = ["Apple", "Mango", "Banana"];

// fruits.forEach((fruit, index) => {
//   console.log(index, fruit);
// });

/* Output:
0 Apple
1 Mango
2 Banana

Example 3: Numbers এর যোগফল */
// const numbers = [10, 20, 30, 40];
// let sum = 0;

// numbers.forEach((num) => {
//   sum += num;
// });

// console.log(sum);

/* Output:
100

forEach() vs for */

/*for Loop  */
// const nums = [10, 20, 30];

// for(let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }

/* forEach() */
// nums.forEach((num) => {
//   console.log(num);
// });

/*  forEach() ছোট এবং পড়তে সহজ।
গুরুত্বপূর্ণ Limitation

break এবং continue ব্যবহার করা যায় না। */
// numbers.forEach(num => {
//   if(num === 20){
//     break; // Error
//   }
// });

/* এজন্য কখনও কখনও for loop ভালো।

1. Array-এর সব সংখ্যাকে 2 দিয়ে গুণ করে print করো */
const mulyply2 = [1, 2, 3, 4, 5];
let result = [];
mulyply2.forEach((num) => {
  result.push(num * 2);
});
console.log(result);

/* 2. Array-এর সব সংখ্যার যোগফল বের করো*/
const numbers = [10, 20, 30, 40];
let res = 0;
numbers.forEach((num) => {
  res += num;
});
console.log(res);

/*3. Array-এর প্রতিটি নামের আগে "Hello" যোগ করে print করো  */
const names = ["Souvik", "Rahul", "Amit"];
let arr1 = [];
names.forEach((nam) => {
  arr1.push(`hello ${nam}`);
});
console.log(arr1);

/* 4. Array-এর সব element এবং index print করো */
const colors = ["Red", "Green", "Blue"];
let arr2 = [];
colors.forEach((col, index) => {
  arr2.push(index, col);
});
console.log(arr2);

/* 5. Array-এ কতগুলো even number আছে তা count করো */
const num1 = [1, 2, 3, 4, 5, 6, 8];
let count = 0;
num1.forEach((number) => {
  if (number % 2 === 0) {
    count += 1;
  }
});
console.log(count);
