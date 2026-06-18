/*
JavaScript filter() কী?

filter() হলো Array-এর একটি method যা একটি array থেকে শর্ত অনুযায়ী কিছু element বেছে নিয়ে নতুন array তৈরি করে।

মূল array পরিবর্তন হয় না।
 */

/*
const newArray = array.filter((item) => {
  return condition;
}); 
*/

// ধরো তোমার কাছে ছাত্রদের নম্বর আছে:
const marks = [35, 78, 45, 90, 22, 60];

const passedStudents = marks.filter((mark) => {
  return mark >= 40;
});

// console.log(passedStudents);
// [35, 78, 45, 90, 22, 60] থেকে শুধুমাত্র 40 বা তার বেশি নম্বর পাওয়া ছাত্রদের নম্বর নিয়ে নতুন array তৈরি করবে। ফলাফল হবে: [78, 45, 90, 60]
// এখানে filter() শুধু 40 বা তার বেশি নম্বরগুলো রেখে দিয়েছে।

/*
1. E-commerce Website
ধরো ব্যবহারকারী শুধু ₹1000-এর কম দামের পণ্য দেখতে চায়।
*/
const products = [
  { name: "Phone", price: 15000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 800 },
];

const affordableProducts = products.filter((product) => {
  return product.price < 1000;
});

// console.log(affordableProducts);

// শুধু Remote jobs দেখাও।
const jobs = [
  { title: "Frontend Developer", remote: true },
  { title: "Office Assistant", remote: false },
  { title: "React Developer", remote: true },
];

const remoteJobs = jobs.filter((job) => job.remote);

// console.log(remoteJobs);

//শুধু verified users দেখাও।
const users = [
  { name: "Rahul", verified: true },
  { name: "Rita", verified: false },
  { name: "Amit", verified: true },
];

const verifiedUsers = users.filter((user) => user.verified);

// console.log(verifiedUsers);

// practice set 1
// শুধু 30-এর বেশি সংখ্যা বের করো।
const nums = [10, 25, 30, 45, 50];
const greaterThen30 = nums.filter((num) => num > 30);
// console.log(greaterThen30);

// reactice set 2
// শুধু জোড় সংখ্যা বের করো।
const nums1 = [2, 5, 8, 11, 14, 17];
const evennums = nums1.filter((num) => num % 2 === 0);
// console.log(evennums);

// practice set 3
// যেসব নামের length 5-এর বেশি, সেগুলো বের করো।
const names = ["Rahul", "Amit", "Souvik", "Riya"];
const largerThan5 = names.filter((name) => name.length > 5);
// console.log(largerThan5);

// practice set 4
// শুধু pass করা students বের করো (marks >= 40)।
const students = [
  { name: "Rahul", marks: 80 },
  { name: "Amit", marks: 35 },
  { name: "Riya", marks: 65 },
  { name: "Souvik", marks: 25 },
];
const passedStudents1 = students.filter((student) => student.marks >= 40);
// console.log(passedStudents1);

// practice set 5
// ₹5000-এর কম দামের product বের করো।
const products1 = [
  { name: "Phone", price: 20000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1200 },
  { name: "Monitor", price: 15000 },
];
const affordableProducts1 = products1.filter((product) => product.price < 5000);
// console.log(affordableProducts1);

// practice set 6
/*
যেসব user:

active = true
age >= 18

তাদের বের করো।
*/
const users1 = [
  { name: "Rahul", active: true, age: 25 },
  { name: "Riya", active: false, age: 30 },
  { name: "Amit", active: true, age: 17 },
  { name: "Souvik", active: true, age: 22 },
];
const activeAdultUsers = users1.filter((user) => user.active && user.age >= 18);
// console.log(activeAdultUsers);

// practice set 7
// শুধু completed orders বের করো।
const orders = [
  { id: 1, status: "completed" },
  { id: 2, status: "pending" },
  { id: 3, status: "completed" },
  { id: 4, status: "cancelled" },
];
const completedOrders = orders.filter((order) => order.status === "completed");
// console.log(completedOrders);

// challenge
/* 
Task 1

শুধু verified users বের করো।

Task 2

যাদের followers 100-এর বেশি, তাদের বের করো।

Task 3

যারা verified এবং followers 100-এর বেশি, তাদের বের করো।

Bonus Challenge

প্রথমে filter() ব্যবহার করে verified user বের করো, তারপর map() ব্যবহার করে শুধু username-এর array তৈরি করো।
*/
const githubUsers = [
  {
    username: "souvik",
    followers: 150,
    verified: true,
  },
  {
    username: "rahul",
    followers: 50,
    verified: false,
  },
  {
    username: "amit",
    followers: 300,
    verified: true,
  },
];
// // Task 1
// const verifiedUsers1 = githubUsers.filter((user) => user.verified);
// console.log(verifiedUsers1);
// // Task 2
// const popularUsers1 = githubUsers.filter((user) => user.followers > 100);
// console.log(popularUsers1);
// // Task 3
// const verifiedPopularUsers1 = githubUsers.filter(
//   (user) => user.verified && user.followers > 100,
// );
// console.log(verifiedPopularUsers1);
const verifiedUser = githubUsers.filter((verify) => verify.verified);
console.log(verifiedUser);

const followOver100 = githubUsers.filter((verify) => verify.followers > 100);
console.log(followOver100);

const verifiedAndFllowOver100 = githubUsers.filter(
  (verify) => verify.verified && verify.followers > 100,
);
console.log(verifiedAndFllowOver100);
