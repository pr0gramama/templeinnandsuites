//get current year
const date1 = new Date();
const year = date1.getFullYear();
document.getElementById("currentyear").textContent = year;

// get the current date
const datefieldUK = document.querySelector("#currentdate");

//get last modified date
document.querySelector("#lastModified").textContent = `Last Updated: ${document.lastModified}`;


// Toggle menu - hamburger button
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

function setActive() {
  aObj = document.getElementById('nav').getElementsByTagName('a');
  for(i=0;i<aObj.length;i++) { 
    if(document.location.href.indexOf(aObj[i].href)>=0) {
      aObj[i].className='active';
    }
  }
}

window.onload = setActive;