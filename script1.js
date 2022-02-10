// declare 2 variabble about your dog, make one of them his age and update it by one and output that valiable age

import { hasPointerEvents } from "@testing-library/user-event/dist/utils";

let dogName = "Nice";
let age = "30";
let balance = 200.5345355;
let ageUpdate = age + 1;
console.log(
  "The name of my dog is: " + dogName + " The updated age is: " + ageUpdate
);

console.log(
  `The name of my dog is ${dogName}, The age of my dog is ${ageUpdate}`
);

let firstname = "James";
let lastname = "Enietan";
let fullname = firstname + lastname;
console.log(`My firstname is ${firstname}, My lastname is ${lastname}`);
console.log(`my fullname is ${fullname}`);

console.log(typeof parseInt(age), typeof fullname, typeof ageUpdate);
console.log(balance.toFixed(2));
console.log(dogName.charAt(1));
console.log(dogName.charAt(dogName.length - 1).toUpperCase());
console.log(dogName[dogName.length - 1].toUpperCase()); //I'm coming back

let Name = "Scoopy Doo";
console.log(Name.charAt(Name.length / 2));
console.log(firstname.toUpperCase());
console.log(firstname.toLowerCase());
console.log(dogName.toLowerCase());
console.log(firstname.toUpperCase());

console.log(Name.length - 1);
console.log(Name[Name.length - 1].toUpperCase());

// split converts strings to an array
console.log(Name.split(" "));

let greeting = "Hello, world";
console.log(greeting.split(","));

let talk = "Bob is a great guy!!!";
let splitted = talk.split(" ");
let index = Math.floor(splitted.length / 2);
console.log(splitted[index]);
// console.log(splitted[index)]);

// round up to lower limite = floor
// round up to upper limite = ceil

// String.include brings true of false and fincing what you put exist 
console.log(talk.includes("great"));
console.log(talk.includes("wise"));
let replacement = talk.replace("great", "handsome");
console.log(replacement);
console.log(talk.substring(0, 8))

// Capitalize the first letter of the last work of any sentence given to you
let Homie = "James is a good boy"
let splits = Homie.split(" ");
let lastWord = splits[splits.length - 1];

// let myIndex = splits.length-1
// let get = splits[myIndex].charAt(0).toUpperCase()
console.log(lastWord.charAt(0).toUpperCase()+lastWord.slice(1));


/*Check if the user is allowed to add an "iPad" to its shopping cart. Write a ternary that 
sets the shoppingCart variable to "iPad" if the user is authenticated, 
and an empty string if the user isn't authenticate*/

authenticated = false;
let shoppingcart = authenticated ? "ipod" : "";  
console.log(shoppingcart);

/*Check if user is old enough. Write a ternary that sets allowedAccess 
to true if the age is 18 or more, or false if not*/




/*Challenge: Help Darth Vader express himself to his son! const mySon = "Luke";
const parentalStatus = "father"; Use Template literals to say "Luke, I am your father"*/
const mySon = "Luke";
const parentalStatus = "father";
console.log(`${mySon} I am your ${parentalStatus}`);

/* Challenge 1: create a conditional that logs out "Good morning!","Good Afternoon", "Good evening!" 
and so on depending on the value of time(< - a variable)*/
const time = new Date().getHours();
if (time <= 11.00 ) {
    console.log("good morning")
} else {
    console.log("good afternoon")
}
// Challenge 2: Rewrite the whole thing as a switch statement
let Time = new Date().getHours();
let greeting = "";
switch (true) {
    case Time <= 12:
        greeting = "Good morning";
        break;
    case Time > 12:
        greeting = "good Afternoon";
        break;
}
console.log(greeting);

// Convert it to tenary operator

let time = new Date().getHours();
let greeting = time <= 12 ? "good morning" : time > 12 ? "good afternoon" : "";
console.log(greeting);


/*Let's say you're building Reddit. Only users that are either moderators or have reached 
a certain karma threshold are allowed to upvote 
Given:
const karma = 130;
const isModerator = true;*/
// write ternary to set hasEnoughKarma to true if karma is above 100. If not, set it to false
const Karma = 130;
const isModerator = true;
let hasEnoughKarma = Karma <= 100 ? false : Karma > 100 ? true : "";
//  write an expression that decides the value of canUpvote
let canUpVote = hasEnoughKarma && isModerator ? true : false;
// console.log("canUpvote:", canUpvote);
console.log("canUpvote", `${canUpVote}`);


const fullname = function(firstname, lastname) {
    return `My fullname is" ${firstname, lastname}`
}
console.log(fullname("Opeyemi", "Emmanuel"));

const splitBill = function () {
    return 
}

const splitBill = (bill, friend) => {
    return`Each person needs to ${bill, friend}`;
}
console.log(splitBill(10, 2))
console.log(splitBill(16, 4))
console.log(splitBill(350, 9))

/* Given two numbers, write a function that returns true if the 
sum of both numbers is less than 100. Otherwise return false.
lessThan100(22, 15) ➞ true
// 22 + 15 = 37

lessThan100(83, 34) ➞ false
// 83 + 34 = 117

lessThan100(3, 77) ➞ true
*/
const lessThan100 = (firstNumber, lastNumber) => {
   let sum = firstNumber + lastNumber < 100 ? true : false;
    return sum;
}
console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));


const lessThan100 = (firstNumber, lastNumber) => {
    if (firstNumber + lastNumber < 100) {
      return true
    } else {
        return false;
  } 
};
console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));


const Add = (a,b) => {
    return (a+b)
}

let result = Add(6, 6)
console.log(result);


//create a function that return the multiplication of two numbers

const Mul = (a, b) => {
  return a * b;
};

/*
Create a function that takes three arguments prob, prize, pay and returns
 true if prob * prize > pay; otherwise return false.

To illustrate:

profitableGamble(0.2, 50, 9)
... should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

Examples
profitableGamble(0.2, 50, 9) ➞ true

profitableGamble(0.9, 1, 2) ➞ false

profitableGamble(0.9, 3, 2) ➞ true
*/

const profitableGamble = (prob, price, pay) => {
    let P = prob * price > pay ? true : false;
    return P;
}
console.log(profitableGamble(0.2, 50, 9));
console.log(profitableGamble(0.9, 1, 2));
console.log(profitableGamble(0.9, 3, 2));


/*
Create a function that takes an array containing only numbers and return the first element.

Examples
getFirstValue([1, 2, 3]) ➞ 1

getFirstValue([80, 5, 100]) ➞ 80

getFirstValue([-500, 0, 50]) ➞ -50
*/
const getFirstValue = (arr) => {
    if (arr.length === 0) return undefined;
    else if (Array.isArray(arr)) return arr[0];
    else return 'Not an array ';
};

console.log(getFirstValue([1, 2, 3]));
console.log(getFirstValue([80, 5, 100]));
console.log(getFirstValue([-500, 0, 50]));


/*
Create a function that takes two arguments. Both arguments are integers,
 a and b. Return true if one of them is 10 or if their sum is 10.

Examples
makesTen(9, 10) ➞ true

makesTen(9, 9) ➞ false

makesTen(1, 9) ➞ true
*/

const makesTen = (a, b) => {
    return a === 10 || b === 10 || a + b === 10 ? true : false;
};
console.log(makesTen(9, 10));
console.log(makesTen(9, 9));
console.log(makesTen(1, 9));


/*
You are counting points for a basketball
game, given the amount of 2-pointers scored
 and 3-pointers scored, find the final
points for the team and return that value.

  points(1, 1) ➞ 5

points(7, 5) ➞ 29

points(38, 8) ➞ 100
*/

const points = (pointers2, pointers3) => {
    return pointers2 * 2 && pointers3 * 3;
};
console.log(points(1, 1));
console.log(points(7, 5));
console.log(points(38, 8));

/*  
Write a function that takes the base and height of a triangle and return its area.

Examples
triArea(3, 2) ➞ 3

triArea(7, 4) ➞ 14

triArea(10, 10) ➞ 50
Notes
The area of a triangle is: (base * height) / 2
*/

const triArea = (base, height) => {
    let area = (base * height) / 2;
    return area;
};
console.log(triArea(3, 2));
console.log(triArea(7, 4));
console.log(triArea(10, 10));


/*
Create a function that takes three arguments prob, prize, 
pay and returns true if prob * prize > pay; otherwise return false.

To illustrate:

profitableGamble(0.2, 50, 9)
... should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

Examples
profitableGamble(0.2, 50, 9) ➞ true

profitableGamble(0.2, 50, 9)profitableGamble(0.2, 50, 9) ➞ false

profitableGamble(0.9, 3, 2) ➞ true
*/

const profitableGamble = (prob, prize, pay) => {
    let PG = prob * prize >  pay ? true : false;
    return PG;
};
console.log(profitableGamble(0.2, 50, 9));
console.log(profitableGamble(0.9, 1, 2));


/*
Create a function that takes an array containing only 
numbers and return the first element.

Examples
getFirstValue([1, 2, 3]) ➞ 1

getFirstValue([80, 5, 100]) ➞ 80

getFirstValue([-500, 0, 50]) ➞ -500
*/

const getFirstValue = (numb) => {
    return numb[0];
} 

console.log(getFirstValue([1, 2, 3]));
console.log(getFirstValue([80, 5, 100]));
console.log(getFirstValue([-500, 0, 50]));

/*
Create a function that takes two arguments. Both arguments are integers,
 a and b. Return true if one of them is 10 or if their sum is 10.

Examples
makesTen(9, 10) ➞ true

makesTen(9, 9) ➞ false

makesTen(1, 9) ➞ true
*/

const makesTen = (a, b) => {
    return a == 10 || b === 10 || a + b === 10 ? true : false;
};
console.log(makesTen(9, 10));
console.log(makesTen(9, 9));
console.log(makesTen(1, 9));


/* 
Create a function that takes two strings as arguments and return 
either true or false depending on whether the total number of characters
 in the first string is equal to the total number of characters in the second string.

Examples
comp("AB", "CD") ➞ true

comp("ABC", "DE") ➞ false

comp("hello", "edabit") ➞ false
*/

const comp = (strin1, strin2) => {
    return strin1.length === strin2.length ? true : false;
}

console.log(comp("AB", "CD"));
console.log(comp("ABC", "DE"));
console.log(comp("hello", "edabit"));
