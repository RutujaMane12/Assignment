
function factorial(num) {
    if (num == 0) {
        console.log("The factorial of numnber is 1");

    }
    else if (num < 0) {
        console.log("not possible");
    }
    else {
        for (var i = 1; i <= num; i++) {
            fact = fact * i;

        }
    }
    return fact;
}
var num = 5;
var fact = 1;
console.log((factorial(num)));
