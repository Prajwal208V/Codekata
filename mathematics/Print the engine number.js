/*In XYZ country there is rule that car’s engine no. depends upon car’ number plate. Engine no is sum of all the integers present on car’s Number plate.The issuing authority has hired you in order to provide engine no. to the cars.Your task is to develop an algorithm which takes input as in form of string(Number plate) and gives back

Engine number.

Input Description:
You are given a string ’s’

Output Description:
Print the engine number

Sample Input :
HR05-AA-2669
Sample Output :
28
*/

var str_arr="HR05-AA-2669";
var num_str=(str_arr.replace(/\D/g,'')).split("").map((i)=>Number(i));
var sum=num_str.reduce(function(a,b){
    return a+b;
});
console.log(sum);
