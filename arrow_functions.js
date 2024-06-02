var add = (num1, num2) => num1 + num2;
var square = (num) => num * num;
var welcome = () => "Welcome to JS";
var greeting = (name) => "Hello " + name;
var power = (num1, num2) => Math.pow(num1, num2);
var evenodd=(num) => {
    if (num % 2 === 0) {
    console.log("it is even");
}
else 
{console.log("it is not even");}
}


// Function call
console.log(add(5, 6));
console.log(welcome());
console.log(square(5));
console.log(greeting("Raj"));
console.log(evenodd(5));
