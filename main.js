//Create a reference for canvas 
canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d");
//Give specific height and width to the car image

carHeight = 200
carWidth = 75
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
carX = 5

carY = 225


function add(){
    background_img = new Image()
    background_img.src = background_image
    background_img.onload = uploadBackground

    greencar_img = new Image()
    greencar_img.src = greencar_image
    greencar_img.onload = uploadgreencar
}
function uploadBackground(){
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height)
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_img, carX, carY, carWidth, carHeight)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(carY >= 0){
        carY = carY - 10
        uploadBackground()
        uploadgreencar()
    }
}

function down()
{
	if(carY <= 0){
        carY = carY + 10
        uploadBackground()
        uploadgreencar()
    }
}

function left()
{
	if(carX >= 0){
        carX = carX - 10
        uploadBackground()
        uploadgreencar()
    }
}

function right()
{
	if(carX <= 0){
        carX = carX + 10
        uploadBackground()
        uploadgreencar()
    }
}
