// access and mofify the element of multidimensional array
let grid=[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//access{row 0, column 0}
console.log(grid[0][0]); // 1
//access{row 1, column 2}
console.log(grid[1][2]); // 6  


//modify{row 2, column 1}
grid[2][1] = 88;
console.log(grid[2][1]); // 88
 console.log(grid);     // [[1, 2, 3], [4, 5, 6], [7, 88, 9]]

 console.log(grid.length); // 3 no of rows in the grid (start with 1)
 console.log(grid[0].length); // 3 no of columns in row 0  in the grid (start with 1)

 // to get last element of the grid
console.log(grid[grid.length-1][grid[0].length-1]); // 9 //this workd because all the rows have same number of columns

 const matrix=[
    [1, 2, 3],
    [4, 5, 6,'java'],
    [7, 8, 9],
    [6,9]
 ]

 console.log(matrix.length); // 4 no of rows in the matrix (start with 1)
 console.log(matrix[1].length); // 4 no of columns in row 1 in the matrix (start with 1)
 console.log(matrix[3].length); // 2 no of columns in row 3 in the matrix (start with 1)

 console.log(matrix[matrix.length -1] [matrix[3].length-1]); //9 // it works because we are accessing the last row and last column of that row, even if the number of columns is different in each row.
 let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];

for (let i = 0; i < testMatrix.length; i++) {

    for (let j = 0; j < testMatrix[i].length; j++) {
        console.log(testMatrix[i][j] + " ")
    }
    console.log(" ");

}




console.log(" --------- ");

for (let row of testMatrix) {
    for (let cell of row) {
        process.stdout.write(cell + " ")
    }
    console.log();
}
console.log(" --------- ");


// forEach
testMatrix.forEach(row => {
    row.forEach(cell => process.stdout.write(cell + " ")); // print the cell value followed by a space
    console.log();
});

console.log(" --------- ");