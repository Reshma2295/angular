class Employee{
    //instance variable
    empCode : number =0;
    empName : String= '';

    //constractor
    constructor(code: number,name:string){
        this.empCode=code;
        this.empName=name;
    }
    //custom methods
    //normal way

    //function display(){
    //  return console.log(this.empName + this.empCode
   // }

   //using arrow function
   display=()=>console.log(this.empName +" "+this.empCode);
}
//Entry point
let employeeOne = new Employee(101,"Rian");
employeeOne.display();


