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
console.log(`${greet}  : ${greetinclude}`);


console.log(`========== slice ==================`);
var str= "developers world! ;"
console.log(str.slice(0,10));




