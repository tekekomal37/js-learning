
class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
    detail(){
        console.log(`Employee Details => ID : ${this.emp_id},Name: ${this.emp_name}, Department: ${this.emp_dept}, Salary: ${this.emp_salary}, Company : ${this.emp_company}`);
    }
    
}
const emp_anil = new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha = new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi= new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali= new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika= new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny= new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi = new Employee(99,"Mahesh","HR",85000,"Infy");

let arrayEmployees =[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log("== sort array descending order of Employee's id==");
arrayEmployees.sort((p1,p2)=>{
   return p1.emp_id>=p2.emp_id ? 1 : -1

});
let idreverse = arrayEmployees.reverse();
idreverse.forEach(element => {
    console.log(` Emp ID: ${element.emp_id}, Name: ${element.emp_name}, Department: ${element.emp_dept}`);
   
});

console.log("== sort array ascending order of Employee's Department==");
arrayEmployees.sort((p1,p2)=>{
        return p1.emp_dept>=p2.emp_dept? 1:-1 
});
arrayEmployees.forEach(element => {
    console.log(` Emp ID: ${element.emp_id}, Company: ${element.emp_company}, Department: ${element.emp_dept}`);
   
});

console.log("== sort array descending order of Employee's Salary ==");
arrayEmployees.sort((p1,p2)=>{
    return p1.emp_salary>=p2.emp_salary ? 1 : -1

});
let Salary = arrayEmployees.reverse();
Salary.forEach(element => {
    console.log(` Name: ${element.emp_name}, Salary: ${element.emp_salary}, Company: ${element.emp_company}`);
   
});