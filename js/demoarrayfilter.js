"use strict";
//declare array
//PASCALL CASE -- class CalculateSum
//camel CASE    calculateInterest
//hungerian notation   int intAgeAboveSixty
const arrNumbers = [1, 2, 3, 4, 5, 6];
arrNumbers.push(10); //adding 10 to an array
arrNumbers.pop();
//filterinf
const arrFilteredNumber = arrNumbers.filter(x => x % 2 === 0);
console.log(arrFilteredNumber);
//print Full Name
function printFullName(firstName, lastName = "Joseph") {
    console.log(`${firstName} ${lastName}`);
}
printFullName("John ");
//reduce method
/* calculate the sum of all elements in the array
*/
function addNumbersTest(first, second) {
    return first + second;
}
const addNumbers = (first, second) => first + second;
const sumOfNumbers = arrNumbers.reduce(addNumbers, 0);
console.log(sumOfNumbers);
//filtering
const arrFilteredNumbers = arrNumbers.filter(x => x % 2 != 0);
console.log(arrFilteredNumbers);
let printMessage = () => console.log("Hello we are learning!");
printMessage();
const arrString = ['hello', 'world'];
const converToUpperCase = (arrString) => {
    return arrString.map(item => item.toUpperCase());
};
//call function
const arrNewArray = ["apple", "orange", "banana"];
const upperCaseArray = converToUpperCase(arrNewArray);
console.log(upperCaseArray);
//write an arrow function that takes an array of number as a parameter and return a new array with
//each element  multiplied by 2
//hint:map()
const arr = [10.20, 60, 50];
const newArr = (x) => x.map((x) => x * 2);
const Result = newArr(arr);
console.log(Result);
///Task - 2
//write an arrow function that takes an array of numbers as a
