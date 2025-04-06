showHomePage();

const arr = [
    { "content": "test" }
]

function showHomePage() {
    // References
    const noticesSection = document.getElementById('notices-section');
    const noticesContainer = document.getElementById('notices-container');

    // Execute functions
    renderNotices();

    // FUNCTIONS
    async function renderNotices() {

        const serverData = await getRequest();

        // SoftUni server
        // const data = serverData[0].content;

        // Back4App server
        const data = serverData.NoticesArr[0].content;

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

    // DOM functions
    function elementCreate(elemType, attrObj, text) {
        const elem = document.createElement(elemType);

        for (const attr in attrObj) {
            elem.setAttribute(attr, attrObj[attr]);
        }

        elem.textContent = text;
        return elem;
    }

    // Requests functions
    async function getRequest() {
        // Back4App server
        const url = 'https://parseapi.back4app.com/classes/Notices/Gw5HTuvO1i';

        const data = await makeRequest(url, 'get');
        return data;
    }

    async function makeRequest(url, methodStr, bodyObj) {
        const options = {
            method: methodStr,
            headers: {
                'Content-Type': 'application/json',
                'X-Parse-Application-Id': 'vIKHEivxTRahTXolIJvc4DsMRbRVK5ccKWvZ7LBq',
                'X-Parse-REST-API-Key': 'lKm1iE5AXVgyZujcGH0WKgeaRPRnN5tOEpjVQUAI'
            }
        };

        if (bodyObj) {
            options['body'] = JSON.stringify(bodyObj);
        }

        try {
            const res = await fetch(url, options);

            if (res.ok !== true) {
                const error = await res.json();
                throw new Error(error);
            }

            const data = await res.json();

            return data;

        } catch (err) {
            alert(err);
        }
    }

    // ##### Notices structure #####
    /*
    <section id="notices-section">
        <h4>Известия</h4>
        <div id="notices-container">
            ... Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque pariatur possimus quasi nihil
            perferendis error corporis quam at accusamus repellendus ducimus dolores dolor laudantium ipsa sit
            excepturi omnis, incidunt aliquam quibusdam. Fugiat, distinctio porro cum, nihil cumque saepe obcaecati
            voluptates vero quaerat iusto totam. Rerum est earum similique quia repudiandae. ...
        </div>
    </section>
    */

}
