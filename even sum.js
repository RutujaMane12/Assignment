
myinputarr=[3,5,5,6,34,65,32,46]
var sum1=0;
for(let element of myinputarr){
    // console.log(element);
    if(element%2==0){
        sum1 += element;
    }
}
if(sum1==0){
    console.log("No even numbers found");
}
else{
    console.log(sum1);
}