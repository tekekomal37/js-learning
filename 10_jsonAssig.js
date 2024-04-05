const personJSON = `
{
    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["Dev","DBA"],
    "age": 23,
    "doj":"11-12-2019",
    "married" :false,
    
    "address": {
      "street": "32, Laham St.",
      "city": "InnsBruck",
      "country":"Austria"
    },
    "referred-by":"E0012"
  }
`;


console.log(`======== Convert JSON to Object ===========`);
const personObject = JSON.parse(personJSON);
console.log(typeof personObject);
console.log(personObject);

console.log(`===== Log on Console role - Dev =======`);
console.log(personObject.role[0]);

console.log(`========== Log last Name ========`);
const part = personObject.name.split(" ");
const lastName  =part[part.length-1];
console.log("Last Name :",lastName);

console.log("======== Log Joining year of Employee ========");
// const doj = "11-12-2019";
const empyear = personObject.doj.split("-");
const year = empyear[2];
console.log("Year:", year);