// Feature Request:

// Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

let diff_variables = [6, "hi", true, [1, 2, 3], { name: "helen" }];

console.log();

diff_variables.forEach((elem) => {
    let variable = elem;
    console.log(variable, typeof variable);
});

console.log();

// Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

let number = 7;
const num = 7;

try{
    number = 13;
    console.log(`Updated number: ${number}`);
} catch(error){
    console.log('error in let reassignment');
    console.log(error);
}
try{
    num = 27;
} catch(error){
    console.log('error in const reassignment');
    console.log(error);
}