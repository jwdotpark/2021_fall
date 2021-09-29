const height = window.innerHeight;
const width = window.innerWidth;

let numbers = _.range(20);

function setup() {
	createCanvas(width, height);
	rectMode(CENTER);
	angleMode(DEGREES);
}

function draw() {
	background(220);
	translate(width / 2, height / 2);

	for (let i of numbers) {
		for (let j of numbers) {
			let x = map(i, 0, 19, -width / 2 + 20, width / 2 - 20);
			let c = map(i, 0, 19, 0, 255);
			fill(c);
			let size = map(i, 0, 19, 10, 50);
			let rot = map(i, 0, 19, 0, 90);
			push();
			translate(x, 0);
			rotate(rot);
			rect(0, 0, size);
			pop();
		}
	}
}
