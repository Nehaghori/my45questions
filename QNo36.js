/* Q no 36
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message,
and a shirt of any size with a different message.*/
function make_shirt(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I LOve Typescript"; }
    console.log("The size of the T.shirt is \"".concat(size, "\" and the message that will be printed on it is \"").concat(text, "\""));
}
make_shirt();
make_shirt("medium");
make_shirt("Small", "Coding is fun!!!!");
