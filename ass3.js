function show(...args) {
   for (const element of args) {
    console.log(element);
   }

   console.log(`The number of argumnets passed : ${args.length}`);
}

console.log(show(5, 6, 4, 2, 3, 7));