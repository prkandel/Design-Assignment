function Animator(element)
 {
	this.el = element;
	var that = this;
	var intervalId;
	var left;
	this.animation=false;
	this.animate = function(value,step){
		var counter = 0;
		that.animation=true;
		window.requestAnimationFrame(animate);
		function animate(){
			counter++;
			
			left=counter*(step)+((-(value))*100);

			that.el.style.left =left+'%'
			intervalId = requestAnimationFrame(animate);
			if (counter >= 20){
				cancelAnimationFrame(intervalId);
				that.animation=false;
			}
		}
	}
        
			 
	this.stop = function(){
		cancelAnimationFrame(intervalId);
		that.animation=false;
	}

	this.finish = function(value) 
	{
		var interval = setInterval(function(){
			if(left%100==0)
				cancelAnimationFrame(interval);
				
			else{
				left=left+value;
				that.el.style.left=left+'%';
			}

		},1);
	}	

}