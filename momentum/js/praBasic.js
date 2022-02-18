// 변수(can change) let 상수(can not change) const
const a = 5;
const b = 2;
let myName = "chloe";
console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);
myName = "cccchloe";  //variable을 업데이트 하는 과정(재할당O) variable을 생성할 때만 명시(재선언X)
console.log("your new name is " + myName);


// boolean -> true false -> 값 존재
// null
// undefined
const amIFat = null;
let something;
console.log(something, amIFat);


// arrays
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
const nonsense = [1, 2, "hello", false, null, true, undefined];
//Get Item from Array
console.log(daysOfWeek[5], nonsense);
//Add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);


// Objects
//object는 property를 가진 데이터를 저장해주며, {}를 사용
const player = {
    name: "chloe",
    points: 10,
    fat: false,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);
//constant(그 자제의 object)는 수정 불가 -> constant안에 objects는 추가, 수정, 삭제 가능
//property 업데이트
player.points = 20;  
console.log(player);
//property 추가
player.lastName = "potato";
console.log(player);


// Functions -> 데이터 보내는 방법

// console.log("hello my name is Chloe");
// console.log("hello my name is a");
// console.log("hello my name is b");
function sayHello(nameOfPerson, age) {
    console.log("hello my name is " + nameOfPerson + " and I'm " + age);
}
sayHello("chloe", 10);
sayHello("sam", 24);
sayHello("bob", 21);

//변수 이름은 상관없음 중요한 건! 첫번째 변수는 첫번째 argument의 데이터 전달 두번째 변수는 두번째 argument 데이터 전달...
function divide(firstNumber, secondNumber){
    console.log(firstNumber / secondNumber);
}
divide(10, 100);
divide(100, 10);

const player2 = {
    name: "nico",
    sayHello: function(otherPersonName){
        console.log("hello " + otherPersonName + " nice to meet you");
    },
};
 console.log(player2.name);
 player2.sayHello("lynn");

 
 // Recap(요약)
 const calculator = {
    sum: function (first, second) {
        console.log(first + second);
    },
    subtract: function (first, second) {
        console.log(first - second);
    },
    divide: function (first, second) {
        console.log(first / second);
    },
    multiply: function (first, second) {
        console.log(first * second);
    },
    power: function (first, second) {
        console.log(first ** second);
    },
};
calculator.sum(1, 2);
calculator.subtract(5, 3);
calculator.divide(10, 2);
calculator.multiply(10, 2);
calculator.power(10, 2);


// Return
const calculator2 = {
    sum: function (first, second) {
        return first + second;
    },
};
const sumResult = calculator2.sum(1, 2);
console.log(sumResult);

const ageofme = 20;
function calculateKrAge(ageofme) {
    return ageofme + 2;
}
const krAge = calculateKrAge(ageofme);
console.log(krAge);


// Recap


// Conditionals
const age = parseInt(prompt("How old are you?"));
    if(isNaN(age) || age < 0){
        console.log("please write a number");
    } else if(age < 18) {
        console.log("You are too young");
    } else if(age >= 18 && age <= 70) {
        console.log("You can drive");
    } else {
        console.log("Think about your health");
    };