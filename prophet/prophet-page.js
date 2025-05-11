let dataArr = null;
let startIndex = 0;
const videosCount = 50;

const videoContainer = document.querySelector('#video-container');
const loadMoreBtnElem = document.querySelector('#load-more-btn');
const loadedVideosElem = document.querySelector('.loaded-videos');


loadMoreBtnElem.addEventListener('click', () => {
    addVideoSectionFragment(dataArr)
    btnToBottom.style.display = 'block';
});

showProphetPage(videoContainer);

// TEMPLATES (html)
const prophetTemplate = (data) => html`
            ${data.length === 0 ? noItemsTemplate() : data.map(el => cardTemplate(el))}
`;

const cardTemplate = (data) => html`
    <article>
        <h4>${data.title}</h4>
        <p>
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
    render(html`<p class="loader" style="font-size:16px;color:rgb(192, 0, 0);">... Данните се зареждат ...</p>`, ctxInput);
    // const data = await getProphetStaticData();
    const youtubeData = await getRequest();
    const data = youtubeData.Youtube;
    dataArr = data;

    document.querySelector('.loader').remove();
    loadMoreBtnElem.style.display = 'inline-block';
    // console.log(loaderElem);

    // ! Temp unable
    // render(prophetTemplate(data), ctxInput);
    // ! 

    addVideoSectionFragment(dataArr);



}

function addVideoSectionFragment(data) {
    const totalVideosCount = dataArr.length;
    let loadedInfo = null;

    const fragment = document.createDocumentFragment();
    let lastIndex = startIndex + videosCount;

    if (lastIndex > totalVideosCount) {
        lastIndex = totalVideosCount;
    }


    // console.log('Start >>> ', startIndex + 1);
    loadedInfo = [startIndex + 1, lastIndex]

    const dataFrag = data.slice(startIndex, lastIndex).map(el => cardTemplate(el));
    startIndex = lastIndex;


    if (startIndex >= totalVideosCount) {
        startIndex = totalVideosCount;
        loadMoreBtnElem.style.display = 'none';
    }

    // console.log('End >>> ', startIndex);
    loadedVideosElem.textContent = `Заредени проповеди: ${startIndex} от ${totalVideosCount};`;

    render(dataFrag, fragment);


    fragment.appendChild(elementCreate('p', { class: 'loaded-info' }, `( от ${loadedInfo[0]} до ${loadedInfo[1]} )`));
    fragment.appendChild(elementCreate('hr'));

    videoContainer.appendChild(fragment);
}

// Event-Handlers
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

// IMPORTS
// import { getProphetStaticData } from '../GLOBAL/api/internal-api/api-internal.js';
import { elementCreate } from '../GLOBAL/js-global/dom.js';
import { html, render } from '../GLOBAL/js-global/lib.js';
import { getRequest } from '../GLOBAL/js-global/requests.js';
import { btnToBottom } from './prophet-btns.js';
