/* Q no 36
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message,
and a shirt of any size with a different message.*/
function make_shirt(size : string = "Large", text : string = "I LOve Typescript" )
{
   console.log(`The size of the T.shirt is "${size}" and the message that will be printed on it is "${text}"`);
}
make_shirt();
make_shirt("medium");
make_shirt("Small", "Coding is fun!!!!")