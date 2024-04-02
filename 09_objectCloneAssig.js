let bankSbi = {
        name :"State Bank Of India",
          accno : 2345,
          ifsc :"sbi7856",
          branch:"Pune"
}

let bankLocation = {
    street: "Wakad",
    city :"Pune",
    pin : 567435
}

console.log(`===== Cloning an Object using Object.assign()======`);
const cloneObjet = Object.assign({}, bankSbi,bankLocation);
console.table(cloneObjet);

let rateOfInterest ={
    homeLoanInterest : 20000,
    personalLoanInterest : 50000,
    duelInterest :10000

}

const sbiDetails = Object.assign({}, bankSbi, bankLocation,rateOfInterest);
console.log(`====== Merged Object=========`);
console.table(sbiDetails);

console.log(`============== Traverse sbiDetails using for in loop===============`);
for (const index in sbiDetails) {
    console.log(sbiDetails[index]);
}