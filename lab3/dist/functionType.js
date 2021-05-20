"use strict";
function foo(f) {
    console.log("Greet will be called");
    f();
}
function callback() {
    console.log("Hello ");
}
foo(callback);
foo(2);
