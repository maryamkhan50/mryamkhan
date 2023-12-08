//exersice 6.1
function addNum(x = 0, y = 0){
    let add = x + y;
    console.log(add)
} 
let num1 = 8
let num2 = 9
let addThem = addNum(num1, num2)
console.log(addThem)
console.log(addNum(5,6))
//exersice 6.2
let descriptiveWords = ['creative', 'adventurous', 'inspiring', 'innovative', 'passionate'];

function generateRandomMessage() {
    let userName = prompt("Please enter your name:");
    
    let randomIndex = Math.floor(Math.random() * descriptiveWords.length);
    let randomWord = descriptiveWords[randomIndex];
    
    console.log(`Hello ${userName}! You are ${randomWord}.`);
}

generateRandomMessage();
//exersice 6.3
let val1 = 5 
let val2 = 9 
let operator = "-"
function cal(x, y, operator){
    if (operator == "-" ){
        console.log(x - y)
    }
    else{
        console.log(x + y)
    }

}
cal(val1, val2, operator)
//exersice 6.4 
let arr = []
for ( i = 0; i<10; i++){
    let value1 = i * 5
    let value2 = i * i
    let result = cal(value1, value2, "+")
    arr.push(result)


}
console.log(arr)

function cal(x, y, operator){
    if (operator == "-" ){
        console.log(x - y)
    }
    else{
        console.log(x + y)
    }
}
//exersice 6.5
let val = "1000";
(function () {
let val = "100"; // local scope variable


console.log(val);
})();
let result = (function () {
let val = "maryam";
return val;
})();
console.log(result);
console.log(val);
(function (val) {
console.log(`My name is ${val}`);
})("maryam");
//exersice 6.6
function calculateFactorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * calculateFactorial(n - 1);
    }
}

let res = calculateFactorial(8);
console.log(res);
//exersice 6.7
let startValue = 10;

function countdown(value) {
    console.log(value);
    if (value < 1) {
        return;
    }
    return countdown(value - 1);
}

function secondCountdown(value) {
    console.log(value);
    if (value > 0) {
        return secondCountdown(value - 1);
    }
}

console.log("Countdown:");
countdown(startValue);

console.log("\nSecond Countdown:");
secondCountdown(startValue);
//excersice 6.8
let test = function(xyz){
    console.log(xyz);
    }
    test("hey user");
    function test1(xyz){
    console.log(xyz);
    }
    test1("hey user");
    //chapter project
    const main = function counter(i) {
        console.log(i);
        if (i < 10) {
        return counter(i + 1);
        }
        return;
        }
        main(0);
//set time out
const one = ()=> console.log('one');
const two = ()=> console.log('two');
const three = () =>{
console.log('three');
one();
two();
}

const four = () =>{
console.log('four');
setTimeout(one,0);
three();
}
four();