// switch হলো JavaScript-এর একটি conditional statement যা একাধিক condition চেক করার জন্য ব্যবহার করা হয়। অনেকগুলো if...else if...else এর পরিবর্তে switch ব্যবহার করলে কোড পরিষ্কার ও পড়তে সহজ হয়।

// problem 1: switch ব্যবহার করে Output দেখাও: Thursday

const day = 4;
switch (day) {
  case 1:
    console.log("mon");
    break;

  case 2:
    console.log("tue");
    break;

  case 3:
    console.log("wed");
    break;

  case 4:
    console.log("thu");
    break;

  case 5:
    console.log("fri");
    break;

  case 6:
    console.log("sat");
    break;

  case 7:
    console.log("sun");
    break;

  default:
    console.log("invalid day");
}

// promlem 2: মাসের নাম বের করো Output: August
const month = 8;
switch (month) {
  case 1:
    console.log("jan");
    break;
  case 2:
    console.log("feb");
    break;
  case 3:
    console.log("mar");
    break;
  case 4:
    console.log("apr");
    break;
  case 5:
    console.log("may");
    break;
  case 6:
    console.log("june");
    break;
  case 7:
    console.log("july");
    break;
  case 8:
    console.log("aug");
    break;
  case 9:
    console.log("sep");
    break;
  case 10:
    console.log("oct");
    break;
  case 11:
    console.log("nov");
    break;
  case 12:
    console.log("dec");
    break;

  default:
    console.log("oops somthing is wrong");
    break;
}

// problem 3: গ্রেড নির্ধারণ Output: Excellent
const grade = "A";
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
  case "D":
    console.log("Pass");
    break;
  case "F":
    console.log("Fail");
    break;

  default:
    console.log("Result Not Found");
    break;
}

// problem 4: Simple Calculator Output: 50
const operator = "*";
const num1 = 10;
const num2 = 5;
switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;

  default:
    console.log("Error");
    break;
}

// problem 5: Traffic Signal Output: stop
const signal = "red";
switch (signal) {
  case "green":
    console.log("Go");
    break;
  case "yellow":
    console.log("Slow");
    break;
  case "red":
    console.log("stop");
    break;

  default:
    console.log("This Is Not Trafic Light");
    break;
}
