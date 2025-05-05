// import { getProphetStaticData } from '../GLOBAL/js-global/api/internal-api/api-internal.js';
import { getYoutubeData } from '../GLOBAL/js-global/api/youtubeApi/youtube.js';
import { html, render } from '../GLOBAL/js-global/lib.js';
import { getRequest } from '../GLOBAL/js-global/requests.js';

// let startIndex = 0;
// const videoCount = 3;
const root = document.querySelector('.page-main');
showProphetPage(root);

// HTML Templates
const prophetTemplate = (data) => html`
    <div id="prophet-page">
        <!-- <section id="video-section"> -->
        <!-- <h2>Проповед</h2>
        &#128279;<a href="https://www.youtube.com/channel/UCS3ImmFAklu-KGOi7-Yn5EQ/videos" target="_blank" style="font-weight:bold">(Видео в
            YouTube)</a> -->    
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

// Functions
async function showProphetPage(ctxInput) {
    render(html`<p style="font-size:16px;color:rgb(192, 0, 0);">... Данните се зареждат ...</p>`, ctxInput);
    // const data = await getProphetStaticData();
    // ! temporary unabled
    const youtubeData = await getRequest();
    const data = youtubeData.Youtube;
    // !

    // ! temporary enabled
    // const res = await fetch('../GLOBAL/js-global/api/youtubeApi/test-youtube-data.json');
    // const data = await res.json();

    // console.log('Temporary YouTube Data:');
    // console.log(data);
    // !

    render(prophetTemplate(data), ctxInput);

    // const videoContainer = document.getElementById('video-container');
    // addVideoSectionSegment(startIndex);

    function addVideoSectionSegment(startIndex) {
        const fragment = document.createDocumentFragment();
        const dataFrag = data.slice(startIndex, startIndex + videoCount).map(el => iframeTemplate(el));
        render(dataFrag, fragment);
        videoContainer.appendChild(fragment);
    }

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
