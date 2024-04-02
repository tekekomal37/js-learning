console.log("============ Step 1 ============");
class Vehicle{
    
    constructor(name,color,price,company,type){
        this.name =name;
        this.color= color;
        this.price = price;
        this.company = company;
        this.type = type;
    }
    detail(){
        console.log(`Vehicle Details => Name : ${this.name}, Color : ${this.color}, Price : ${this.price}, Company : ${this.company},Type : ${this.type} `);
    }
}
const access = new Vehicle("Access125", "White", 80000,"Suzuki","Two Wheeler");

const unicorn = new Vehicle("Unicorn", "Black", 125000,"Honda","Two Wheeler");

const activa = new Vehicle("Activa", "Red", 75000,"Honda","Two Wheeler");

const jupiter = new Vehicle("Jupiter", "Silver", 85000,"Suzuki","Two Wheeler");

const creata = new Vehicle("Creata", "Grey", 95000,"Hyundai","Two Wheeler");



console.log("========== Traversing Array Object ==========");
const arrayOfVehicles = [access,unicorn,activa,jupiter,creata];
for (const element of arrayOfVehicles) {
    element.detail();
}

console.log("===================== Step 2 ======================");
class College{
   
    constructor(name,university,location,year){
        this.name =name;
        this.university= university;
        this.location = location;
        this.year = year;
    
    }
    details(){
        console.log(`College Details => Name : ${this.name}, University : ${this.university}, Location : ${this.location}, College Establish Year : ${this.year}`);
 
    }
}
      const college1 = new College("D.Y .Patil" ,"Pune University","Pune",1998);
      college1.details();

      const college2 = new College("Sanjivani College","Pune","Kopargaon",1990);
      college2.details();

      const college3 = new College("IBMRD","Pune University","Ahmednagar",1989);
      college3.details();

      const college4 = new College("Sinhagad Institute","Pune University","Pune",1985);
      college4.details();