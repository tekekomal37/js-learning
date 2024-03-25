const arrayNumbers=[20, 31, 40, 25,23,11,29,9,60,2,11];
console.log(`Array is :: ${arrayNumbers}`);
console.log(`length of Array: ${arrayNumbers.length}`);

console.log("=====================================");
var firstElement = arrayNumbers.slice(0,1);
console.log(`First Element : ${firstElement}`);
var lastElement = arrayNumbers.slice(arrayNumbers.length-1);
console.log(`Last Element : ${lastElement}`);

console.log("=====================================");
console.log(`Array is :: ${arrayNumbers}`);

console.log(`Third last element : ${arrayNumbers[8]}`);

console.log("=====================================");
console.log(arrayNumbers);
for (const evenelement of arrayNumbers) {
     if (evenelement%2==0) {
        console.log(`Even Number : ${evenelement}`);
     }
}

console.log("===========================================");
console.log(arrayNumbers);
for (const oddelement of arrayNumbers) {
    if (oddelement%2!==0) {
       console.log(`Odd Number : ${oddelement}`);
    }
}

console.log("==========================================");

console.log(`Sum of All Even Positioned Number`);
console.log(arrayNumbers);


let result = [];
  for (let i in arrayNumbers) {
        if (i % 2 == 0) {
            result.push(arrayNumbers[i]);
            
        }
    }console.log(`Even Positioned Number : ${result}`);
   let sum =0;
    for (const element of result) {
      sum= sum+ element;
    }console.log(`Sum of Even Number : ${sum}`);


    console.log("=========================================");

    let result1 = [];
  for (let i in arrayNumbers) {
        if (i % 2 !== 0) {
            result1.push(arrayNumbers[i]);
            
        }
    }console.log(`Odd Positioned Number : ${result1}`);
   let addition =0;
    for (const element of result1) {
      addition= addition+ element;
    }console.log(`Sum of Odd Number : ${addition}`);

    console.log(`======================================`);
    let add=0;
    for (const element of arrayNumbers) {
      add = add+element;
    }console.log(`Sum of all arrayNumber Elements : ${add}`);

    console.log(`========================================`);
    console.log(arrayNumbers);
    for (const mult of arrayNumbers) {
      if (mult%5==0) {
         console.log(` Number Multipe of 5 : ${mult}`);
      }
 }

 console.log("============================================");
 console.log(arrayNumbers);
 var num = arrayNumbers.includes(115);
console.log(`Is number 115 available in arrayNumbers: ${num}`);

console.log("==============================================");
console.log(arrayNumbers);
 var num = arrayNumbers.includes(23);
console.log(`Is number 23 available in arrayNumbers: ${num}`);

console.log("===============================================");
console.log(`Insert Numbers 55 66 at index 3`);
console.log(arrayNumbers);
arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);

console.log("===============================================");
console.log("Delete 3 Elements starting from index 4");
console.log(arrayNumbers);
var deleteElement = arrayNumbers.splice(4,3);
console.log(arrayNumbers);