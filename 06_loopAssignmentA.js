let word = "I am very good IT Developer";
let vowels = "aeiou";
let vowelscount =0;
for (let index = 0; index < word.length; index++) {
   let char=word.charAt(index);
   let lowercase = char.toLowerCase();
   if (vowels.includes(lowercase)) {
       vowelscount++;
   }
    
}console.log(`Number of vowels : ${vowelscount}`);


    let sum =0;
    for (let index = 0; index<=5; index++) {
        sum = sum + index * index * index;
        
    }console.log(`Sum of cube of Number : ${sum}`);


    function oddPositionedChars(word) {
        for (let index = 0; index <= word.length; index++) {
            const element= word.charAt(index);
            if (index%2!=0 && element!=" ") {
                console.log(element);
            }
            
        }
        
    }
    console.log("String 1");
    oddPositionedChars(`Hard word always pays back`);
    console.log("String 2");
    oddPositionedChars(`Soon I wll be UI IT champ`);
    