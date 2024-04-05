console.log(`========= Step 1 ========`);
function isPrime(num){
    for (let index = 2; index < num; index++) {
      if (num%index==0) {
        return false;
        } 
    }
    return true;
   }
   
   const array = [3,9,7,6,19,29,53];
   let primeCount = 0;

array.forEach(num => {
    if (isPrime(num)) {
        primeCount++;
    }
});

console.log("Count of prime numbers in the array:", primeCount);

console.log(`========= Step 2 ========`);

function spaceCount(sentence) {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i]===' ') {
            count++;
        }
    }
    return count;
}

const sentence = "Revision is the mother of success";
const spaces = spaceCount(sentence);
console.log(`Total number of spaces:${spaces}`);

const sentence1 = "Java Script is the language of Internet world";
const spaces1 = spaceCount(sentence1);
console.log("Total number of spaces:", spaces1);
