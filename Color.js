
var numofSquares = 6;
var colors = generateRandomColors(numofSquares);
var squares= document.querySelectorAll (".squares");
 var pickedColor = pickcolor();
//var pickedColor = colors[1];
var colorDisplay = document.getElementById("colorDisplay");
var messages = document.querySelector("#messages");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
 var modeButtons = document.querySelectorAll(".mode");

 for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");	
		this.textContent === "Easy" ?	numofSquares = 3 : numofSquares = 6;
		reset();
	})
}


function reset(){
    colors = generateRandomColors(numofSquares);

    //pick a new random colors of square
    pickedColor = pickcolor();
 
    //change the color display to match new colors
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    //Change message display:
    message.textContent="";
    messages.textContent="";
    //rest background color
   
    //change color of square 
    for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
    h1.style.backgroundColor = "steelblue";
}
resetButton.addEventListener("click",function (){
    //generate all new colors
 reset();
 })
 
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++)
{
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i]
    //add click listerners to squares

    squares[i].addEventListener("click",function()
    {
        //this refers to the item that was clicked
        var clickedcolor = this.style.backgroundColor;

        //compare the color
        if (clickedcolor == pickedColor)
        {
            messages.textContent = "CORRECT!";
            message.textContent = "";
            reset.textContent = "Play Again?";
            changecolors(clickedcolor);
            h1.style.backgroundColor = clickedcolor;
        }
        else{
        this.style.backgroundColor = "black";
        message.textContent = "Try Again!";
        }
    });
  
}



// all the functions to create random colors 
//crete RBG
  function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

//create a function to make an array of random colors for rbg
  function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

//random for a picked color 
function pickcolor(){
    var random =  Math.floor(Math.random() * colors.length);
    return colors[random];
  }
  //funciton to match the color
  function changecolors(color){
    //loop through all the sqaures change into same color
    for(var i = 0; i < colors.length; i ++){
        //change each color to match given color
        squares[i].style.backgroundColor= color;
    }
}