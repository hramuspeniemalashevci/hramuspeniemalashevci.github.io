import { html } from '../../lib.js';

let ctx = null;

const homeTemplate = () => html`
    <div id="home-page">
        <article id="greeting">
            <h3>Добре дошли в сайта на храм Успение на Пресвета&nbsp;Богородица - гр.&nbsp;София, кв.&nbsp;Малашевци!
            </h3>
        </article>
    
        <section id="notices-section" style="display:none;">
            <!-- <h4>Известия</h4> -->
            <div id="notices-container">
    
            </div>
        </section>
    
        <article class="btn-container">
            <a href="./site-test/calendar.html" id="honour-btn" class="link-btn" target="_blank">Празник за деня</a>
            <a href="./site-test/schedule.html" id="schedule-btn" class="link-btn" target="_blank">Богослужения през
                седмицата</a>
        </article>
    
        <article>
            <p>Отец Сергей&nbsp;Павлов - новият предстоятел на Храма (от 01.07.2021г.)</p>
            <p>Проповед ( октомври 2021 г. )</p>
            <p>
                <iframe src="https://www.youtube.com/embed/WYpOznmRLAE" title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen="" style="max-width: 100%; max-height: 346px;" width="500" height="300" frameborder="0">
                </iframe>
            </p>
        </article>
    
    </div>
`;

export function showHomePage(ctxInput) {
    ctx = ctxInput;
    ctx.render(homeTemplate());

    const allNavLinks = document.querySelectorAll('.nav-link');
    const currNavLink = document.getElementById('home-link');

    [...allNavLinks].forEach(el => el.classList.remove('active'));
    currNavLink.classList.add('active');
}
