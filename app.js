// This Switches from Light to Dark Mode
const switchMode = document.getElementById('switchMode');
const appBody = document.body;
// const getStarted = document.getElementById('getStarted');



switchMode.onclick = () =>{

    appBody.style.background = appBody.style.background !== "blue" ? "blue": "radial-gradient(rgba(0, 0, 139, 0.726))"


}

