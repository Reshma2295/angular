"use strict";
//declare enum
var printMedia;
(function (printMedia) {
    printMedia["Newspaper"] = "NEWSPAPER";
    printMedia["Newsletter"] = "NEWSLETTER";
    printMedia["Magazine"] = "MAGAZINE";
    printMedia["Book"] = "BOOK";
})(printMedia || (printMedia = {}));
//Access Enum element
console.log(printMedia.Newspaper.toLowerCase());
//Tuple
var employee = [100, "Sarath"];
console.log(employee);
employee[1] = employee[1].concat(" Manager");
console.log(employee);
/*
ANONYMOUS FUNCTION   --->function without having the name

var VarName=function(arguement){

}
*/ 
