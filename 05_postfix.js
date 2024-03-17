var a = 5;
var b = a++;
console.log(a);
console.log(b);

var n1=5;
var res = n1++ + ++n1 + n1++;
console.log(res);

var a=2;
var b=  ++a + ++a + a++ - --a;
console.log(b);

var a=4;
var b=  a-- + ++a + ++a + a++;
console.log(b);
console.log(a);