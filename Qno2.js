//Q no 2
// Name Cases: Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.
// tsc personalmsg.ts && node personalmsg.js 
var pname = "Neha Ghori";
var lowercase = pname.toLowerCase();
console.log("Lowercase: " + lowercase);
var uppercase = pname.toUpperCase();
console.log("Uppercase: " + uppercase);
var titlecase = pname.charAt(0).toUpperCase();
for (var i = 1; i < pname.length; i++) {
    var char = pname.charAt(i);
    {
        if (pname.charAt(i - 1) === " ") {
            titlecase += char.toUpperCase();
        }
        else {
            titlecase += char.toLowerCase();
        }
    }
}
console.log("Title case: " + titlecase);
