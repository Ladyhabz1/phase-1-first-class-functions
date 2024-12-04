// Function that takes a callback function as an argument and calls it
function receivesAFunction(callback) {
    callback(); // Call the callback function
}

// Function that returns a named function
function returnsANamedFunction() {
    function namedFunction() {
        console.log("This is a named function");
    }
    return namedFunction; // Return the named function
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
    return function () {
        console.log("This is an anonymous function");
    }; // Return the anonymous function
}

// Export the functions (optional, depending on the test setup)
module.exports = { receivesAFunction, returnsANamedFunction, returnsAnAnonymousFunction };