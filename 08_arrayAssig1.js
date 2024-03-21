const fruits_seasonal =["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal);

console.log(`First and Last Element on Array`);
var firstElement = fruits_seasonal.slice(0,1);
console.log(`First Element : ${firstElement}`);
var lastElement = fruits_seasonal.slice(4);
console.log(`Last Element : ${lastElement}`);

console.log(`Add Element Papaya before the element Banana`);
console.log(fruits_seasonal);
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);

console.log(`Remove Mango from the array`);
console.log(fruits_seasonal);
 const deleteElement = fruits_seasonal.splice(4,1);
 console.log(deleteElement);
console.log(fruits_seasonal);

console.log(`Insert an Element Pineapple at the last position`);
console.log(fruits_seasonal);
fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);

console.log(`Insert an element -Dragon fruit before Water Melon`);
console.log(fruits_seasonal);
fruits_seasonal.splice(4,0,"Dragon")
console.log(fruits_seasonal);

console.log(`Replace an element Orange with Kiwi`);
console.log(fruits_seasonal);
fruits_seasonal.splice(2,1,"Kiwi");
console.log(fruits_seasonal);

console.log(`Starting element from 1 to 4`);
console.log(fruits_seasonal);
var subArray = fruits_seasonal.slice(1,5);
console.log(subArray);

console.log(`Log last three element using length`);
console.log("Last 3 elements:", fruits_seasonal.slice(-3));
