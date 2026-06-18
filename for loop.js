// for Loop কী?

// for loop ব্যবহার করা হয় যখন তুমি জানো কোনো কাজ কতবার repeat করতে হবে।
// for (initialization; condition; update) {
//   // code
// }

// EX:
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// Output:
// 1
// 2
// 3
// 4
// 5

// Line by Line Explanation
/*
let i = 1
Loop শুরু হবে i = 1 থেকে।

i <= 5
যতক্ষণ i 5-এর সমান বা ছোট, loop চলবে।

i++
প্রতিবার loop শেষ হলে i 1 করে বাড়বে।
*/

/*
Start
  ↓
i = 1
  ↓
i <= 5 ? → No → End
  ↓ Yes
Print i
  ↓
i++
  ↓
Repeat
*/

// EX:

// problem 1: 1 to 10 print
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// problem 2: 1 to 20 print
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// problem 3: sum of num of 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

/*
let sum = 0;
যোগফল রাখার জন্য sum নামে variable তৈরি করা হলো।
for (let i = 1; i <= 100; i++)
i = 1 → 1 থেকে শুরু।
i <= 100 → 100 পর্যন্ত চলবে।
i++ → প্রতিবার 1 করে বাড়বে।
sum += i;
এটা আসলে:
sum = sum + i;
এর সংক্ষিপ্ত রূপ।
*/

// problem 4: print multiplication table of 7
for (let i = 1; i <= 10; i++) {
  console.log(7 * i);
}

// problem find factorial of 5
let fact = 1;
for (let i = 1; i <= 5; i++) {
  fact *= i;
}
console.log(fact);

// problem 6: bonus challenge print * to *****
for (let i = 1; i <= 5; i++) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}
/*
Outer Loop
for (let i = 1; i <= 5; i++)
i = 1 → ১ম লাইন
i = 2 → ২য় লাইন
i = 3 → ৩য় লাইন
i = 4 → ৪র্থ লাইন
i = 5 → ৫ম লাইন
Inner Loop
for (let j = 1; j <= i; j++)
i = 1 হলে ১টি *
i = 2 হলে ২টি *
i = 3 হলে ৩টি *
...
প্রথম Iteration
i = 1
stars = ""

j = 1
stars = "*"

Output:

*
দ্বিতীয় Iteration
i = 2
stars = ""

j = 1 -> "*"
j = 2 -> "**"

Output:

**
এভাবেই চলতে থাকে। 
*/

for (let i = 500; i >= 1; i--) {
  let stars = "";

  for (let k = 1; k <= i; k++) {
    stars += "*";
  }

  console.log(stars);
}
// OR shortcurt
for (let i = 5; i >= 1; i--) {
  console.log("*".repeat(i));
}
