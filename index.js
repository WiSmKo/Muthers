const rehearsePanel = document.getElementById('rehearse');
const recordPanel = document.getElementById('record');
const venuePanel = document.getElementById('venue');
const contactPanel = document.getElementById('contact');

function changeNavPanelStyle(panelID){
    panelID.addEventListener("mouseenter", function(event){
        event.target.querySelector('p').classList.remove("hidden");
    });

    panelID.addEventListener("mouseout", function(event){
        event.target.querySelector('p').classList.add("hidden");
    });
}

changeNavPanelStyle(rehearsePanel);
changeNavPanelStyle(recordPanel);
changeNavPanelStyle(venuePanel);
changeNavPanelStyle(contactPanel);