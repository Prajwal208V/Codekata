/*
Pk finds it difficult to judge the minimum element in the list of elements given to him. Your task is to develop the algorithm in order to find the minimum element.

 

Note:Don’t use sorting
 

Input Description:
You are given ‘n’ number of elements. Next line contains n space separated numbers.

Output Description:
Print the minimum element

Sample Input :
5
3 4 9 1 6
Sample Output :
1
*/

var arr=[3,4 ,9 ,1 ,6];
var temp=arr[0];
for(var i=0;i<arr.length;i++){
    if(arr[i]<temp){
        temp=arr[i];
    }
}
console.log(temp);
