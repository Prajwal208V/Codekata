/*Write a code to get 2 integers as input and find the HCF of the 2 integer without using recursion or Euclidean algorithm.

Input Description:
A single line containing 2 integers separated by space.

Output Description:
Print the HCF of the integers.

Sample Input :
2 3
Sample Output :
1
*/

var A=2;
var B=3;
const min=(A<B)?A:B;
for(var i=1; i<=min; i++)
    {
        if(A%i==0 && B%i==0)
        {
            var HCF = i;
        }
    }
console.log(HCF);;
