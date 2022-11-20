// Submitted or coded by Jagadeesh Kumar . S, 
//     you may contact me through my email address which is jagadeesh_2k17@proton.me,
//     kindly contribute some money to my Indian UPI address which is jagadeesh-kumar@ybl .



let person;

let header = document.createElement("div");
header.setAttribute("class", "header");
header.innerHTML = "<p><b>Predict the nationality of a one word name using API</b></p>";

let sidenav = document.createElement("div");
sidenav.setAttribute("class", "sidenav");
sidenav.innerHTML = `
<p><b>Search filter</b></p>
<div class = "Search">
<input type = "text" id="search" value="" placeholder = "Type name... (default:  Michael)">
<button onclick = "search()"><i>Search</i></button>
</div><br><br>`;

let section  = document.createElement("selection");
section.setAttribute("class", "section");
document.body.append(header, sidenav, section);

function createData({country_id, probability}) {
    var container = document.createElement("div");
    container.setAttribute("class", "container");
    container.innerHTML = `
    <p>Name: ${person}</p>
    <P>Country: ${country_id}</p>
    <p>Probability: ${probability}</p><br></br>`;
    section.appendChild(container);
}

async function getData(name){
    document.querySelector(".section").innerHTML = ``;
    person = name;
    try{
        let  data = await fetch(`https://api.nationalize.io?name=${name}`);
        let info = await data.json();
        console.log(info);
        info.country.forEach((person) => createData(person));
    }
    catch (error) {

        console.log(error);
    }
}

getData("Michel");

async function search() {
    document.querySelector(".section").innerHTML = ``;
    var x = document.getElementById("search").value;
    person = x;
    try {
        let data = await fetch (`https://api.nationalize.io?name=${x}`);
        let info = await data.json();
        info.country.forEach((person) => createData(person));
    }
    catch (error) {
        console.log(error);
    }
}

// Submitted or coded by Jagadeesh Kumar . S, 
//     you may contact me through my email address which is jagadeesh_2k17@proton.me,
//     kindly contribute some money to my Indian UPI address which is jagadeesh-kumar@ybl .
