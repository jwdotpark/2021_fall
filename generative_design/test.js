const width = window.innerWidth;
const height = window.innerHeight;

function setup() {
	createCanvas(width, height);
	rectMode(CENTER);
	noCursor();
}

function draw() {
	// console.log(frameCount)

	// background
	background(100);

	// big circle
	strokeWeight(1);
	fill("black");
	stroke(0, 255, 0);
	circle(width / 2, height / 2, 300); // pos x, y, diameter

	// small circle
	fill(255, 255, 0, 150);
	circle(frameCount, height / 2, 150);

	strokeWeight(5);
	rect(width / 2, height / 2, 400, 30); // pos x, y, width, height

	// mouse tracking
	fill(255, 100);
	noStroke();
	circle(mouseY, mouseX, 50);
	circle(width - mouseX, mouseY, 50);
}
