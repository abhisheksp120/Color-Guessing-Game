var mode = 6;
var colors = generatecol(mode);
var squares = document.querySelectorAll(".square");
var pickedColor = colors[pickColor(mode)];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h3 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyButton = document.querySelector('#easy');
var hardButton = document.querySelector('#hard');

easyButton.addEventListener("click", function(){
	hardButton.classList.remove("selected");
	this.classList.add("selected");
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	h3.style.backgroundColor = "steelblue";
	mode = 3;
	colors = generatecol(mode);
	pickedColor = colors[pickColor(mode)];
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
});

hardButton.addEventListener("click", function(){
	this.classList.add("selected");
	easyButton.classList.remove("selected");
	messageDisplay.textContent = "";
	h3.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	mode = 6;
	colors = generatecol(mode);
	pickedColor = colors[pickColor(mode)];
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function(){ 
	colors = generatecol(mode);
	this.textContent = "New Colors";
	pickedColor = colors[pickColor(mode)];
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h3.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){

	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		if(this.style.backgroundColor == pickedColor){
			changeColors(this.style.backgroundColor);
			resetButton.textContent = "Play Again?";
			messageDisplay.textContent = "Correct !";
			h3.style.backgroundColor = this.style.backgroundColor;
		} 
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color){
	for(var i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(num){
	return Math.floor((Math.random() * num));
}

function generatecol(num){
	var arr = [];

	for(var i = 0;i < num;i++){
		arr.push("rgb("+pickColor(256)+", "+pickColor(256)+", "+pickColor(256)+")");
	}
	return arr;
}
