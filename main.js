canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d")
car2="car2.png"
background="parkingLot.jpg"
car2_width=75;
car2_height=225;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

car2_x=5;
car2_y=225;

function add() {
	background=new Image();
	background.onloaf=uploadBackground;
	background.src=parkingLot.jpg;

	car2=new Image();
	car2.onload=uploadgreencar;
	car2.src=car2.png;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag,greencar_x,greencar_y,greencar_width,greencar_height);

	
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
	if(greencar_y>=0)
	{
greencar_y=greencar_y=10;
console.log("When up arrow is pressed, x="+ greencar_x+"|y="+greencar_y);
uploadBackground();
uploadgreencar();
	}
}

function down()
{
	if(greencar_y>=10)
	{
greencar_y=greencar_y-10;
console.log("When down arrow is pressed, x="+ greencar_x+"|y="+greencar_y);
uploadBackground();
uploadgreencar();
	}
}

function left()
{
	if(greencar_x>=10)
	{
greencar_y=greencar_y=10;
console.log("When left arrow is pressed, y="+ y+"|y="+greencar_y);
uploadBackground();
uploadgreencar();
	}
}

function right()
{
	if(greencar_x>=10)
	{
greencar_y=greencar_y-10;
console.log("When right arrow is pressed, y="+ y+"|y="+greencar_y);
uploadBackground();
uploadgreencar();
	}
}
