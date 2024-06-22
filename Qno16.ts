/* Q no 16
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
let guestlist : string[] = ["Shifa", "Zohra", "Ayat"];
console.log("Hello! " + guestlist[0] + " I will be waiting for you at the dinner :)");
console.log("Hey there " + guestlist[1] + "! would love to see you see on Monday for dinner");
console.log("Hi " + guestlist[2] + "! I am arranging a dinner on monday, dont forget to come, your presence will be highly appreciated.");

guestlist : string[] = ["Shifa", "Zohra", "Ayat"];
console.log("Sadly, Ayat couldnt make it to the dinner");
console.log("Hello! " + guestlist[0] + " I will be waiting for you at the dinner :)");
console.log("Hey there " + guestlist[1] + "! would love to see you see on Monday for dinner");
console.log("Hi " + guestlist[2] + "! I am arranging a dinner on monday, dont forget to come, your presence will be highly appreciated.");
console.log("Hello everyone! I just found the bigger dinner table.");

guestlist = ["Mehak", "Shifa", "Mehsoom", "Zohra", "Alaya"];
let newguest : string = "wania";
guestlist.push(newguest);


console.log("Hello! " + guestlist[0] + " I will be waiting for you at the dinner :)");
console.log("Hey there " + guestlist[1] + "! would love to see you see on Monday for dinner");
console.log("Hi " + guestlist[2] + "! I am arranging a dinner on monday, dont forget to come, your presence will be highly appreciated.");
console.log("Hello " + guestlist[3] + " You are invited to my dinner party on monday");
console.log("Hey there, " + guestlist[4] + " We have arranged a dinner monday. Would love to see you there.");
console.log("Hi " + newguest + " We have arranged a dinner on Monday. Your presence will be highly appreciated");

console.log("I am so sorry everyone. i can only invite 2 people to dinner. my dinner table will be late");
guestlist = ["Mehak", "Shifa", "Mehsoom", "Zohra", "Alaya"];
console.log("Hello! " + guestlist[0] + " Sorry my dinner table will be delayed. i will invite you next time for sure.");
console.log("Hey there " + guestlist[1] + "! Sorry my dinner table will be delayed. i will invite you next time for sure");
console.log("Hi " + guestlist[2] + "! Sorry my dinner table will be delayed. i will invite you next time for sure.");
console.log("Hello " + guestlist[3] + " Sorry my dinner table will be delayed. i will invite you next time for sure");

guestlist = ["Alaya"];
console.log(guestlist + " You are still invited to the dinner");
console.log(guestlist + "You are still invited to the dinner");