let obj =
{
    "result":true,
    "count":42,
    "more":"good"
}; // raw json 

let stringified_obj = JSON.stringify(obj);
let parseVar = JSON.parse(stringified_obj);
// parsing can only be don in a json object after it is stringyfied

console.log(parseVar);
console.log(parseVar.result);
console.log(parseVar.count);
console.log(parseVar.more);