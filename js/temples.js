

const requestURL = "https://pr0gramama.github.io/templeinnandsuites/data/temples.json"

const cards = document.querySelector(".temple-cards");
const tempList = document.querySelector(".temple-list");

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject);
    let temples = jsonObject["temples"];
    temples.forEach(displayTemples);

    document.getElementById("grid-button").addEventListener("click", () => {
        temples.forEach(displayTemplesList)
        cards.innerHTML = ""
    });
    
    document.getElementById("list-button").addEventListener("click", () => {
        temples.forEach(displayTemples)
        tempList.innerHTML = ""
        
    });

    if(window.innerWidth>512&&window.innerWidth<1024) {
        temples.forEach(displayTemplesList)
        cards.innerHTML = ""
    }
})

function displayTemples(temple) {
    let card = document.createElement('section');
    
    //h2 name
    let name = document.createElement('h2');
    name.textContent = `${temple.name}`;
    card.appendChild(name);
    
    //p address
    let address = document.createElement('p');
    address.textContent = `Address: ${temple.address}`;
    card.appendChild(address);
    
    //p phone
    let phone = document.createElement('p');
    phone.textContent = `Phone: ${temple.phone}`;
    card.appendChild(phone);
    
    //website
    let services = document.createElement("p");
    services.textContent = `Services Available: ${temple.services}`;
    card.appendChild(services);

    // history
    let history = document.createElement("p");
    history.textContent = `Historic Dates: ${temple.history}`;
    card.appendChild(history);

    // schedule
    let schedules = document.createElement("p");
    schedules.textContent = `Ordinance and Session Schedule: ${temple.schedules}`;
    card.appendChild(schedules);

    //closures
    let closures = document.createElement("p");
    closures.textContent = `Closure Dates: ${temple.closures}`;
    card.appendChild(closures);

    //images
    let image = document.createElement('img');
    image.setAttribute("src", temple.image);
    image.setAttribute("alt", `${temple.name} image`);
    image.setAttribute("loading", "lazy");
    card.appendChild(image);
    
    cards.appendChild(card);
}

function removedisplayTemples () {
    let card = document.createElement("section");
    cards.prepend(card);
}

function displayTemplesList(templeList) {
    let tlist = document.createElement("table");

    //td name
    let name = document.createElement("td");
    name.textContent = `${templeList.name}`;
    tlist.appendChild(name);

    //td address
    let address = document.createElement("td");
    address.textContent = `${templeList.address}`;
    tlist.appendChild(address);

    //td phone
    let phone = document.createElement("td");
    phone.textContent = `${templeList.phone}`;
    tlist.appendChild(phone);

    //td website
    let services = document.createElement("td");
    services.textContent = `${templeList.services}`;
    tlist.appendChild(services);

    tempList.appendChild(tlist);
}
