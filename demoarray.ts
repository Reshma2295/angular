//ARRAYS

let fruits : string[]=['Apple','Orange','Banana']
console.log(fruits);

let fruitsDemo:(string | number)[]=['Apple',100,'Orange'200,'Banana']

for(var fruit in fruitsDemo){
    console.log(fruitsDemo[fruit])

}

//SORT ARRAY
var sortedArray: string[]= fruits.sort();
console.log(sortedArray);

//DESENDING
var sortedArrayInDesc: string[]=fruits.sort((first,second)=>{
    if(first>second){
        return -1;
    }
    if(first<second){
        return 1;
    }
    return 0;

});
console.log(sortedArrayInDesc, "Sorted");

//TASK TIME :! 5 minutes
//write a funvction that takes array of numbers and returns  sum of all elements

function sumArrayElements(age :any){
    let sum=0;    //declare the variable sum to store the sum of array elements
    for(let i=0;i<age.length;i++){
    sum += age[i];
}
return sum;
}

let countofEmployees =[5,10,15,20];   //declare the array elements
let result = sumArrayElements(countofEmployees);
console.log(countofEmployees);
console.log("Sum of Array Elements",result)