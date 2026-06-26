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


const login=document.getElementById("login");

if(login){

login.onclick=function(){

document.getElementById("loadingScreen").style.display="flex";

setTimeout(()=>{

window.location.href="dashboard.html";

},3000);

}

}