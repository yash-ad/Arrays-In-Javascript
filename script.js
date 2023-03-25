//Array is a collection of data.
//[square bracket] is called literal.
//It has become a common practice to declare arrays using const and always declare with const
//In the square bracket we called elements likewise it could be string , number or boolean etc.


//Array in javascript can be of mixed data types.
const myArray = ["Y","A","S","H","R","A","J",true,false,31,1998,function myName(){console.log("Yashraj Dandnaik");}]; 
console.log(myArray);


//You can access elements of an array using indices.0,1,2 etc.
console.log(myArray[6]); 

//Array properties:- You can find the length of an element using length property.
console.log(myArray.length); 

/*Arrays are Not Constants
The keyword const is a little misleading.

It does NOT define a constant array. It defines a constant reference to an array.

Because of this, we can still change the elements of a constant array.*/
//Example is below:-
const newArray = myArray;

newArray[10] = "God";
console.log(myArray);
console.log(newArray);





////Ex.2

const fruits = ["Apple","Mango","Banana","Strawberry","Pineapple","Banana"];
console.log(fruits);

////Common Array methods with examples:-


///1.Indexof() :- This method represents as searches an element of an array and returns its position.
//In this below example as you can see in the fruits section there are two bananas element on which the postions are 2 & 5 however javascript will identify only first element to access it. 
console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf("Pineapple"));

//In this below example as you can see in the fruits section cherry is not present as an element
//And if element is not present the output will get -1.
console.log(fruits.indexOf("Cherry"));



///2.Includes() :- This method represents as checks if an array conatins a specified element,with the help of boolean value it returns either True or False.
console.log(fruits.includes("Banana"));//True,yes it is available and its represents as an element. 
console.log(fruits.includes("Chikoo"));//False,No its not since absence of an element.


///3.Push() :- This method represents adds a new element to the end of an array and returns the new length of an array.
console.log(fruits.push("Kiwi"));
console.log(fruits.push("Papaya"));
console.log(fruits);



///4.Unshift():- This method represents adds a new element to the beginning of an array and returns the new length of an array.
console.log(fruits.unshift("Mango"));
console.log(fruits.unshift("DragonFruit"));
console.log(fruits);



///5.Pop() :- This method shows as removes the last element of an array and returns the removed element.
console.log(fruits.pop());
console.log(fruits.pop());




///5.Shift() :- This method shows as removes the first element of an array and returns the removed element.
console.log(fruits.shift());
console.log(fruits.shift());



///6.Sorts() :- This method shows as sort the elements alphabetically in strings and in ascending order.
console.log(fruits.sort());



///7.Slice() :- This method shows as select the part of an array and returns a new array.

const subArray = fruits.slice(2,5) //Inclusive starting element and exclusive end element.
console.log(subArray);




















































