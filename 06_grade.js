function gradeCalculation(marks){
   if (marks>=90) {
       console.log(`Funtastic Marks : ${marks} , Your grade is A+`);
   } else if (marks>=75 && marks<90){
    console.log(`Excellent Marks : ${marks} , Your grade is A`);
 
   }else if (marks>=50 && marks<75){
    console.log(`Good Marks : ${marks} , Your grade is B`);
 
   }else if (marks>=35 && marks<50){
    console.log(`Marks is : ${marks} , Your grade is C , Need Improvement`);
 
   }
    // invalid inputs
    else if (marks==null || marks<=0 || marks>100 || isNaN(+marks)) {
        console.log(`Invalid input: ${marks}`);
    } else {
        console.log(`Valid input : ${marks}`);
        
    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7); // NaN
gradeCalculation(35); // 70
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);