var myinputarr = [];
var size = 10; // Array size
 
for(var a=0; a<size; a++) 
{
     
     
    myinputarr[a] = prompt('Enter array Element ' + (a+1));
}

console.log(myinputarr);

myinputarr.sort(function(a, b){return a - b});


myinputarr.reverse();
console.log(myinputarr[0]);
console.log(myinputarr[1]);



