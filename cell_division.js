


function getNumberOfCopies(N) {
    let result = 0;
    if (N === 1) {
        result = 2;
    }
    else {
        result = getNumberOfCopies(N -1) + N;
    }
    return result;
}

var N = 1
var result = getNumberOfCopies(N);
console.log(N, result, result == 2);

var N = 2
var result = getNumberOfCopies(N);
console.log(N, result, result == 4);

var N = 3
var result = getNumberOfCopies(N);
console.log(N, result, result == 7);

var N = 4
var result = getNumberOfCopies(N);
console.log(N, result, result == 11);

var N = 6
var result = getNumberOfCopies(N);
console.log(N, result, result == 22);

var N = 7
var result = getNumberOfCopies(N);
console.log(N, result, result == 29);

var N = 8
var result = getNumberOfCopies(N);
console.log(N, result, result == 37);
