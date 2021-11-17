// You are provided with a number check whether its odd or even. 

// Print "Odd" or "Even" for the corresponding cases.

// Note: In case of a decimal, Round off to nearest integer and then find the output. Incase the input is zero, print "Zero".

// Input Description:
// A number is provided as the input.

// Output Description:
// Find out whether the number is odd or even. Print "Odd" or "Even" for the corresponding cases. Note: In case of a decimal, Round off to nearest integer and then find the output. In case the input is zero, print "Zero".

// Sample Input :
// 2
// Sample Output :
// Even

function checker(n){
    if(n%2==0){
        return "Even";
    }
    else return "Odd";
}  

var n=2;
console.log(checker(n));
