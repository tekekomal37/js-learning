let professor = {
    name:"Mick",
    Age :45,
    city:"Pune",
    Specialize:"Java",
    Salary : 45000,
    degree : {
        Engineering :"CSC",
        PHP : "Adv Computing",
        getdegree : function() {
            const degree = `Engineering : ${this.Engineering}, PHP : ${this.PHP}`
            return degree;
        }
        
    },
    Certificates:["Hacker rank Participation","Certificate in IFE Course","Certificate in Adv Programming"]

}
console.log("1 Add Properties of the Professor");
console.log("2 Include Nested object degree");
console.log("3 Add One Array Certificate");
console.log(professor);

  console.log("4 Add new Property Experiencce");
  professor.totalExperience = "14 Years";
  console.log(professor);

console.log("5 Modifying one property");
professor.Age = 35;
console.log(professor);

console.log("6-Add one new Certificate");

  // Adding a second value to "certificate" property using splice method
  if (!Array.isArray(professor.Certificates)) {
    console.error("Certificate property is not an array.");
  } else {
    // Inserting the second certificate at index 1
    professor.Certificates.splice(2, 0, "Oracle Certified");
  }
  
  // Output the updated object
  console.log(professor);
  console.log(professor.Certificates);

  console.log("7 Log the last Element array - Certificate");
  let len = professor.Certificates.length;
  console.log(professor.Certificates[len-1]);

  console.log("8 log Complete Object on Console");
  console.log(professor);

  console.log("Traverse array - certificates using For of loop");
    for (let index = 0; index < professor.Certificates.length; index++) {
      const element = professor.Certificates[index];
      console.log(element);
    }

