/* EXERCISE 1
 Write a piece of code to find the largest of  given two integers
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 1")
let smallerBigger = Math.max( 100, 1);
console.log(smallerBigger)
/* EXERCISE 2
  Write a piece of code to check: if  given an integer is NOT equal to 5 then display " not equal"
*/
let int3 = 8;

if (int3 !== 5) {
  console.log("Not equal");
} else console.log("Equal");

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 2")
const a = 5;
let b = 6;

   if ( b !== a) {
   console.log("not equal");
    } else if (b === a) {
   console.log( b + "  is equal");
    }


/* EXERCISE 3
  Write a piece of code to check: if  given an integer is  divisible  by  5 then display "divisible by 5" (search for modulo operator)
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 3")
let i = 10;
    if ( i % 5 === 0) {
     console.log( i + " is divisible by 5");
    }  else if (i !== 0)
    console.log( i + "  is not divisible by 5");
   
/* EXERCISE 4
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 4")
let a1 = 8; 
let b1 = 3;
if ((a1 + b1 === 8) || (a1 === 8) || (b1 === 8)) {
    console.log("equals to 8")
}

/* EXERCISE 5
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 5")
let totalShoppingCart = 100;
let shipping = 10;
if (totalShoppingCart >= 50) {
    console.log ( "Total cost " + totalShoppingCart)
} else if (totalShoppingCart < 50) {
    console.log ("Total cost " + (totalShoppingCart + shipping))
}

/* EXERCISE 6
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 6")
 totalShoppingCart = 100;
 shipping = 10;
 let blackFriday = false; /*Boolean doesnt work*/
if (totalShoppingCart >= 50 && (blackFriday = false)) {
    console.log ( "Total cost " + totalShoppingCart)
} else if (totalShoppingCart >= 50 && (blackFriday = true)) {
    console.log ("Total cost " + ( totalShoppingCart - ((totalShoppingCart / 100) * 20 )))
} 
else if (totalShoppingCart < 50 && (blackFriday = false)) {
    console.log ("Total cost " + (totalShoppingCart + shipping))
} else if (totalShoppingCart < 50 && (blackFriday = true)){
    console.log("Total cost " + ( totalShoppingCart - ((totalShoppingCart / 100) * 20 ) + shipping))
}
/* EXERCISE 7
Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 7")
let x = 3;
let y = 1; 
let z = 2; 
let xyzSort = [ x, y, z];
xyzSort.sort();
console.log(xyzSort);



/* EXERCISE 8
Write a piece of code for checking if a given value is a integer or not. (search for 'typeof')
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 8")
let isInteger = 9;
if (isInteger%2 === 0) {
    console.log(isInteger +" Its integer")
} else if (isInteger%2 !== 0) {
    console.log(isInteger +" Its not integer")
}

/* EXERCISE 9
 Write a piece of code for checking if a given number is even or odd. (search for modulo operator)
*/


/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 9")
input = 5;
if (input%2 === 0) {
    console.log(input +" Its even")
} else if (input%2 !== 0) {
    console.log(input +" Its not even")
}

/* EXERCISE 10
Change the order of logic in the code so that it will return the correct statements in all cases.
let val = 7
if (val < 10) {
    console.log("Less than 10");
  } else if (val < 5) {
     console.log("Less than 5");
  } else {
    console.log("Greater than or equal to 10");
  }
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 10")
let val = 7
if (val < 10 && val >5) {
    console.log("Less than 10");
  } else if (val < 5) {
     console.log("Less than 5");
  } else {
    console.log("Greater than or equal to 10");
  }

/*
EXERCISE 11
Write chained if/else if statements to fulfill the following conditions:
num < 5 - display Tiny
num < 10 - display Small
num < 15 - display Medium
num < 20 - display Large
num >= 20 - display Huge
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 11")
let num = 300;
if (num < 5) {
    console.log(num + " Tiny")
} else if (num < 10) {
    console.log(num + " Small")
} else if (num < 15) {
    console.log(num + " Medium")
} else if (num < 20) {
    console.log(num + " Large")
} else if (num >= 20) {
    console.log(num + " Huge")
} 

/*  EXERCISE 12
Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

/* WRITE YOUR ANSWER HERE */
console.log("EXERCISE 12")
var isMale = false;
var gender = isMale; 
gender ? console.log("male") : console.log("female");
/* EXERCISE 13
Display the numbers 0 through 5 (inclusive) in acesnding order using a while loop.
*/

/* WRITE YOUR ANSWER HERE */
console.log("While loop Exercise 13");
let numberWhile = -1;
while ( numberWhile < 5 ) {
    numberWhile++;
    console.log(numberWhile);
  }
/* EXERCISE 14
Display the numbers 0 through 10 (inclusive) in acesnding order using a for loop.
*/

/* WRITE YOUR ANSWER HERE */
console.log("For loop Exercise 14");
for ( numbersFor = 0; numbersFor <= 10; numbersFor++) {
    console.log(numbersFor);
  }

/* EXERCISE 15
Display the numbers 0 through 10 (inclusive) in acesnding order  but skip displaying 3 and 8.
*/

for (let i = 0; i < 10; i++) {
    if (i !== 3 && i !== 5) {
      console.log(i);
    }
  }
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 16
 Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen
*/
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i, "Even");
    } else console.log(i, "Odd");
  }

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 17
  Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz
 */

/* WRITE YOUR ANSWER HERE */
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else console.log(i);
  }

/* EXERCISE 18
  Write a piece of code to check the day of the week .  Usie  SWITCH - CASE  and given "day" variable with range from 1 to 7. 
  For example: if day value is equal to 1 display "Monday", if day value is equal to 3 display "Wednesday"

  */

/* WRITE YOUR ANSWER HERE */
console.log("Exercise 18");
let dayOfweek = 3;
if (dayOfweek === 1) {
    console.log("Monday")
} else if (dayOfweek === 2) {
    console.log("Tuesday")
} else if (dayOfweek === 3) {
    console.log("Wednsday")
} else if (dayOfweek === 4) {
    console.log("Thursday")
} else if (dayOfweek === 5) {
    console.log("Friday")
} else if (dayOfweek === 6) {
    console.log("Saturday")
} else if (dayOfweek === 7) {
    console.log("Sunday")
} 