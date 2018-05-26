
// ****** Very basic example of a Recursion: ****** //

// function basicRecursion(max, current) {
//     if(current > max) return;
//     console.log(current)
//     basicRecursion(max, current + 1)
// }

// basicRecursion(5, 1)

// ****** END OF basic example of Recursion ****** //


// ****** FIBONNACI EXAMPLE ****** //
function fibonacci(n) {
    if(n <=2 ) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

for (var i = 1; i <= 20; i++) {
    console.log(`${i}. ${fibonacci(i)}`);
}





// ****** RECURSION NOTES ****** //
/*
1.  First step is to write a basecase, basecase is needed so you dont run into "stack-overflow".  When do yu want this recursion to stop?
*/
