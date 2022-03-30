

const requestURL = "https://pr0gramama.github.io/wdd230/chamber/data/data.json"

const cards = document.querySelector(".temple-cards");
const memlist = document.querySelector(".temple-list");

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject);
    let members = jsonObject["members"];
    members.forEach(displayMembers);

    document.getElementById("grid-button").addEventListener("click", () => {
        members.forEach(displayMembersList)
        cards.innerHTML = ""
    });
    
    document.getElementById("list-button").addEventListener("click", () => {
        members.forEach(displayMembers)
        memlist.innerHTML = ""
        
    });

    if(window.innerWidth>512&&window.innerWidth<1024) {
        members.forEach(displayMembersList)
        cards.innerHTML = ""
    }
})

function displayMembers(member) {
    let card = document.createElement('section');
    
    //h2 name
    let name = document.createElement('h2');
    name.textContent = `${member.name}`;
    card.appendChild(name);
    
    //p address
    let address = document.createElement('p');
    address.textContent = `${member.address}`;
    card.appendChild(address);
    
    //p phone
    let phone = document.createElement('p');
    phone.textContent = `${member.phone}`;
    card.appendChild(phone);
    
    //website
    let website = document.createElement("p");
    website.textContent = `${member.website}`;
    card.appendChild(website);

    // img
    let logo = document.createElement('img');
    logo.setAttribute("src", member.logo);
    logo.setAttribute("alt", `${member.name} Logo`);
    logo.setAttribute("loading", "lazy");
    card.appendChild(logo);
    
    cards.appendChild(card);
}

function removedisplayMembers () {
    let card = document.createElement("section");
    cards.prepend(card);
}

function displayMembersList(memberList) {
    let mlist = document.createElement("table");

    //td name
    let name = document.createElement("td");
    name.textContent = `${memberList.name}`;
    mlist.appendChild(name);

    //td address
    let address = document.createElement("td");
    address.textContent = `${memberList.address}`;
    mlist.appendChild(address);

    //td phone
    let phone = document.createElement("td");
    phone.textContent = `${memberList.phone}`;
    mlist.appendChild(phone);

    //td website
    let website = document.createElement("td");
    website.textContent = `${memberList.website}`;
    mlist.appendChild(website);

    memlist.appendChild(mlist);
}
