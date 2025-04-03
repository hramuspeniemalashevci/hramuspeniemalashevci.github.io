import { page, render } from './lib.js';
import { showHomePage } from './modules-js/index-modules/home-page.js';
import { showAboutPage } from './modules-js/index-modules/about-page.js';
import { showLinksPage } from './modules-js/index-modules/links-page.js';
import { showGalleryPage } from './modules-js/index-modules/gallery-page.js';
import { showProphetPage } from './modules-js/index-modules/prophet-page.js';
import { showVideoPage } from './modules-js/index-modules/video-page.js';

const root = document.querySelector('.page-main');

page(contextDecoration);
page('/', showHomePage);
page('/home', showHomePage);
page('/about', showAboutPage);
page('/prophet', showProphetPage);
page('/video', showVideoPage);
page('/gallery', showGalleryPage);
page('/links', showLinksPage);
page('*', showHomePage);
page.start();

// page.redirect('/home');

function contextDecoration(ctx, next) {
    ctx.render = (content) => render(content, root);
    next();
}
