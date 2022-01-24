// Code your solutions in this file
//for (let age = 30; age <40; age++) {
  //  console.log(`I\'m ${age} years old. Happy birthday to me!`);
//}



const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;

}

wrapGifts(gifts);

const guests = ["Charlie", "Samip", "Ali"]

function writeCards() {
    for (let g = 0; g < gifts.length; g++) {
        console.log(`Thank you, ${guests[g]}, for the wonderful birthday gift!`);
    }
    debugger;
    return guests;
    
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function wrapGifts(gifts) {
    let i = 0;
    while (i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} added a bow!`);
        i++;
    }
    return gifts;
}




/*const num = []

function countdown(num) {
    let n = num;
    while (n >= 1) {
        console.log(`${n} bottles of beer on the wall, ${n} bottles of beer! Take one down, pass it around, ${n - 1} bottles of beer on the wall!`);
        n--;
    }
    return num;
}


countdown(20);
*/