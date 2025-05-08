// Refs
const loaderDiv = document.querySelector('.loader');
const noticesSection = document.getElementById('notices-section');
const noticesContainer = document.getElementById('notices-container');

// Execute functions
renderNotices();

// FUNCTIONS
async function renderNotices() {

    // Back4App server
    const serverData = await getRequest();
    const data = serverData.NoticesSection[0].content;

    if (data === '') {
        loaderDiv.textContent = '... Към момента няма нови известия ...'
        noticesSection.style.display = 'none';
        return;
    }

    const contentArr = data.split('\n').map(el => el.trim());


    const fragmentTextContent = document.createDocumentFragment();

    contentArr.forEach(el => {
        if (el === '') {
            const br = elementCreate('br');
            fragmentTextContent.appendChild(br);
        } else {
            const span = elementCreate('span', { style: 'display:block;', class: 'li' }, el);
            fragmentTextContent.appendChild(span);
        }
    });

    loaderDiv.style.display = 'none';
    noticesContainer.replaceChildren(fragmentTextContent);
    noticesSection.style.display = 'block';
}



// IMPORTS
import { getRequest } from "../GLOBAL/js-global/requests.js";
import { elementCreate } from "../GLOBAL/js-global/dom.js";
