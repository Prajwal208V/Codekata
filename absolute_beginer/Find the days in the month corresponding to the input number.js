// You will be provided with a number. Print the number of days in the month corresponding to that number.

// Note: In case the input is February, print 28 days. If the Input is not in valid range print "Error".

// Input Description:
// The input is in the form of a number.

// Output Description:
// Find the days in the month corresponding to the input number. Print Error if the input is not in a valid range.

// Sample Input :
// 8
// Sample Output :
// 31

function converation(Month){
    switch(Month){
        case 1:
            return 31;
            break;
        case 2:
            return 28;
            break;
        case 3:
            return 31;
            break;
        case 4:
            return 30;
            break;
        case 5:
            return 31;
            break;
        case 6:
            return 30;
            break;
        case 7:
            return 31;
            break;
        case 8:
            return 31;
            break;
        case 9:
            return 30;
            break;
        case 10:
            return 31;
            break;
        case 11:
            return 30;
            break;
        case 12:
            return 31;
            break;
        default:
            return "Error"
            break;
    }
}
var a=parseInt(userInput[0], 10);
    console.log(converation(a));
