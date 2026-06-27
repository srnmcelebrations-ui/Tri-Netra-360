// ===============================
// TRINETRA 360 - Landing Page
// ===============================

// Live Clock

function updateClock() {

    const clock = document.getElementById("clock");

    if(clock){

        clock.innerHTML = new Date().toLocaleTimeString();

    }

}

setInterval(updateClock,1000);

updateClock();


function login(){

    const id=document.getElementById("operator").value;

    const pass=document.getElementById("password").value;

    const loading=document.getElementById("loading");

    const validIDs=["TR36001","TR36002","TR36003"];

    if(validIDs.includes(id) && pass==="SJV#1"){

        loading.style.display="block";

        setTimeout(function(){

            window.location.href="dashboard.html";

        },2500);

    }

    else{

        alert("Invalid Operator ID or Password");

    }

}