import homepage from'./homepage';
import about from'./about';
import plates from'./plates';


function createTable() {
    const openingHours = [
        ['Day', 'Hours'],
        ['Monday',      "10:00 - 18:00"],
        ['Tuesady',     "10:00 - 18:00"],
        ['Wednesday',   "10:00 - 18:00"],
        ['Thursday',    "10:00 - 18:00"],
        ['Friday',      "10:00 - 22:00"],
        ['Saturday',    "Closed"],
        ['Sunday',      "Closed"],
    ]
    const table = document.createElement('table');

    // create table headers
    const headerRow = document.createElement('tr');
    const dayHeader = document.createElement('th')
    const timeHeader = document.createElement('th')
    dayHeader.textContent = openingHours[0][0];
    timeHeader.textContent = openingHours[0][1];
    headerRow.appendChild(dayHeader);
    headerRow.appendChild(timeHeader);
    table.appendChild(headerRow);

    // create table cells
    for (let i = 1; i < openingHours.length; i++) {
        const tableRow = document.createElement('tr');
        const day = document.createElement('td');
        const time = document.createElement('td')
        day.textContent = openingHours[i][0];
        time.textContent = openingHours[i][1];
        tableRow.appendChild(day);
        tableRow.appendChild(time);
        table.appendChild(tableRow)
    }
    return table
}


function contact () {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    navbarAndLogo();
    // contact header
    const contactLogo = document.createElement('header');
    contactLogo.id = 'contactTitle';
    contactLogo.textContent = 'CONTACT';
    content.appendChild(contactLogo);
    // opening hours table 
    const openHours = createTable();
    openHours.id = 'OpeningTimes';
    content.appendChild(openHours);
    // address div
    const address = document.createElement('address')
    address.id = 'address'
    address.textContent = '30 Rue de la Belle Sauvage, Yosemite, Singapore, 4ED 3SG'
    content.appendChild(address)
}

function navbarAndLogo() {
    const content = document.querySelector('#content');

    // create the navbar
    const navbar = document.createElement('div');
    navbar.id = 'navigation';
    const navbuttons = ['HOME', 'PLATES', 'ABOUT', 'CONTACT'];
    for (let i=0; i<navbuttons.length; i++) {
        const button = document.createElement('button');
        button.id = navbuttons[i].toLowerCase();
        button.textContent = navbuttons[i];
        button.addEventListener('click', function() {
            loadTab(button.id)
        });
        navbar.appendChild(button);
    }
    content.appendChild(navbar);

    // create restaurant title
    const logo = "( PLATE > SWITCH )";
    const logoDiv = document.createElement('div');
    logoDiv.id = 'logo';
    logoDiv.textContent = logo;
    content.appendChild(logoDiv);
};

function loadTab(id) {
    const tabs = {
        home: homepage, 
        plates:plates, 
        about: about, 
        contact: contact,
    }
    const content = document.querySelector('#content');
    content.innerHTML = '';
    tabs[id]();
}

export default contact