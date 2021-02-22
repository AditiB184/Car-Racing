canvas=document.getElementById("MyCanvas");
ctx=canvas.getContext("2d");

// Car1 is Green Car
Car1_width=120;
Car1_height=70;
Car1_image="GreenCar.png";
Car1_x=10;
Car1_y=410;
Car1_prev_x=10;

// random speed generation: 5 is the minimum value and 15 is maximum value
Car1_Speed=Math.floor(Math.random() * 15) + 5; 
Car2_Speed=Math.floor(Math.random() * 15) + 5;

// Car2 is Red Car

Car2_width=120;
Car2_height=70;
Car2_image="RedCar.png";
Car2_x=10;
Car2_y=100;
Car2_prev_x=10;

background_img = "";

function AddCars(){
    background_imgTag= new Image();
    background_imgTag.onload= uploadBackground;
    background_imgTag.src=background_img;
    AddGreenCar();
    AddRedCar();
}

function AddGreenCar(){
    Car1_imgTag=new Image();
    Car1_imgTag.onload=uploadCar1;
    Car1_imgTag.src=Car1_image;
}

function AddRedCar(){
    Car2_imgTag=new Image();
    Car2_imgTag.onload=uploadCar2;
    Car2_imgTag.src=Car2_image;
}


function uploadBackground(){

ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadCar1(){

ctx.drawImage(Car1_imgTag,Car1_x,Car1_y,Car1_width,Car1_height);
}

function uploadCar2(){
  
    ctx.drawImage(Car2_imgTag,Car2_x,Car2_y,Car2_width,Car2_height);
    }

window.addEventListener("keydown",MyKeydown);

function MyKeydown(e){
keyPressed = e.keyCode;
console.log(keyPressed);

// Move when Up key is pressed 
    if(keyPressed=='38'){
    up();
    console.log("up");
    }

// Move when Down key is pressed 
    if(keyPressed=='40'){
    down();
    console.log("down");
    }

// Move when Left key is pressed 
    if(keyPressed=='37'){
    left();
    console.log("left");
    }
    
// Move when Right key is pressed 
    if(keyPressed=='39'){
    car1_right();
    car2_right();
    console.log("right");
    }
    
}
// Stop moving when the any one car win

        function car1_right(){
            if (Car1_x<=700){
                Car1_prev_x=Car1_x;
                Car1_x=Car1_x+Car1_Speed;
            console.log("WhenRightPressed="+Car1_x+"-"+Car1_y);
            uploadBackground();
            uploadCar1();
            }
            if(Car1_x>700){
                console.log("The Green Car Won");
                document.getElementById('Game_Status').innerHTML="THE GREEN CAR WON!!!";
                alert('Green car won');
                AddCars;
                Car1_x=0;
                Car2_x=0;
                Car1_prev_x=Car1_x;
                return;
                }

            }

        function car2_right(){
            if (Car2_x<=700){
                Car2_prev_x=Car2_x;
            Car2_x=Car2_x+Car2_Speed;
            console.log("WhenRightPressed="+Car2_x+"-"+Car2_y);
            uploadBackground();
            uploadCar2();
                }

            if (Car2_x>700){
            console.log("The Red Car Won");
            document.getElementById('Game_Status').innerHTML="THE RED CAR WON!!!";    
            alert('Red car won');
            Car1_x=0;
            Car2_x=0;
            Car2_prev_x=Car2_x;
            AddCars;
            return;      
            }

            }

            
 

/* 
function car1_up(){
if (Car1_y>=0){
    Car1_y=Car1_y-10;
console.log("WhenUpPressed="+Car1_x+"-"+ Car1_y);
uploadBackground();
uploadCar1();
}
}
function car1_down(){
if (Car1_y<=500){
    Car1_y=Car1_y+10;
console.log("WhenDownPressed="+Car1_x+"-"+Car1_y);
uploadBackground();
uploadCar1();
}
}

function car1_left(){
if (Car1_x>=0){
    Car1_x=Car1_x-10;
console.log("WhenLeftPressed="+Car1_x+"-"+Car1_y);
uploadBackground();
uploadCar1();
}
}

function car2_up(){
if (Car2_y>=0){
    Car2_y=Car2_y-10;
console.log("WhenUpPressed="+Car2_x+"-"+ Car2_y);
uploadBackground();
uploadCar2();
}
}
function car2_down(){
if (Car2_y<=500){
    Car2_y=Car2_y+10;
console.log("WhenDownPressed="+Car2_x+"-"+Car2_y);
uploadBackground();
uploadCar1();
}
}
function car2_left(){
if (Car2_x>=0){
    Car2_x=Car2_x-10;
console.log("WhenLeftPressed="+Car2_x+"-"+Car2_y);
uploadBackground();
uploadCar2();
}
}
*/

  
