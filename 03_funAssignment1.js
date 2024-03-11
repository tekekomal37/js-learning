console.log("======== Task 1 =======");

console.log("======== Step 1 =======");
function info() {
    console.log("Hello , I Am Komal");
    console.log("Welcome to Angular Course");
}info();

console.log("======== Step 2 =======");
function personalDetails(firstName,lastName,collegeName) {
    console.log("First Name :",firstName);
    console.log("Last Name :",lastName);
    console.log("College Name :",collegeName);
}personalDetails("Komal","Teke","Dr. Vitthalrao Vikhe Patil Foundation");

console.log("======== Step 3 =======");
function swapValues(arg1,arg2) {
    console.log("======== Before Swap =======");
    console.log("Value 1 :",arg1,"Value 2 ",arg2);
    console.log("======== After Swap =======");
    
    var temp= arg1;
    arg1 = arg2 ;
    arg2 = temp;
    console.log("Value 1 :",arg1,"Value 2 ",arg2);
}swapValues("Virat","Anushka");
swapValues(1000,2000);

console.log("======== Step 4 =======");
function addThreeValues(n1,n2,n3) {
        var add = n1+n2+n3;
        console.log("Addition :",add);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello ","Good ","Morning");

console.log("======== Task 2 =======");
function bankDetails(bankName,accountNum,location,pincode) {
    console.log("Bank Name :",bankName,"Account Number :",accountNum,"Location : ",location,"PinCode :",pincode);
}
bankDetails("CITY BANK",3456781234,"Pune",433232);
bankDetails("Axis Bank",7856342345,"Mumbai",234567);
bankDetails("HDFC Bank",5010056787,"Pune",613234,"Open");