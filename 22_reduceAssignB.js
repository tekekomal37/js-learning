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

arrayEmployees =[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`==========Employees from Wipro Company=========`);
const newarray = arrayEmployees.filter( (currentEmp)=>{
    return currentEmp.emp_company =="Wipro";
});

newarray.forEach((element) => {
    element.detail();
});

console.log(`==========Employees from IT OR HR Department=========`);
const newdept = arrayEmployees.filter((dept)=>{
             return dept.emp_dept=="IT" || dept.emp_dept=="HR";
});

newdept.forEach(element => {
    element.detail();
});

console.log(`==========Employees whose Employee ID Greater than 50=========`);
const newid = arrayEmployees.filter((id)=>{
    return id.emp_id >50 ;

});
newid.forEach(element => {
    element.detail();
});

console.log(`==========Employees whose Names starts with letter "A","V","M"=========`);
const newname = arrayEmployees.filter((name)=>{
    return name.emp_name.startsWith("A") ||name.emp_name.startsWith("V") ||name.emp_name.startsWith("M") ;

});
newname.forEach(element => {
    element.detail();
});

console.log(` =======average salary of employes from all department =======`);

const sumSalary = arrayEmployees.reduce( (runningTotal, currentValue)=>{
    return runningTotal+currentValue.emp_salary;
},0 );
console.log(`Total Salary : ${sumSalary}`);
console.log(`Average salary from all department is: ${sumSalary/arrayEmployees.length}`);

console.log(`======= Get the average salary of employee's from IT department ======`);
const newArray = arrayEmployees.filter((emp)=>{
    return emp.emp_dept=="IT";
});

const Salary = newArray.reduce( (runningTotal, currentValue)=>{
    return runningTotal+currentValue.emp_salary;
}, 0 );
console.log(`Total Salary :${Salary}`);
console.log(`Average salary from IT department is: ${Salary/newArray.length}`);