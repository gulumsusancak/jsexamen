

let temperatuur=parseInt(prompt("geef het temperatuur in:"));
let farenheit=temperatuur*(9/5);

if (temperatuur<15){
    console.log(temperatuur + " graden Celcius is gelijk aan "+ farenheit + " graden Farenheid en voelt frisjes aan");
}
else if (temperatuur>=15 && temperatuur<=25) {
    console.log(temperatuur + " graden Celcius is gelijk aan "+farenheit+" graden Farenheid en voelt aangenaam aan");
}
else{
    console.log(temperatuur + " graden Celcius is gelijk aan "+farenheit+" graden Farenheid en voelt te warm aan")
}
