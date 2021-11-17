/*You are given a large number made of only 0’s and 1’s.Your task is to find the max no of consecutive 1’s. If there are no 1’s print -1

Input Description:
A large number ‘n’

Output Description:
Print the max no of consecutive 1 in the number

Sample Input :
101011111
Sample Output :
5
*/

function finder(arr){
    var count=0;
    var result=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]==0){
            count=0;
        }
        else{ 
        count++; 
        result=Math.max(result,count);
        }
    }
    return result;
}

var arr=[1,0,1,0,1,1,1,1,1];
var get_result=finder(arr);
if(get_result>0){
    console.log(get_result);
}
else console.log(-1);
