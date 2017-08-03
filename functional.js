$(document).ready(function(){
	/*$("button").click( function() {
		if ($('body').hasClass('black')){
			$('body').removeClass('black').addClass('white');
		}else{
			$('body').removeClass('white').addClass('black');
		}
	});*/
	
	function displayTime(){
		var currentTime = new Date();
		var hours = currentTime.getHours();
		
		var twelveHours = hours;

		if (hours > 12){
			twelveHours -= 12;
		}	

		if (twelveHours < 10){
			twelveHours = "0" + twelveHours;
		}	

		var minutes = currentTime.getMinutes();
		if (minutes < 10){
			minutes = "0" + minutes;
		}

		var seconds = currentTime.getSeconds();
		
		if (seconds < 10){
			seconds = "0" + seconds;
		}
				
		var meridiem = "AM"		
		
		if (hours > 12){
			meridiem = "PM";
		}

		var clockDiv = document.getElementById('clock');
			
		clockDiv.innerText = twelveHours + ":" + minutes + ":" + seconds + " " + meridiem;
		
	}

	
	setInterval(displayTime,1000);


});

