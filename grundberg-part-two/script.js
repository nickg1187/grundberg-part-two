let firstName = prompt("Welcome to GC mini golf! What is your name?");
let numHoles = prompt(`Hi ${firstName}! Would you like to play 3 or 6 holes today?`);
    console.log(`Name: ${firstName}`);

let totalPutts = 0;
let parPerHole = 3;
let totalPar = numHoles * parPerHole;



for (let i = 1; i <= numHoles; i++) {
    let putts = Number( prompt(`How many putts for Hole ${i}? (par is ${parPerHole})`) ); 
        console.log(`${putts} on Hole ${i}`);
    totalPutts += putts;
}

let sum = totalPutts - totalPar;


if (totalPutts >= totalPar) {
    console.log(`Nice try, ${firstName}... Your total par was: +${sum}`);
} else if (totalPutts <= totalPar) {
    console.log(`Great job, ${firstName}! Your total par was: ${sum}`);
} else {
    console.log(`Good game, ${firstName}. Your total par was: ${sum}`);
}