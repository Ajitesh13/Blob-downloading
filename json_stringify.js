let obj =
{
    x: 5,
    y: 6
}

let obj1 =
[
    new Number(3),
    new String('false'),
    new Boolean(false)
]

console.log(JSON.stringify(obj));
console.log(JSON.stringify(obj1));
