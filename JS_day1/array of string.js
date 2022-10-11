var myinputarr = [];
var size = 2; // Array size
 
for(var a=0; a<size; a++) 
{
     
     
    myinputarr[a] = prompt('Enter array string ' + (a+1));
}
 
//user eneter array
console.log(myinputarr);
const arr1=[];
for(element of myinputarr){
    str=element.split('').reverse().join('');
    const capitalized = str.charAt(0).toUpperCase()+str.slice(1);
    // console.log(capitalized);
    str1=capitalized.split('').reverse().join('');
    // console.log(str1);
    arr1.push(str1);
    
}
myinputarr=[];
myinputarr = myinputarr.concat(arr1);
console.log(myinputarr);
