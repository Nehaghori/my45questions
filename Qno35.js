/* Q no 35
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.*/
function make_shirt(size, text) {
    console.log("The size of the T.shirt is ".concat(size, " and the message that will be printed on it is ").concat(text));
}
make_shirt("medium", "Coding is fun!");
