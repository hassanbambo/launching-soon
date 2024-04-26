let launchDate = new Date("Apr 30, 2024 00: 00: 00").getTime();

let x = setInterval( function() {
    let currentTime = new Date().getTime();
    let timeGap = launchDate - currentTime;

    let days = Math.floor(timeGap / (1000*60*60*24));
    let hours = Math.floor((timeGap % (1000*60*60*24)) / (1000*60*60));
    let minutes = Math.floor((timeGap % (1000*60*60)) / (1000*60));
    let seconds = Math.floor((timeGap % (1000*60)) / (1000));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (timeGap <= 0) {
        clearInterval(x);

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }

} , 1000);