// oppgave 1
console.log("OPPGAVE 1");

const tall = [5, 5, 8, 8, 12, 44, 130, 130];


console.log("a. Alle elementene");

for (let i = 0; i < tall.length; i++) {
    console.log(tall[i]);
}

console.log("b. Fra siste til første");

for (let i = tall.length - 1; i >= 0; i--) {
    console.log(tall[i]);
}

console.log("c. Indeksert utskrift");

for (let i = 0; i < tall.length; i++) {
    console.log(i + ":" + tall[i]);
}

console.log("d. Sum og gjennomsnitt");

let sum = 0;

for (let i = 0; i < tall.length; i++) {
    sum += tall[i];
}

let gjennomsnitt = sum / tall.length;

console.log("Sum:", sum);
console.log("Gjennomsnitt:", gjennomsnitt);

// oppgave 2
console.log("OPPGAVE 2");

function minVerdi(arr) {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

function maxVerdi(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log("2a - Min og maks");
console.log("Min:", minVerdi(tall));
console.log("Maks:", maxVerdi(tall));

function kvadrater(arr) {
    let nyArray = [];

    for (let i = 0; i < arr.length; i++) {
        nyArray.push(arr[i] * arr[i]);
    }

    return nyArray;
}

console.log("2b - Kvadrater");
console.log(kvadrater(tall));

function barePartall(arr) {
    let nyArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            nyArray.push(arr[i]);
        }
    }

    return nyArray;
}

console.log("2c - Partall");
console.log(barePartall(tall));

function utenDuplikater(arr) {
    let nyArray = [];

    for (let i = 0; i < arr.length; i++) {
        let finnes = false;

        for (let j = 0; j < nyArray.length; j++) {
            if (arr[i] === nyArray[j]) {
                finnes = true;
                break;
            }
        }

        if (!finnes) {
            nyArray.push(arr[i]);
        }
    }

    return nyArray;
}

console.log("2d - Uten duplikater");
console.log(utenDuplikater(tall));
