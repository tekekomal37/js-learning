function stringHandsOn() {
    console.log(`=========== Step 1 ==========`);
    var sentence = "   Hey you are doing good, keep it up   ";
    console.log(`${sentence}`);
    console.log(`=========== Step 2 ==========`);
    var beforesentence = sentence.length
     console.log(`Length of String Is : ${beforesentence}`);
    console.log(`=========== Step 3 ==========`);
    var sentencetrim =  sentence.trim();
     var aftersentence = sentencetrim.length;
     console.log(`${sentencetrim} "it's length is :" ${aftersentence}`);

    console.log("=========== Step 4 ============");
    console.log(`Total No of space remove is : ${beforesentence - aftersentence}`);

    console.log("=========== Step 5 ============");
    var firstchar = sentencetrim.charAt(0);
    var lastChar = sentencetrim.charAt(aftersentence-1);
    console.log(`After trim first char is : ${firstchar}  Last Char is: ${lastChar}`);

    console.log("=========== Step 6 ============");
    var totalword = sentencetrim.split(" ");
    console.log(`Total Number of Word is : ${totalword.length}`);

    console.log("=========== Step 7 ============");
    console.log(`Index of "good" from given string : ${sentencetrim.indexOf('good')}`);

    console.log("=========== Step 8 ============");
    console.log(`Substring starting from : ${sentencetrim.substring(22)}`);

    console.log("=========== Step 9 ============");
    var result = console.log(`End with word "up" : ${sentencetrim.endsWith("up")}`);

    console.log("=========== Step 10 ============");
    var result = console.log(`Starting with word "Hey" : ${sentencetrim.startsWith("Hey")}`);
}stringHandsOn();