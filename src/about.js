import homepage from'./homepage';
import plates from'./plates';
import contact from'./contact';



const about = () => {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    navbarAndLogo();
    const aboutUS = 
    'Plate and Switch is the brainchild of reclusive genius Abraham P. J Solstratmoreson Jr. When he first landed in this country his shock and dismay when encountering western style plating drove him to insanity. His family, startled by his almost instantaneous deteroioration into mania abandoned him to fend for himself. Abraham found himself scrounging for leftovers outside of high class restaurants and in his madness using whatever local materials he could find to plate and present the meager food to his fellow destitute nomads. When I walked past his cardboard box one day I saw his creations and thought to myself that there is a great idea for a restaurant there. And that is how Plate and Switch was born!' ;
    const aboutDiv = document.createElement('p');
    aboutDiv.id = 'blurb';
    aboutDiv.textContent = aboutUS;
    content.appendChild(aboutDiv)
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
export default about