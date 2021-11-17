/*Using the method of looping, write a program to print the table of 9 till N in the format as follows:
(N is input by the user)

9 18 27...

Print NULL if 0 is input

Input Description:
A positive integer is provided as an input.

Output Description:
Print the table of nine with single space between the elements till the number that is input.

Sample Input :
3
Sample Output :
9 18 27
*/

function table(n){
    var array=[]; 
if(num!=0){
    for(var i=1;i<=num;i++){
       array.push(9*i);
    }
    array=array.join(" ");
    return array;
}
else return "NULL";
}
var num=3;
console.log(table(num));
