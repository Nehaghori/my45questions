/*Q no 23
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
//equality and inequality with strings
var car = 'Porche';
console.log("Is Car == 'Porche' ? I predict True.");
console.log(car == 'Porche');
console.log("Is Car != 'Civic' ? I predict False.");
console.log(car == 'Civic');
//lower case function
var lofunc = 'mehak';
console.log("Is lofunc.toLowerCase() == 'mehak' ? I predict True.");
console.log(lofunc.toLowerCase() == 'mehak');
var lofunction = "MEHAK";
console.log("Is lofunc.ToLowercase() == 'mehak' ? I predict False.");
console.log(lofunction == "MEHAK");
//equality inequality in numbers
var num = 50;
console.log("Is num == 50 ? I predict True.");
console.log(num == 50);
console.log("Is num != 60 ? I predict False.");
console.log(num != 50);
//greater than less than
console.log("Is num > 40 ? I predict True.");
console.log(num > 40);
console.log("Is num < 40 ? I predict False.");
console.log(num < 40);
//greater than or equal to and less than or equal to
console.log("Is num >= 50 ? I predict True.");
console.log(num >= 50);
console.log("Is num <= 40 ? I predict False.");
console.log(num <= 50);
//and or operators
var color = "White";
var Shape = "Triangle";
console.log("is color && shape == white && triangle? I predict True.");
console.log(color == "White" && Shape == "Triangle");
console.log("is color && shape == Blue && circle? I predict False.");
console.log(color == "Blue" || Shape == "Circle");
//checking if the item is in array
var sports = ["basketball", "football", "badminton", "cricket"];
console.log("Is football is in the sports array? I predict true");
console.log(sports["football"]);
console.log("Is Hockey is in the sports array? I predict False");
console.log(sports["hockey"]);
//checkign is the item is not in an array
console.log("Is hockey not in the sports array? I predict True");
console.log(sports["hockey"]);
console.log("Is football not in the sports array? I predict False");
console.log(sports["football"]);
