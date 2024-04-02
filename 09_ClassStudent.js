class Student{
    constructor(rollNumber,name,division){
        this.rollNumber = rollNumber;
        this.name = name;
        this. division = division;

    }
    detail(){
        console.log(`Student Details = Roll Number: ${this.rollNumber}, Name: ${this.name}, Division: ${this.division}`);
   
    }
}
const komal = new Student(1, "Komal", 12);
komal.detail();

const Neha = new Student(2, "Neha", 12);
Neha.detail();

const samiksha = new Student(3, "Samiksha", 11);
samiksha.detail();