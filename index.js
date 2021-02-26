function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}

let fuelCheck = function(level){
    if (level > 100000){
      level = 100001
    return level;
  } else if (level > 50000){
    level = 50001
    return level;
  } else {
    return level;
  }
};

let siphonFuel = function (fuelevel, level){
  let siphonLevel = 0;
  siphonLevel = fuelLevel - fuelCheck(level)
  return siphonLevel;
};


const input = require('readline-sync');

let cargoArray = [];
let cargoItems = function(arr){

  while (cargoArray.length< 2){
  str =  input.question("Desired item? ");
  str2 = input.question("Replace item with? ");
  if (cargoHold.includes(str)){
  cargoArray.push(str);
  i = cargoHold.indexOf(str);
  cargoHold[i] = str2;
//  cargoHold.replace(str, 'ice cream')
   }
 } return cargoArray;
};

function irs (fuelLevel, carogstolen){
let carg = cargoItems(cargoArray);
let sentence =  console.log(`Raided ${fuelLevel}kg of fuel from the tanks, and stole ${carg[0]} and ${carg[1]} from the cargo hold.`);
return sentence;
};


function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7-arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length-7} items.`;
  } else {
    return "Full";
  }
}

let fuelLevel = 190001;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

console.log("Fuel level: " + checkFuel(fuelCheck(fuelLevel)));
console.log("Hold status: " + holdStatus(cargoHold));
console.log("Fuel level: " + fuelCheck(fuelLevel));
console.log('This is how much fuel we are taking, ' + siphonFuel(fuelLevel, fuelCheck(fuelLevel)) +'!');
//console.log(cargoItems(cargoHold));
//console.log(cargoHold);
console.log(irs(siphonFuel(fuelLevel, fuelCheck(fuelLevel))));
