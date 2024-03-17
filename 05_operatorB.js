console.log("============ Step 1 =============");
function greaterNumber(num1,num2) {
    var result = num1 >= num2 ? "num1 is great than num2" : "num2 greater than num1";
    console.log(`given number ${num1} is greater than ${num2} == ${result}`);
}
greaterNumber(10 , -10);
greaterNumber(800 , 899);

console.log("============ Step 2 =============");

function isEvenOrOddNum(num3) {
    var result = num3%2==0 ? "Even" : "Odd";
    
    return result;
   
}
var returnValue = isEvenOrOddNum(29);
console.log("Given Number is: ", returnValue);
var returnValue = isEvenOrOddNum(44);
console.log("Given Number is: ", returnValue);
var returnValue = isEvenOrOddNum(0);
console.log("Given Number is: ", returnValue);
var returnValue = isEvenOrOddNum(101);
console.log("Given Number is: ", returnValue);

console.log("============ Step 3 =============");

function wordLength(name) {
    var length = name.length;
    console.log(`length of word is : ${length}`);
    var result = length%2==0 ? "Even":"Odd";
    return result;
}
var returnValue = wordLength("Javascript");
console.log("Given length is : ",returnValue);
var returnValue = wordLength("developer");
console.log("Given length is : ",returnValue);
var returnValue = wordLength("Google");
console.log("Given length is : ",returnValue);