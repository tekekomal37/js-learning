console.log(`I am "Software" Developer`);

var city = "Pune";
var firstName = "Gajanan";

//console.log("My name is: ", firstName, " and city is: ", city);

console.log(` My name is: ${firstName} and city is: ${city} `);


console.log("========== replace() ==================");
var greet = "Good Morning";
const afterReplace = greet.replace("Morning", "Afternoon");
console.log(`After replace string is: ${afterReplace}`);

console.log(`========== toUpperCase() ==================`);
var greet = "Good Morning";
var greetInUpperCase = greet.toUpperCase();
console.log(`${greet} in upper case is : ${greetInUpperCase}`);

console.log(`========== trim() ==================`);
var greet ="    Trim Both Side  ";
console.log(`${greet} it's length is : ${greet.length}`);
 var greetTrim = greet.trim();
console.log(`${greetTrim} it's length is : ${greetTrim.length}`);



console.log(`========== include() ==================`);
var greet = "My Name is Komal";
var greetinclude = greet.includes("Komal");
console.log(`${greet} : ${greetinclude}`);


console.log(`========== slice ==================`);
var str= "developers world! ;"
console.log(str.slice(0,10));


console.log(`========== trim() ==================`);
var greet = "   Good Morning   ";
var lengthBeforeTrim = greet.length;
console.log(` ${greet} it's length is : ${lengthBeforeTrim} `);

var greetAfterTrim = greet.trim();
var lengthAfterTrim = greetAfterTrim.length;
console.log(` ${greetAfterTrim} it's length is : ${lengthAfterTrim} `);
console.log(`Total spaces removed is: ${lengthBeforeTrim-lengthAfterTrim}`);


console.log(`========== includes() ==================`);
var greet = "Good Morning";
var result = greet.includes("nin");
console.log(`Is string ${greet} includes word or char 'nin': ${result}`);

var result = greet.includes("MoR");
console.log(`Is string ${greet} includes word or char 'MoR': ${result}`);

console.log(`========== search() ==================`);
var greet = "Good Morning";
var result = greet.search("Morning");
console.log(`'Morning' is available at ${result}`);

var result = greet.search("r");
console.log(`'r' is available at ${result}`);

console.log(`========== split() ==================`);
var greet = "Good Morning";
var resultValue = greet.split(" ")
console.log(resultValue);
console.log(`Total words are: ${resultValue.length}`);

function totalWord(arg1) {
     
    var result = arg1.split(" ")
    console.log(result);
    console.log(`Total Number Of Words  : ${result.length}`);
     
}
totalWord("I am happy Buddy");

