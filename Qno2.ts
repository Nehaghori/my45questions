//Q no 2
// Name Cases: Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.
// tsc personalmsg.ts && node personalmsg.js 
let pname : string = "Neha Ghori"; 
let lowercase: string = pname.toLowerCase();
console.log("Lowercase: " + lowercase);

let uppercase: string = pname.toUpperCase();
console.log("Uppercase: " + uppercase);

let titlecase: string = pname.charAt(0).toUpperCase();
for(let i=1; i<pname.length; i++)
    {
        let char = pname.charAt(i);
        {
            if(pname.charAt(i-1) === " ")
            {
                titlecase += char.toUpperCase();
            }
            else{
                titlecase += char.toLowerCase();
            }
        }
    }
console.log("Title case: " + titlecase);