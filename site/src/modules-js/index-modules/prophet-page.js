import { getProphetStaticData } from '../../api/internal-api/data-internal.js';
import { html, render } from '../../lib.js';

let ctx = null;
// let startIndex = 0;
// const videoCount = 3;

const prophetTemplate = (data) => html`
    <div id="prophet-page">
        <!-- <section id="video-section"> -->
        <h2>Проповед</h2>
        <a href="https://www.youtube.com/channel/UCS3ImmFAklu-KGOi7-Yn5EQ/videos" target="_blank">(видео в
            youtube)</a>
        <div id="video-container">
            ${data.length === 0 ? noItemsTemplate() : data.map(el => cardTemplate(el))}
            <!-- ${data.length === 0 ? noItemsTemplate() : null} -->
        </div>
        <!-- </section> -->
    </div>
`;

const cardTemplate = (data) => html`
    <article>
        <h4>${data.title}</h4>
        <p>
            <!-- ${iframeTemplate(data.videoId)} -->
            <img @click=${onImageClick} src="${data.thumbnail.url}" class="prophet-card" data-id="${data.videoId}">
        </p>
    </article>
`;

const iframeTemplate = (videoId) => html`
    <iframe class="iframe-youtube" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""
        style="max-width: 100%; max-height: 346px;" width="500" height="300" frameborder="0">
    </iframe>
`;

const noItemsTemplate = () => html`
    <h3 class="title no-posts-title">Страницата все още няма налично съдържание ...</h3>
`;

export async function showProphetPage(ctxInput) {
    ctx = ctxInput;

    ctx.render(html`<p style="font-size:16px;color:black;">Зареждане ...</p>`);
    const data = await getProphetStaticData();

    ctx.render(prophetTemplate(data));

    // const videoContainer = document.getElementById('video-container');
    // addVideoSectionSegment(startIndex);

    function addVideoSectionSegment(startIndex) {
        const fragment = document.createDocumentFragment();
        const dataFrag = data.slice(startIndex, startIndex + videoCount).map(el => iframeTemplate(el));
        render(dataFrag, fragment);
        videoContainer.appendChild(fragment);
    }

    const allNavLinks = document.querySelectorAll('.nav-link');
    const currNavLink = document.getElementById('prophet-link');

    [...allNavLinks].forEach(el => el.classList.remove('active'));
    currNavLink.classList.add('active');
}

function onImageClick(ev) {
    const target = ev.target;
    const videoId = target.dataset.id;
    const parag = target.parentElement;
    const iframe = iframeTemplate(videoId);

    console.log(videoId);

    parag.replaceChildren('');
    // render(html`<p style="font-size:50px;color:black;">Зареждане ...</p>`, parag);
    render(iframe, parag);
}
