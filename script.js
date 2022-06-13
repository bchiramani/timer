//***************************Timer************************
var workingTimer = false;

function timerStart() {
    workingTimer = true;
    var min = document.getElementById("min").value;
    var sec = document.getElementById("sec").value;




    var time = setInterval(function() {
        if (workingTimer) {
            if (min >= 0) {
                if (sec >= 0) {
                    document.getElementById("timer").innerHTML = `${min} : ${sec--}`;

                } else {
                    min--;
                    sec = 59;
                }
            }
        }


    }, 1000, workingTimer);
}

function timerStop() {
    workingTimer = false;
}

function timerContinue() {
    workingTimer = true;
}

function timerRestart() {
    window.location.href = "timer.html";
}





//*********************Clock*****************************

function clock() {

    var actualTime = setInterval(function() {
        var myDate = new Date();
        myDate = myDate.toUTCString();

        document.getElementById("actualDate").innerHTML = myDate;
    })
}

//*********************Stopwatch*****************************

var workingStopwatch = false;
var minw = 0;
var secw = 0;

function stopwatchStart() {
    workingStopwatch = true;
    var time = setInterval(function() {

        if (workingStopwatch) {
            if (secw <= 59) {
                document.getElementById("stopwatch").innerHTML = `${minw} : ${secw++}`;

            } else {
                minw++;
                secw = 0;
            }
        }


    }, 1000, workingStopwatch);



}

function stopwatchStop() {
    workingStopwatch = false;
}

function stopwatchContinue() {
    workingStopwatch = true;

}

function stopwatchRestart() {

    window.location.href = "stopwatch.html";
}