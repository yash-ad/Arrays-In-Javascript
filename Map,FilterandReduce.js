//Map, Filter & Reduce in JavaScript | JavaScript :-


//1.Addition all the values of an array:-
let arr = [ 24 , 48 , 56 ];

let arr_One = arr.map((value,index) => {
console.log(value,index);
 return value + 1
}
)
console.log(arr_One); // [25, 49, 57]


//2.Multiply all the values of an array:-

let solve_Multiply = [ 2 , 4 , 6 , 8 ];

let arr_Two = arr.map((value)=>{

    console.log(value);
    return value * 10
})

console.log(arr_Two); // [240, 480, 560]