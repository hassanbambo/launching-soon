let launchDate = new Date("May 31, 2024 00: 00: 00").getTime();

let x = setInterval( function() {
    let currentTime = new Date().getTime();
    let timeGap = launchDate - currentTime;

    let days = Math.floor(timeGap / (1000*60*60*24));
    let hours = Math.floor((timeGap % (1000*60*60*24)) / (1000*60*60));
    let minutes = Math.floor((timeGap % (1000*60*60)) / (1000*60));
    let seconds = Math.floor((timeGap % (1000*60)) / (1000));
	
	document.getElementById("days").innerHTML = days;
    days < 10 ? document.getElementById("days").innerHTML = "0" + days : false;
	
	document.getElementById("hours").innerHTML = hours;
    hours < 10 ? document.getElementById("hours").innerHTML = "0" + hours : false;
	
	document.getElementById("minutes").innerHTML = minutes;
    minutes < 10 ? document.getElementById("minutes").innerHTML = "0" + minutes : false;
	
	document.getElementById("seconds").innerHTML = seconds;
    seconds < 10 ? document.getElementById("seconds").innerHTML = "0" + seconds : false;

    if (timeGap <= 0) {
        clearInterval(x);

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }

} , 1000);