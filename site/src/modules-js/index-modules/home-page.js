import { html } from '../../lib.js';

let ctx = null;

const homeTemplate = () => html`
    <div id="home-page">
        <article id="greeting">
            <h2>Добре дошли в сайта на храм Успение на Пресвета&nbsp;Богородица - гр.&nbsp;София, кв.&nbsp;Малашевци!
            </h2>
        </article>
    
        <article class="btn-container">
            <a href="/calendar.html" id="honour-btn" class="link-btn" target="_blank">Празник за деня</a>
            <a href="/schedule.html" id="schedule-btn" class="link-btn" target="_blank">Богослужения през
                седмицата</a>
        </article>
    
        <section id="notices-section" style="display:none;">
            <!-- ##### Известия ##### -->
            <div id="notices-container">
    
            </div>
        </section>
    
    
        <article id="home-img-article">
            <a href="/site/static/files-static/images/hram-cover.jpeg" target="_blank"><img id="img-home"
                    src="/site/static/files-static/images/hram-cover.jpeg"
                    alt="Храм Успение на Пресвета Богородица - гр. София, кв. Малашевци"></a>
    
        </article>
    
        <hr>
    
        <article>
            <h3>Контакти</h3>
            <address>
                <p id="about-address">
                    Адрес: София&nbsp;1225, кв.&nbsp;Малашевци, ул.&nbsp;„Училищна“ № 8<br>
                    Работно време: 07:30 - 18:00 (всеки ден)<br>
                    Телефон в храма: 02&nbsp;/&nbsp;936&nbsp;75&nbsp;59
                </p>
                <p>
                    Предстоятел: йерей Сергей&nbsp;Павлов
                    <div>
                        тел.&nbsp;0896&nbsp;820&nbsp;590; 0882&nbsp;725&nbsp;777
                    </div>
                </p>
            </address>
            <p>
                Градски транспорт:
                <ul>
                    <li>- трамваи №18, №4, №3 (спирка&nbsp;0797 – „Католически гробищен парк“)</li>
                    <li>- автобуси №100, №22, №21, №20</li>
                </ul>
                * <a href="https://www.sofiatraffic.bg/bg/" target="_blank"><i>https://www.sofiatraffic.bg/bg/</i></a><br>
            </p>
    
        </article>
    
        <!-- <hr>
        
            <article id="bank-article">
                <h3>Банкова сметка</h3>
                <a href="/site/static/files-static/images/bank-account-uspenie.jpg" target="_blank">снимка</a><br>
        
                <div id="table-div">
                    <table>
                        <tr>
                            <th>Име на клиент:</th>
                            <td>ЦЪРК. НАСТ. ХРАМ УСПЕНИЕ НА ПР.&nbsp;БОГОРОДИЦА</td>
                        </tr>
                        <tr>
                            <th>ЕГН:</th>
                            <td>130949320</td>
                        </tr>
                        <tr>
                            <th>Адрес:</th>
                            <td>СОФИЯ КВ.&nbsp;МАЛАШЕВЦИ</td>
                        </tr>
                        <tr>
                            <th>Банка:</th>
                            <td>ДСК</td>
                        </tr>
                        <tr>
                            <th>Приложение/Сметка:</th>
                            <td>02/0000000028615557</td>
                        </tr>
                        <tr>
                            <th>Валута:</th>
                            <td>BGN</td>
                        </tr>
                        <tr>
                            <th>IBAN:</th>
                            <td>BG98STSA93000028615557</td>
                        </tr>
                        <tr>
                            <th>BIC:</th>
                            <td>STSABGSF</td>
                        </tr>
                    </table>
                </div>
            </article> -->
    
    </div>
`;

export function showHomePage(ctxInput) {
    ctx = ctxInput;
    ctx.render(homeTemplate());

    const allNavLinks = document.querySelectorAll('.nav-link');
    const currNavLink = document.getElementById('home-link');

    [...allNavLinks].forEach(el => el.classList.remove('active'));
    currNavLink.classList.add('active');

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
        // SoftUni server
        // const url = 'http://localhost:3030/jsonstore/notices/storage';

        // Back4App server
        const url = 'https://parseapi.back4app.com/classes/Notices/Eah1g4UkkD';

        const data = await makeRequest(url, 'get');
        return data;
    }

    async function makeRequest(url, methodStr, bodyObj) {
        const options = {
            method: methodStr,
            headers: {
                'Content-Type': 'application/json',
                'X-Parse-Application-Id': 'wlZezVWuR0xG3VDM2SPqvEuSPE66bKspj5iKigGL',
                'X-Parse-REST-API-Key': 'a0cX24dr7zCbVXCMWWmC8OQrDtKXvBsQ4AOd4bNA'
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
