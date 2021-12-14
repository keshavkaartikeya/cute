var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image(){
{
	fabric.image.fromURL('birthdayimage.jpg',function(img){
       block_image_object :img;
       block_image_object.scaletowidth(700);
       block_image_object.scaletowidth(510);
       block_image_object.set({
        top:0;
        left:0;
       }); 
canvas.add(block_image_object);
    })
	
}


  
function playsound(){
    x.play();
}
