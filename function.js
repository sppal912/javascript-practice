/* Function কী?

Function হলো JavaScript-এর এমন একটি reusable code block, যাকে একবার লিখে অনেকবার ব্যবহার করা যায়।

ধরো, তোমাকে বারবার দুইটা সংখ্যার যোগফল বের করতে হবে। প্রতিবার একই কোড লেখার বদলে একটি function বানিয়ে নিতে পারো। */
function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // 8
console.log(add(10, 20)); // 30
/* এখানে:

function → function তৈরির keyword
add → function-এর নাম
a, b → parameters
return → ফলাফল ফেরত দেয় */

/* বাস্তব জীবনের উদাহরণ

ধরো তোমার বাড়িতে একটি মিক্সার মেশিন আছে।

তুমি ফল দাও → জুস বের হয়।
তুমি অন্য ফল দাও → আবার জুস বের হয়।

মিক্সারের কাজ একই, শুধু input বদলায়।

Function-ও ঠিক এমনই:
Input → Function → Output */

// EX:
function makeJuice(fruit) {
  return fruit + " juice";
}

console.log(makeJuice("Mango"));
console.log(makeJuice("Orange"));

/* 1. Login Check */
function login(username, password) {
  if (username === "admin" && password === "1234") {
    return "Login Successful";
  }

  return "Invalid Credentials";
}

/* E-commerce Discount */
function getDiscount(price) {
  return price * 0.1;
}

/* 3. Calculator */
function multiply(a, b) {
  return a * b;
}

/* 4. Button Click */
function changeText() {
  document.querySelector("h1").textContent = "Hello Souvik";
}

/* 
Function কেন ব্যবহার করা হয়?
Reusability

একবার লেখো, বারবার ব্যবহার করো।

Readability

কোড বুঝতে সহজ হয়।

Maintainability

এক জায়গায় পরিবর্তন করলে সব জায়গায় প্রভাব পড়ে।
 */

/* 1.একটি function বানাও যা একটি নাম নিয়ে "Hello Name" return করবে। */
function geet(name) {
  console.log(`hello ${name}`);
}
geet("souvik");

/* 2. দুটি সংখ্যার যোগফল return করো। */
function add(a, b) {
  return a + b;
}
console.log(add(5, 7));

/* 3. একটি সংখ্যা even না odd check করো। */
function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  }
  return "Odd";
}
console.log(isEvenOrOdd(7));

/* 4. একটি সংখ্যার square return করো। */
function square(number) {
  return number * number;
}
console.log(square(32));

/* 5. Celsius থেকে Fahrenheit convert করো। */
function celToFar(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(celToFar(28)); // 82.4

/* 6. তিনটি সংখ্যার মধ্যে বড় সংখ্যা বের করো। */
function largNum(arr) {
  return Math.max(...arr);
}

console.log(largNum([10, 20, 15]));

/* 7. একটি array-এর সব সংখ্যার যোগফল বের করো। */
const myarr3 = [1, 2, 3, 4];
function sumArr(arr) {
  let result = 0;
  for (const e of arr) {
    result += e;
  }
  return result;
}
console.log(sumArr(myarr3));

/* 8. একটি string reverse করো। */
const string = "hello";
function revString(str) {
  let revstr = "";
  for (const ele of str) {
    revstr = ele + revstr;
  }
  return revstr;
}
console.log(revString(string));

/* 9.Factorial বের করো। */
function fac(n) {
  if (n < 0) return undefined;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(fac(5));

/* 10. একটি সংখ্যা prime কিনা check করো। */
function primeCheck(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(primeCheck(13)); // true
console.log(primeCheck(15)); // false
