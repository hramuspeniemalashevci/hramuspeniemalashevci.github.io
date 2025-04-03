import { html, render } from '../GLOBAL/js-global/lib.js';

const videosData = [
  {
    title: 'Храм „Успение на Пресвета Богородица“ - кв. Малашевци (поглед отгоре)',
    date: 'Nov 16, 2020',
    url: 'https://www.youtube.com/watch?v=1E0UV75dogY'
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
    title: 'СЕМЕЙСТВОТО СПОРЕД БОЖЕСТВЕНОТО И ЕВРОПЕЙСКОТО ПРАВО',
    date: 'Oct 6, 2021',
    url: 'https://www.youtube.com/watch?v=5xq74YPMg0c'
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

const root = document.querySelector('.page-main');
showVideoPage(root);

// Functions
function showVideoPage(ctxInput) {
  render(html`<p style="font-size:16px;color:rgb(192, 0, 0);">... Данните се зареждат ...</p>`, ctxInput);

  render(videoTemplate(videosData), ctxInput);
}
