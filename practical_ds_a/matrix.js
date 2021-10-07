// js
// 27*22 matrix

let dimension = {
	x: 22,
	y: 27,
};

const matrix = [];

function search9() {
	for (let i = 0; i < dimension.x; i++) {
		matrix[i] = [];
		for (let j = 0; j < dimension.y; j++) {
      matrix[i][j] = 1;
      matrix[22][27] = 9;
			if (matrix[i][j] === 9) {
				console.log("9 found");
			}
		}
	}
}
search9();
console.table(matrix);
