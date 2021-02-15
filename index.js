const homeNavPanel = document.getElementById('rehearse');

homeNavPanel.addEventListener("mouseenter", function(event){
    event.target.style.backgroundColor = "rgba(255,255,255,0.7)";
    event.target.style.color="rgb(0,0,0)";
});

homeNavPanel.addEventListener("mouseout", function(event){
    event.target.style.backgroundColor = "rgba(255,255,255,0.0)";
    event.target.style.color="rgb(255,255,255)";
});