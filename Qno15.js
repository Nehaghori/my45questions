/* Q no 15
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
var guestlist = ["Shifa", "Zohra", "Ayat"];
console.log("Hello! " + guestlist[0] + " I will be waiting for you at the dinner :)");
console.log("Hey there " + guestlist[1] + "! would love to see you see on Monday for dinner");
console.log("Hi " + guestlist[2] + "! I am arranging a dinner on monday, dont forget to come, your presence will be highly appreciated.");
guestlist = ["Shifa", "Zohra", "Alaya"];
console.log("Sadly, Ayat couldnt make it to the dinner");
console.log("Hello! " + guestlist[0] + " I will be waiting for you at the dinner :)");
console.log("Hey there " + guestlist[1] + "! would love to see you see on Monday for dinner");
console.log("Hi " + guestlist[2] + "! I am arranging a dinner on monday, dont forget to come, your presence will be highly appreciated.");
console.log("Hello everyone! I just found the bigger dinner table.");
guestlist = ["Mehak", "Shifa", "Mehsoom", "Zohra", "Alaya"];
var newguest = "wania";
guestlist.push(newguest);
console.log("Hello! " + guestlist[0] + " I will be waiting for you at the dinner :)");
console.log("Hey there " + guestlist[1] + "! would love to see you see on Monday for dinner");
console.log("Hi " + guestlist[2] + "! I am arranging a dinner on monday, dont forget to come, your presence will be highly appreciated.");
console.log("Hello " + guestlist[3] + " You are invited to my dinner party on monday");
console.log("Hey there, " + guestlist[4] + " We have arranged a dinner monday. Would love to see you there.");
console.log("Hi " + newguest + " We have arranged a dinner on Monday. Your presence will be highly appreciated");
