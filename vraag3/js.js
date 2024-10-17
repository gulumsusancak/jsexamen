let hoeveelGetallen = parseInt(prompt("Hoeveel getallen wil je ingeven?:"));
let getal = 0;
let grootste;

for (let i = 1; i <= hoeveelGetallen; i++) {
    getal = parseInt(prompt(`geef getal ${i} in:`));
    if (getal > i) {
        grootste = Math.max(getal);
    }
}
console.log(`Het grootste getal van ${hoeveelGetallen} getallen is ${grootste}`);
