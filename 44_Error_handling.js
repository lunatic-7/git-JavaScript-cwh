console.log("ERROR Handling!");

// Pretend that a is coming from a server response
let a = "Harry Bhai!";
a = undefined;

if (a != undefined) {
    throw new Error("This is not undefined")  // To throw an error
}
else {
    console.log("This is undefined");
}

try {  // Check if any error
    // wqdiudied  // This is an arbitrary value so will throw an error.
    console.log("We are inside try block");
    functionHarry();  // This function is not defined so will throw an error.
} catch (error) {  // If error is there this catch block runs.
    console.log(error); // Simply prints the error as text.
    console.log("Are you okay!");
    console.log(error.name);  // print error name.
    console.log(error.message);  // print error message.
} finally {
    console.log("Finally we will run this.");  // This will always be executed, whether try or catch runs.
}
