let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

for (let i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	});
}

function reset(){
//  generate all new colors
	colors = generateRandomColors(numSquares);
	//	pick a new random color from array
	pickedColor = pickColor();
	//  display new picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//	change colors of squares
	for(let i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}

		squares[i].style.background = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	//  generate all new colors
	colors = generateRandomColors(numSquares);
	//	pick a new random color from array
	pickedColor = pickColor();
	//  display new picked color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";

	messageDisplay.textContent = "";
	//	change colors of squares
	for(let i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;


for(let i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// add click listener to squares
	squares[i].addEventListener("click", function (){
		let clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = '#232323';
			messageDisplay.textContent = "Try Again";
		}
	})
	// grab color of clicked square
}

function changeColors(color){
//	loop through all squares
	for(let i = 0; i < squares.length; i ++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
//	make an array
	let arr = [];
//	add num random colors to array
	for(let i = 0; i < num; i++){
		arr.push(randomColor());
	}
// return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 to 255
	let r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 to 255
	let g = Math.floor(Math.random() * 256);
	//pick a "blue from 0 to 255
	let b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}

// Refactored code


// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
//
// 	for(let i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
//
// });

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
//
// 	for(let i = 0; i < squares.length; i++){
// 			squares[i].style.background = colors[i];
// 			squares[i].style.display = "block";
// 		}
// });