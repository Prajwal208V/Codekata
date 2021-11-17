/*Write a program to get a string as input and reverse the string without using temporary variable.

Input Description:
A single line containing a string.

Output Description:
Print the reversed string.

Sample Input :
GUVI
Sample Output :
IVUG
*/

function rev(str){
    var spliter=str.split("");
    var revers=spliter.reverse();
    var join=revers.join("");
    return join;
}
var str="PrepBytes";
console.log(rev(str));
