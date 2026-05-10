// for popup of service details

let popupcontainer = document.getElementById("popup-container")
let popupgraphic = document.getElementById("popup-graphic")
let popupweb = document.getElementById("popup-web")
let popupdigital = document.getElementById("popup-digital")

function toggle(){
    popupcontainer.classList.toggle("active")
    popupweb.classList.toggle("active")
}

function togglegraphicdesign(){
    popupcontainer.classList.toggle("active")
    popupgraphic.classList.toggle("active")
}

function toggledigital(){
    popupcontainer.classList.toggle("active")
    popupdigital.classList.toggle("active")
}


// =====================================================================

let navgitaion = document.getElementById("navigation-tab")

function navcolor(){
    let scrollvalue = window.scrollY;
    console.log(scrollvalue)
    if(scrollvalue > 50){
        navgitaion.style.backgroundColor = "#2A2D33"
    }else{
        navgitaion.style.backgroundColor = "transparent"
    }
}

window.addEventListener("scroll", navcolor);


// ==============================================================================

let home = document.getElementById("nav-home")
let about = document.getElementById("nav-about")
let services = document.getElementById("nav-services")
let contact = document.getElementById("nav-contact-us")
function homecolor(){
    let scrollvalue = window.scrollY;
    console.log(scrollvalue)
    if(scrollvalue < 500){
        home.style.color = "#F75023"
        about.style.color = "white"
        services.style.color = "white"
        contact.style.color = "white"

    } else if(scrollvalue < 1200){
        home.style.color = "white"
        about.style.color = "#F75023"
        services.style.color = "white"
        contact.style.color = "white"
    } else if(scrollvalue < 1500){
    home.style.color = "white"
    about.style.color = "white"
    services.style.color = "#F75023"
    contact.style.color = "white"
}   else if(scrollvalue > 1500){
    home.style.color = "white"
    about.style.color = "white"
    services.style.color = "white"
    contact.style.color = "#F75023"
}
}

window.addEventListener("scroll", homecolor);



// =========================================================================================================================


const scriptURL = 'https://script.google.com/macros/s/AKfycbxN0xGWWh8bDzEa-L4gTHAYodr2ClEoB4lZYH4Z_k4XGCPoLysTVgfkcWlXy1_9Dzx5/exec'

const formdata= document.getElementById("form")
const form = document.forms['contact-form']


form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Thank you! your data are submitted successfully." ))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
    
})



// =====================================================================

let navitems = document.getElementById("nav-items")

function navtoggle(){
    navitems.classList.toggle("active")
}
