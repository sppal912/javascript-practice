// JavaScript-এর map() একটি Array Method যা একটি array-এর প্রতিটি element-এর উপর কাজ করে এবং একটি নতুন array return করে।

// তুমি প্রত্যেক ছাত্রকে ৫ নম্বর grace দিতে চাও।
const marks = [50, 60, 70, 80];
const updateMarks = marks.map((marks) => marks + 5);
console.log(updateMarks);

//User Names Display করা
const user = [{ name: "souvik" }, { name: "sourav" }, { name: "surojit" }];
const names = user.map((user) => user.name);
console.log(names);

// price with tax
const prices = [100, 200, 300];
const finalPrice = prices.map((prices) => prices * 1.18);
console.log(finalPrice);

//React-এ List Render React-এ map() খুব বেশি ব্যবহৃত হয়।
const fruits = ["Apple", "Mango", "Banana"];

// fruits.map((fruit) => <li>{fruit}</li>); // এই কোডটি React component-এর ভিতরে ঠিক কাজ করবে:

// practice set 1

//প্রত্যেক সংখ্যাকে 2 দিয়ে গুণ করো।
const numbers = [1, 2, 3, 4, 5];
const multiplyby2 = numbers.map((numbers) => numbers * 2);
console.log(multiplyby2);

// practice set 2

// প্রত্যেক age-এর সাথে 1 যোগ করো।
const ages = [18, 20, 22, 25];
const ageadd = ages.map((ages) => ages + 1);
console.log(ageadd);

// practice set 3

// সব নাম uppercase করো।
const friends = ["souvik", "rahul", "amit"];
const uppercase = friends.map((friends) => friends.toUpperCase());
console.log(uppercase);

// practice set 4

// শুধু নামগুলোর array তৈরি করো।
const frnd = [
  { name: "Souvik", age: 20 },
  { name: "Rahul", age: 22 },
  { name: "Amit", age: 25 },
];
const myfrndarr = frnd.map((frnd) => frnd.name);
console.log(myfrndarr);

// practice set 5

// সব price-এ 10% tax যোগ করো।
const products = [
  { name: "Phone", price: 10000 },
  { name: "Laptop", price: 50000 },
];
const addtax = products.map((products) => products.price * 1.1);
console.log(addtax);

// practice set 6

// make array from each element from an array
const mynum = [1, 2, 3, 4, 5];
const newarr = mynum.map((mynum) => ({ value: mynum }));
console.log(newarr);

// challenge
const students = [
  { name: "Souvik", marks: 80 },
  { name: "Rahul", marks: 70 },
  { name: "Amit", marks: 90 },
];
const nameScore = students.map(
  (students) => `${students.name} scored ${students.marks}`,
);
console.log(nameScore);
