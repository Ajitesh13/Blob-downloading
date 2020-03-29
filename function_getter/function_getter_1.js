"use strict";
// latest is used as a function
const obj = {
    log: ['a','b','c'],
    latest: function() {
        if(this.log.length == 0) {
            return undefined;
        }
        return this.log[this.log.length - 1];
    },
}
console.log(obj.latest());

// latest will be used as a property (use of getter)
const obj1 = {
    log: ['a','b','c'],
    get latest() {
        if(this.log.length == 0) {
            return undefined;
        }
        return this.log[this.log.length - 1];
    },
}
console.log(obj1.latest);

// // use of setter
// const obj2 = {
//     log: ['a','b','c'],
//     set latest(a) {
//         if(this.log.length == 0) {
//             return undefined;
//         }
//         return this.log[this.log.length - 1];
//         console.log(a);
//     },
// }
// obj2.latest = 6;
// // console.log(obj2.latest);
