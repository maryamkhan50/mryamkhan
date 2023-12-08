//exersice 5.1
// let maxValue = 10;
// let solution = Math.floor(Math.random() * maxValue ) + 1
// console.log("solution",solution);
// let isCorrect = false;
//  while (!isCorrect){


//     let userGuessstring =prompt(`Enter your number between 1 And ${maxValue}:`);
//     let userGuess = parseFloat(userGuessstring)

// if (userGuess === solution) {
//     console.log("you won! your guess is correct");
//     isCorrect = true;

// }
// else {

//     console.log(`${userGuess} < ${solution} ? you lose! your guess is incorrect`);
// } }
//exersice 5.2 
let counter = 0;
let step = 1;
do {
    console.log(counter)
    counter += step;
}
while (counter < 101)
console.log("your counter reached 100")
//exersice 5.3
let myWork = []
for (let i = 1; i <= 10; i++) {
    let status = i % 2 === 0 ? true : false;
    let lesson = {
        name: `lesson${i}`,
        status: status
    };
    myWork.push(lesson);
}
console.log(myWork)
//Exersice 5.4
let myTable = []
let rows = 4;
let cols = 7;
let counTer = 0;
for ( i = 0; i < rows; i++){
let tempTable = []
   for ( j = 0; j < cols; j++){
    counTer++
   tempTable.push(counTer);
   }
   myTable.push(tempTable);
}
console.log(myTable);
//exersice 5.5
let grid = [];
let numberOfCells = 64;
let couNter = 0;
let row = [];

for (let h= 0; h < numberOfCells + 1; h++) {
    if (couNter % 8 === 0) {
        if (row !== undefined) {
            grid.push(row);
        }
        row = [];
    }
    couNter++;
    let tempValue = couNter;
    row.push(tempValue);
    if (counter === 8) {
        grid.push(row);
    }
}

console.log(grid);
//exersice 5.6
let empArr = [];
for (i = 0; i < 10; i++){

    empArr.push(i + 1)
}
console.log(empArr)
for ( let j = 0; j < empArr.length; j++){
    console.log(empArr[j])
}
for (let value of empArr){
    console.log(value)
}
//exersice 5.7
let object = {
    item1: "Value 1",
    item2: "Value 2",
    item3: "Value 3"
};


console.log("Object Properties and Values:");
for (let key in object) {
    console.log(`${key}: ${object[key]}`);
}


let array = ["Value 1", "Value 2", "Value 3"];


console.log("\nArray Values:");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
//exersice 5.8 
let output = "";
let skipNumber = 5;

for (let i = 1; i <= 10; i++) {
    if (i === skipNumber) {
        continue;
    }
    output += i + " ";
}

console.log(output);

output = "";

for (let i = 1; i <= 10; i++) {
    if (i === skipNumber) {
        break;
    }
    output += i + " ";
}

console.log(output);
//chapter project : 5
let multiTable = [];
let tableSize = 10;

for (let i = 1; i <= tableSize; i++) {
    let tempRow = [];
    for (let j = 1; j <= tableSize; j++) {
        tempRow.push(i * j);
    }
    multiTable.push(tempRow);
}

console.log("Multiplication Table:");
console.table(multiTable);




