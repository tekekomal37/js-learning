const arrayNumbers =[20,11,40,25,23,11,9,31,60,2,19]

console.log(`=========== Add 10 into Each element =========`);
let addarray=[];
arrayNumbers.forEach(element => {
    addarray.push(element+10);
});
console.log(arrayNumbers);
console.log(addarray);

console.log(`=========== cube the each array Element =========`);
let cubearray=[];
arrayNumbers.forEach(element => {
    cubearray.push(element*element*element);
});
console.log(arrayNumbers);
console.log(cubearray);


console.log(`============ Add the index value into it's corresponding each array============`);

let newarray=[];
arrayNumbers.forEach((element, index) => {
    newarray.push(arrayNumbers[index] =arrayNumbers[index]+ index);
  });
  console.log(arrayNumbers);
  console.log(newarray);