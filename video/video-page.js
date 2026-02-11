// Data
const videosData = [
  {
    title: 'Храм „Успение на Пресвета Богородица“ - кв. Малашевци (поглед отгоре)',
    date: 'Nov 16, 2020',
    url: 'https://www.youtube.com/watch?v=1E0UV75dogY'
  },
  {
    title: 'Бракът като подвижничество',
    date: 'Apr 07, 2025',
    url: 'https://www.youtube.com/watch?v=W5irBKyX8uY'
  },
  {
    title: 'Граници в общуването',
    date: 'Mar 10, 2025',
    url: 'https://www.youtube.com/watch?v=u1JM2Y9F37Y'
  },
  {
    title: 'Конфликтите в християнското семейство',
    date: 'Jan 27, 2025',
    url: 'https://www.youtube.com/watch?v=k5o89lw1CKY'
  },
  {
    title: 'Йерархията в християнското семейство',
    date: 'Nov 4, 2024',
    url: 'https://www.youtube.com/watch?v=SrKe40BDrKA'
  },
  {
    title: 'Християнското семейство',
    date: 'Sep 30, 2024',
    url: 'https://www.youtube.com/watch?v=yTGyMIKso48'
  },
  {
    title: 'Отношенията в домашната църква',
    date: 'May 27, 2024',
    url: 'https://www.youtube.com/watch?v=mk5fivHx1l8'
  },
  {
    title: 'Любов и зависимост',
    date: 'Apr 15, 2024',
    url: 'https://www.youtube.com/watch?v=fyHRqxP3LmE'
  },
  {
    title: 'Срамът при изповед',
    date: 'Sep 2, 2024',
    url: 'https://www.youtube.com/watch?v=leOYDnh2HVM'
  },
  {
    title: 'Как да преодолеем усещането на Богооставеност?',
    date: 'Aug 30, 2024',
    url: 'https://www.youtube.com/watch?v=Zy1O-4pOUNo'
  },
  {
    title: 'Човешката душа',
    date: 'Aug 26, 2024',
    url: 'https://www.youtube.com/watch?v=46sOWRjSkFQ'
  },
  {
    title: 'Венчание и начало на брачния живот',
    date: 'Mar 5, 2024',
    url: 'https://youtu.be/1br6SUf2v6k?si=C0z8koRF5V5xHsM_'
  },
  {
    title: 'Мъжът и жената преди брака',
    date: 'Feb 7, 2024',
    url: 'https://www.youtube.com/watch?v=J2OxgTzbyso'
  },
  {
    title: 'Пост, изповед, святост',
    date: 'Nov 17, 2022',
    url: 'https://www.youtube.com/watch?v=KtD2wZIjva4'
  },
  {
    title: 'Призванието ни като християни',
    date: 'Oct 10, 2021',
    url: 'https://www.youtube.com/watch?v=WYpOznmRLAE'
  },
  {
    title: 'Защо е нужно да ходим в храма?',
    date: 'Nov 21, 2021',
    url: 'https://www.youtube.com/watch?v=ldUjQ_yX0tk'
  },
  {
    title: 'Може ли в неделен ден да се работи?',
    date: 'Dec 5, 2021',
    url: 'https://www.youtube.com/watch?v=h6P4AtFErnc'
  },
  {
    title: 'Показатели за нашето духовно състояние',
    date: 'Nov 5, 2025',
    url: 'https://youtu.be/k741FldiK4g?si=scP2Rn9xoCGqMpaA'
  },
  {
    title: 'Спасява ли ни страданието',
    date: 'Nov 2, 2025',
    url: 'https://youtu.be/7-3sqCevY50?si=D7m_f-lDwkEYPfiB'
  },
  {
    title: 'Духовните болести',
    date: 'Nov 7, 2021',
    url: 'https://www.youtube.com/watch?v=HPdezbMB7Lw'
  },
  {
    title: 'Божия благодат и „другата благодат“',
    date: 'Oct 31, 2021',
    url: 'https://www.youtube.com/watch?v=KO3bHNpZl9M'
  },
  {
    title: 'За страстта на унинието',
    date: 'Jul 6, 2020',
    url: 'https://www.youtube.com/watch?v=ZOzm1ImnibY'
  },
  {
    title: 'За страстта на тщеславието',
    date: 'Jun 3, 2020',
    url: 'https://www.youtube.com/watch?v=Q0iAUe0jybk'
  },
  {
    title: 'Семейството според Божественото и европейското право',
    date: 'Oct 6, 2021',
    url: 'https://www.youtube.com/watch?v=5xq74YPMg0c'
  },
  {
    title: 'Борбата срещу Православието днес (2014 г.)',
    date: 'Jul 30, 2023',
    url: 'https://www.youtube.com/watch?v=TRU1NmAm_NI'
  }
];


// HTML Templates
const videoTemplate = (data) => html`
    <div id="video-page">
        <h2>Видео</h2>
        ${data.length === 0 ? noItemsTemplate() : data.map(el => cardTemplate(el))}
    </div>
`;

const cardTemplate = (data) => html`
    <article>
        <h4><a href="${data.url}" target="_blank">${data.title}</a></h4>
    </article>
`;

const noItemsTemplate = () => html`
    <h3 class="title no-posts-title">Страницата все още няма налично съдържание ...</h3>
`;

// Refs
const root = document.querySelector('.page-main');

// Execution
showVideoPage(root);

// Functions
function showVideoPage(ctxInput) {
  render(html`<p class="loader">... Данните се зареждат ...</p>`, ctxInput);

  render(videoTemplate(videosData), ctxInput);
}


// IMPORTS
import { html, render } from '../GLOBAL/js-global/lib.js';
