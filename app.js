
function clock() {
	let fullDate = new Date(),
	  hours = fullDate.getHours(),
	  mins = fullDate.getMinutes(),
	  secs = fullDate.getSeconds();

	if (hours < 10) {
		hours = "0" + hours;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (secs < 10) {
		secs = "0" + secs;
	}
	document.getElementById('hour').innerHTML = hours;
	document.getElementById('minutes').innerHTML = ":" +  mins;
	document.getElementById('second').innerHTML = ":" +  secs;

}

setInterval(clock,1000);