function Person(name, city, age){
    this.name = name;
    this.city = city;
    this.age = age;
}
const jenny = new Person("Jenny", "Pune", 23);
console.log(jenny);
const bill = new Person("Bill", "Mumbai", 34);
console.log(bill);
const stew = new Person("Stew", "LA", 54);
console.log(stew);
const elon = new Person("Elon", "Bangalore", 30);
console.log(elon);

// instanceof
const result = elon instanceof Person;
console.log(result);