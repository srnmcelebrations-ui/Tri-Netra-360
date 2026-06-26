// ===============================
// TRINETRA Dashboard
// ===============================

// Clock

function updateClock(){

const c=document.getElementById("clock");

if(c){

c.innerHTML=new Date().toLocaleTimeString();

}

}

setInterval(updateClock,1000);

updateClock();


// Demo Incident Data

const incidents=[

{
location:"Bengaluru",
incident:"🔥 Fire",
level:"HIGH",
response:"Dispatch Fire + Police + Ambulance"
},

{
location:"Mumbai",
incident:"🚗 Road Accident",
level:"MEDIUM",
response:"Dispatch Ambulance + Police"
},

{
location:"Delhi",
incident:"🏥 Medical Emergency",
level:"LOW",
response:"Dispatch Ambulance"
}

];

let i=0;


// Simulate Call

const simulate=document.getElementById("simulateCall");

if(simulate){

simulate.onclick=function(){

const item=incidents[i];

const ai=document.getElementById("aiOutput");

ai.innerHTML="📞 Incoming Emergency Call...<br><br>🤖 DRISHTI AI analysing...";

setTimeout(()=>{

ai.innerHTML=`

<h3>AI ANALYSIS COMPLETE</h3>

📍 Location : ${item.location}<br><br>

🚨 Incident : ${item.incident}<br><br>

⚠ Threat : ${item.level}<br><br>

✅ Recommended Response<br>

${item.response}

`;

const feed=document.getElementById("feed");

const p=document.createElement("p");

p.innerHTML=new Date().toLocaleTimeString()+" • "+item.incident+" • "+item.location;

feed.prepend(p);

},2000);

i++;

if(i>=incidents.length){

i=0;

}

}

}


// Dispatch Buttons

document.querySelectorAll(".dispatchBtn").forEach(btn=>{

btn.onclick=function(){

const old=this.innerHTML;

this.innerHTML="✅ Dispatched";

this.style.background="#16a34a";

setTimeout(()=>{

this.innerHTML=old;

this.style.background="#1565d8";

},2500);

}

});
