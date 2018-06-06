var screenWidth=window.innerWidth;
var sliderWrapper=document.getElementsByClassName("slider-wrapper")[0];
var sliderLong=document.getElementsByClassName("sliderLong")[0];

var slider=document.getElementsByClassName("slider");
sliderLong.style.width=(100*slider.length)+'%';

var slideWidth=100/slider.length +'%';

var screenHeight=window.innerHeight;
sliderWrapper.style.height=screenHeight+'px';

	for(var i=0;i<5;i++){
		slider[i].style.width=slideWidth;	
	}

var current=0;
var animator=new Animator(sliderLong);
function slideShow(){	
	if(current>slider.length-2) 
		current=0;
    animator.animate(current,-5);
    current++;
	
}
var intervalId1=setInterval(slideShow,3000);

function slideShowLeft(){
	if(current==0)
	 	current=slider.length-1; 
	
	window.clearInterval(intervalId1);
	if(animator.animation==true){
		animator.stop();
		animator.finish(5);
	}
	else{
		animator.animate(current,5);
	}
	current--;
    intervalId1= setInterval(slideShow,3000);
	
}
function slideShowRight(){
	if(current==slider.length-1) 
		current=0;
	window.clearInterval(intervalId1);
	if(animator.animation==true){ 
		animator.stop();
		animator.finish(-5);
		animator.animate(current,-5);
	}
	else{
		animator.animate(current,-5);
	}

   intervalId1= setInterval(slideShow,3000);
   current++;	
	
}

