const array1=[2,3,4,5,6];

function fact(num){  
    var i, f;  
    f = 1;   
    for(i = 1; i <= num; i++)    
    {  
    f = f * i;  
    }      
    return f;
    }  
const facto= [];
// for(let i=0; i<5; i++){
//     facto.push(fact(i));
// }
for(element of array1){
    facto.push(fact(element));
}
console.log(facto);