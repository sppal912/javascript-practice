// for...of Loop কী?
// for...of হলো JavaScript-এর একটি loop যা iterable (যেমন Array, String, Set) এর প্রতিটি value একে একে access করতে ব্যবহার করা হয়।

// for (const item of iterable) {
//   // code
// }

//item → বর্তমান element-এর value
// iterable → Array, String ইত্যাদি

// EX: array
// const fruits = ["Apple", "Mango", "Banana"];

// for (const fol of fruits) {
//   console.log(fol);
// }
// Output:
// Apple
// Mango
// Banana
/*
কী হচ্ছে?

প্রথম iteration:

fruit = "Apple"

দ্বিতীয় iteration:

fruit = "Mango"

তৃতীয় iteration:

fruit = "Banana"
*/

// EX: String
// const name = "Souvik";

// for (const letter of name) {
//   console.log(letter);
// }
// Output:
// S
// o
// u
// v
// i
// k

// EX 3: sum of array
// const numbers = [10, 20, 30, 40];
// let sum = 0;

// for (const num of numbers) {
//   sum += num;
// }

// console.log(sum);
// Output: 100

// for...of vs for
// Traditional for
// const numbers = [10, 20, 30];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// for...of
// for (const num of numbers) {
//   console.log(num);
// }
// for...of ছোট, পরিষ্কার এবং পড়তে সহজ।

// Problem 1: print all numbers
const numbers = [5, 10, 15, 20, 25];

for (const element of numbers) {
  //   console.log(element);
}

// Problem 2: calculate sum
const nums = [10, 20, 30, 40];
let sumNumber = 0;
for (const element of nums) {
  sumNumber += element;
}
// console.log(sumNumber);

// Problem 3:Count Characters
const word = "JavaScript";
let count = 0;
for (const element of word) {
  count += element.length;
}
// console.log(count);

// Problem 4: find Largest Number
const mynum = [12, 45, 7, 89, 23];
let largest = mynum[0];

for (const bigNumber of mynum) {
  if (bigNumber > largest) {
    largest = bigNumber;
  }
}
// console.log(largest); // Output: 89

// Problem 5:Count Vowels
const text = "programming";
let vowels = 0;
for (const count of text) {
  if (
    count === "a" ||
    count === "e" ||
    count === "i" ||
    count === "o" ||
    count === "u"
  ) {
    vowels++;
  }
}
// console.log(vowels);

// Print Even Numbers
const evenAndOdd = [3, 8, 12, 7, 15, 20];
for (const even of evenAndOdd) {
  if (even % 2 === 0) {
    // console.log(even);
  }
}

// sum of odd numbers
const sumOdd = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;
for (const e of sumOdd) {
  if (e % 2 !== 0) {
    // console.log(e)
    sum += e;
  }
}
console.log(sum);

//Problem 3: Reverse a String
const js = "javascript";
let reversed = "";
for (const x of js) {
  reversed = x + reversed;
}
// console.log(reversed);

// Problem 4: Count Duplicates
const dupliCount = [1, 2, 2, 3, 4, 4, 4, 5];
const counts = {};
for (const z of dupliCount) {
  if (counts[z]) {
    counts[z] += 1;
  } else {
    counts[z] = 1;
  }
}
console.log(counts);
for (const num in counts) {
  if (counts[num] > 1) {
    console.log(`${num} => ${counts[num]} times`);
  }
}

// Problem 5: Second Largest Number
const slnum = [10, 45, 23, 89, 67];

//প্রথমে largest বের করি:
let largest = slnum[0];

for (const num of slnum) {
  if (num > largest) {
    largest = num;
  }
}
//তারপর largest বাদ দিয়ে আবার loop:
let secondLargest = slnum[0];
for (const num of slnum) {
  if (num !== largest && num > secondLargest) {
    secondLargest = num;
  }
}
console.log(secondLargest);

//Bonus এই array থেকে শুধু vowel বের করো:
const letters = ["a", "b", "e", "f", "i", "k"];
let vlw = [];
for (const e of letters) {
  if (e === "a" || e === "e" || e === "i" || e === "o" || e === "u") {
    vlw += e;
  }
}
console.log(vlw);
