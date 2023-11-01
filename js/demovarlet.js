"use strict";
//var demo - Globel Scope
function exampleVar() {
    if (true) {
        var x = 10;
    }
    console.log(x);
}
//let demo = Block Scope
function examplelet() {
    if (true) {
        let y = 10;
    }
    console.log(y);
}
