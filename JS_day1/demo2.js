// function sum(x=1,y=x,z=x+y){
//     return x+y+z;
// }
// let result = sum();
// console.log(`result : ${result}`);

// function sum(a, b, ...c) {         //rest parameters
//     return (a + b + c[0] + c[1]);
// }
// console.log(`sum : ${sum(2, 5, 6, 3)}`)

// function sum(a, b, ...args) {         //rest parameters
//     let result = a + b;
//     for (let i = 0; i < args.length; i++) {
//         result += args[i];
//     }

//     return result;
// }
// console.log(`sum : ${sum(2, 5, 6, 3)}`)


/*
spread operator
*/

// let players=['Lucky','riya','ronie'];

// let combinedplayers = ['rohit','hardik',...players];

// for(const player of combinedplayers){
//     console.log(player);
// }


// const car1={
//     brand: 'ford',
//     model: '2022'
// }

// const car2={
//     brand:'ford',
//     model:'2023',
//     color: 'white'
// }

// const myCar={...car1,...car2};

// console.log(myCar);


/*
    destructuring
*/


// let emps = ['john', 'doe', 'paul', 'harry'];

// let j = emps[0];
// let d = emps[1];
// let p = emps[2];
// let h = emps[3];

// let [j, d, p, h] = emps;    //array destructuring

// console.log(j);
// console.log(d);
// console.log(p);
// console.log(h);


//object destructuring

// const person = {
//     firstName: 'Rutuja',
//     lastName: 'Mane'
// }

// let fname = person.firstName;
// let lname = person.lastName;

// let { firstName : fname, lastName : lname} = person;
// console.log(fname, lname);



// let { firstName, lastName } = person;

// console.log(firstName,lastName);

// const employee = {            //object
//     firstName: 'rutuja',
//     lastName: 'Mane',               //properties
//     email: 'rutuja@gmail.com',

//     hobbies: ['cricket', 'travelling', 'surfing'], //properties in array

//     address: {               //object
//         city: 'Pune',
//         state: 'Maharashtra',
//         country: 'India'
//     },

//     fullName() {             //method
//         return this.firstName + ' ' + this.lastName;
//     }
// }
// console.log(employee);
// console.log(employee.email);
// console.log(employee.address.country);
// console.log(employee.fullName());
// console.log(employee.hobbies);
// console.log(employee.address);

/*
    constructor function
*/

function Employee(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;

    
}

let emp1 = new Employee('john','doe','john@gmail.com');
let emp2 = new Employee('joe', 'buttler', 'joe@gmail.com');

function fullName(){
    console.log('fullname from employee')
}
Employee.prototype.fullName=fullName;
console.log(emp1);
console.log(emp2);
console.log(emp1.fullName());

//javascript prototype
//js prototypal inheritance