/* Q no 28
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
var favourite_fruits = ["Mango", "Grapes", "Watermelon"];
if (favourite_fruits.include("Mango")) {
    console.log("You really like Mangoes!");
}
else {
    console.log("This fruit is not in an array.");
}
if (favourite_fruits.includes("Grapes")) {
    console.log("You really like Grapes!");
}
else {
    console.log("The fruit is not in the array");
}
if (favourite_fruits.includes("Watermelon")) {
    console.log("You really like Watermelon!");
}
else {
    console.log("The fruit is not in the array.");
}
if (favourite_fruits.includes("apple")) {
    console.log("You really like apples!");
}
else {
    console.log("The fruit is not in the array");
}
if (favourite_fruits.includes("Banana")) {
    console.log("You really like banana!");
}
else {
    console.log("The fruit is not in the array.");
}
