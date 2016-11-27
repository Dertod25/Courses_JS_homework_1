//==========
//    Task 2
//    ==========
function timeInterval(start, end) {
    return end - start
};
var startRandomArray = new Date();
var Arr = new Array(1000000);
Arr.fill(1);
var random = function (num) {
    return num = Math.floor(Math.random() * ((Math.pow(2, 53) - 1) - (-(Math.pow(2, 53) - 1)))) + (-(Math.pow(2, 53) - 1))
};
var randomArray = Arr.map(random);
var endRandomArray = new Date();

var startAscendingArray = new Date();
var ascendingArray = randomArray.slice().sort(function (a, b) {
    return a - b
});
var endAscendingArray = new Date();

var startDescendingArray = new Date();
var descendingArray = ascendingArray.slice().reverse();
var endDescendingArray = new Date();

var startSumArray = new Date();
var sumArray = descendingArray.reduce(function (a, b) {
    return a + b
});
var endSumArray = new Date();
console.log("===== Task 2 =====");
console.log("RandomArray", "=", randomArray);
console.log("AscendingArray", "=", ascendingArray);
console.log("DescendingArray", "=", descendingArray);
console.log("SumArray", "=", sumArray);

console.log("TimeInterval RandomArray", ":", timeInterval(startRandomArray, endRandomArray), "ms");
console.log("TimeInterval AscendingArray", ":", timeInterval(startAscendingArray, endAscendingArray), "ms");
console.log("TimeInterval DescendingArray", ":", timeInterval(startDescendingArray, endDescendingArray), "ms");
console.log("TimeInterval  SumArray", ":", timeInterval(startSumArray, endSumArray), "ms");
//==========
//   End task 2
//    ==========


//==========
//    Task 3
//    ==========
console.log("===== Task 3 =====");

var matrixA = [60, 80, 100];
var matrixB = [40, 60, 80, 60];
var matrixFinal = [];

for (var i = 0; i < matrixA.length; i++) {
    matrixFinal.push([]);

    for (var j = 0; j < matrixB.length; j++) {

        if (matrixA[i] >= matrixB[j]) {
            matrixFinal[i][j] = matrixB[j];
            matrixA[i] = matrixA[i] - matrixB[j];
            matrixB[j] = 0;

        } else if (matrixB[j] > matrixA[i]) {
            matrixFinal[i][j] = matrixA[i];
            matrixB[j] = matrixB[j] - matrixA[i];
            matrixA[i] = 0;

        } else {
            matrixFinal[i][j] = 0;
        }
    }
    console.log(matrixFinal[i]);
}
//==========
//   End task 3
//    ==========
