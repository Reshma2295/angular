"use strict";
class Employee {
    //constractor
    constructor(code, name) {
        //instance variable
        this.empCode = 0;
        this.empName = '';
        //custom methods
        //normal way
        //function display(){
        //  return console.log(this.empName + this.empCode
        // }
        //using arrow function
        this.display = () => console.log(this.empName + " " + this.empCode);
        this.empCode = code;
        this.empName = name;
    }
}
//Entry point
let employeeOne = new Employee(101, "Rian");
employeeOne.display();
