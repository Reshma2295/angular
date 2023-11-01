//declare enum
enum printMedia{
    Newspaper="NEWSPAPER",
    Newsletter="NEWSLETTER",
    Magazine = "MAGAZINE",
    Book="BOOK"
}

//Access Enum element
console.log(printMedia.Newspaper.toLowerCase());

//Tuple
var employee: [number,string]=[100,"Sarath"];
console.log(employee);
employee[1]=employee[1].concat(" Manager");
console.log(employee);

/*
ANONYMOUS FUNCTION   --->function without having the name

var VarName=function(arguement){

}
*/