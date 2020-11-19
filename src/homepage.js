import plates from'./plates';
import about from'./about';
import contact from'./contact';


function homepage() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    navbarAndLogo();
    const blurbText = 'Here at P&S we take pride in the art of Food Presentation. Each dish is not only delicious and cooked to perfection, but is also a feast for the eyes and the hearts of art lovers.'
    const blurbDiv = document.createElement('div');
    blurbDiv.id = 'blurb';
    blurbDiv.innerHTML = blurbText;
    content.appendChild(blurbDiv)
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


export default homepage