// =====================================
// TRINETRA 360 Dashboard
// =====================================

// Live Clock

function updateClock(){

    const now=new Date();

    const clock=document.getElementById("clock");

    if(clock){

        clock.innerHTML=now.toLocaleTimeString("en-IN");

    }

}

setInterval(updateClock,1000);

updateClock();


// Simulate Emergency

function simulateCall(){

    alert("Emergency Simulation will be added in Version 2.0");

}