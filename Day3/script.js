// let
// const
// data types
// operators
// if/else
// loops

// So today we learn How to use Let 
// Let is used in JavaScript to make variable before it developers use var but it was problem
// today in modern development we mostly use let / const

let x = (5 + 2); // 7
console.log(x);

x = (5+10);
console.log(x);

let alphabet = 'A';
console.log(alphabet);

alphabet = ['A' + 'B' + 'X']
console.log(alphabet);
alphabet = ['A' , 'B' , 'X'];
console.log(alphabet);

const newArr = ['First Array'];
console.log(newArr);

// newArr = ['Second Array'];  Cannot change its value because its Const (constant variable type)

let firstDatatype = String("Habib" && `Developer`);
firstDatatype = String("Hello", 'World')

let printvalue = firstDatatype;

console.log(printvalue);

let secondDataType = Number("123+ 3 +8");
if(typeof secondDataType !== "number") 
    { console.log("Wrong " + NaN)}
    else 
        {
            console.log("Wrong" , secondDataType);
 
       
let num = 0;

do {
    console.log("Count :" + num)
    num++;
} 
while (num < 101);

let alphabet = Number(65);

do {
    console.log(String.fromCharCode(alphabet)+" = "+ String.fromCharCode(alphabet) + " ")
    alphabet++;
}
while(alphabet <= 90);