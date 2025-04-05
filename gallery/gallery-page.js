import { html } from '../../lib.js';

let ctx = null;

const galleryTemplate = () => html`
    <div id="gallery-page">
        <h2>Галерия</h2>
    
        <p>
            <a href="/site/static/files-static/images/Uspenie-Bogorodica.png" target="_blank"><img id="img-header"
                    src="/site/static/files-static/images/Uspenie-Bogorodica.png"
                    alt="Икона, посветена на Успението на Пресвета Богородица" width="50%" height="50%"></a>
        </p>
    
        <p>
            <a href="/site/static/files-static/images/Uspenie_Bogomateri_1.jpg" target="_blank"><img id="img-header"
                    src="/site/static/files-static/images/Uspenie_Bogomateri_1.jpg"
                    alt="Икона, посветена на Успение Богородично" width="50%" height="50%"></a>
        </p>
    </div>
`;

export function showGalleryPage(ctxInput) {
    ctx = ctxInput;
    ctx.render(galleryTemplate());

    const allNavLinks = document.querySelectorAll('.nav-link');
    const currNavLink = document.getElementById('gallery-link');

    [...allNavLinks].forEach(el => el.classList.remove('active'));
    currNavLink.classList.add('active');
}
