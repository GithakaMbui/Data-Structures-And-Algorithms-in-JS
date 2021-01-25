const forLoop = (array) => {
    // Always declare the initial variable in the iteration
    // the let/const/var could apply depending on the loop
    // since this is an incremental loop we have to use let
    // because the value of i increases as we loop through the array
    for (let i=0; i<array.length; i++) {
        console.log(array[1])
    }
}

// Test though we should write better tests

forLoop(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])