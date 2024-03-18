var voteEligible = function (age) {
    if (age >= 18 && age<=130) {
        console.log(`Age ${age} : Eligible for Vote`);
    } else if (age < 18){
        console.log(`Age ${age} : Not Eligible for vote`);
    }else if(age<=0 || age>130){
        console.log(`Age ${age} : Invalid Data`);
    }else{
        console.log("Information Not Found");
    }
    
}
 voteEligible(45);
 voteEligible(17); 
voteEligible(8); 
 voteEligible(20);
voteEligible(-10); 
voteEligible(200); 
voteEligible(0); 
voteEligible(null); 