var countDownDate = new Date("Jan 1, 2021 00:00:00").getTime();
var updater = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var dd = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hh = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = dd + " : " + hh + " : " + mm + " : " + ss;
    document.getElementById("description").innerHTML = "Day : Hours : Minutes : Seconds";
    if(distance < 0){
        clearInterval(updater);
        document.getElementById("timer").innerHTML = "D:O:N:E";
    }
} , 1000);