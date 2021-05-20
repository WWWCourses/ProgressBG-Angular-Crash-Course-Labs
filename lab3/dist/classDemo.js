"use strict";
var Person = /** @class */ (function () {
    function Person(firstName, surName) {
        this.firstName = firstName;
        this.surName = surName;
        // no need for: this.firstName = firstName
        this.name = this.firstName + " " + this.surName;
    }
    return Person;
}());
