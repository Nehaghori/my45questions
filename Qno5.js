//Q no 5
/*Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
so the whitespace around the name is displayed. Then print the name after striping the white spaces.*/
var pname = "\t\n  Neha Ghori  \t\n";
console.log("Original Name:");
console.log("'" + pname + "'");
var sname = pname.trim();
console.log("Stripped Name:");
console.log("'" + sname + "'");
