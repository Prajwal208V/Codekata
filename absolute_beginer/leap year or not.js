// Let "A" be a year, write a program to check whether this year is a leap year or not.

// Print "Y" if its a leap year and "N" if its a common year.

// Input Description:
// A Year is the input in the form of a positive integer.

// Output Description:
// Print "Y" if its a leap year and "N" if its a common year.

// Sample Input :
// 2020
// Sample Output :
// Y

var YEAR=2000;
if((YEAR%4==0 && YEAR%100 !=0) || YEAR%400==0){
    console.log("Y");
}
else console.log("N");
