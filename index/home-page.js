showHomePage();

// FUNCTIONS
function showHomePage() {
    // Refs
    const noticesSection = document.getElementById('notices-section');
    const noticesContainer = document.getElementById('notices-container');

    // Execute functions
    renderNotices();

    // INTERNAL FUNCTIONS
    async function renderNotices() {

        // Back4App server
        const serverData = await getRequest();
        const data = serverData.NoticesHome[0].content;

        if (data === '') {
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

        noticesContainer.replaceChildren(fragmentTextContent);
        noticesSection.style.display = 'block';
    }

}


// IMPORTS
import { getRequest } from "../GLOBAL/js-global/requests.js";
import { elementCreate } from "../GLOBAL/js-global/dom.js";
