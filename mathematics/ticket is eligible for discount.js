/*Assume that you are ticket verifier at a club. Your club has decided to give a special discount to the person(s) who are satisfying the following condition

 

Condition:-

If ticket number is divisible by date of month. You are eligible for a discount.

Input Description:
First line contains input ‘n’.Next line contains n space separated numbers denoting ticket numbers .Next line contains ‘k’ date of the month.

Output Description:
Print 1 if the ticket is eligible for discount else 0

Sample Input :
6
112 139 165 175 262 130
22
Sample Output :
0 0 0 0 0 0

*/

var array1=6;
var array2=[112,139 ,165 ,175, 262, 130];
var date=22;
var array3=[];
for(var i=0;i<array1;i++){
    if(array2[i]%date ==0){
        array3.push(1);
    }
    else array3.push(0);
}
var str=array3.join(" ");
console.log(str);
