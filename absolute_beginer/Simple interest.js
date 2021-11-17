// You are given with Principle amount($), Interest Rate(%) and Time (years) in that order. Find Simple Interest.

// Print the output up to two decimal places (Round-off if necessary).

// (S.I. = P*T*R/100)

// Input Description:
// Three values are given to you as the input. these values correspond to Principle amount, Interest Rate and Time in that particular order.

// Output Description:
// Find the Simple interest and print it up to two decimal places. Round off if required.

// Sample Input :
// 1000 2 5
// Sample Output :
// 100.00

var p=1000;
var t=2;
var r=5;
var SI=(p*t*r)/100;
SI=SI.toFixed(2);
console.log(SI);
