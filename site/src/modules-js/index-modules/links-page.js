import { html } from '../../lib.js';

let ctx = null;

const linksTemplate = () => html`
<div id="links-page">
    <h2>Полезни връзки</h2>

    <article>
        <ul>
            <li>
                <a href="https://bg-patriarshia.bg/" target="_blank">Българска Патриаршия: Българска Православна
                    Църква</a>
            </li>
            <li>
                <a href="https://mitropolia-sofia.org" target="_blank">Софийска Света Митрополия</a>
            </li>
            <li>
            <a href="https://bg-patriarshia.bg/bible/web/" target="_blank">Библия (сайт на БПЦ)</a>
            </li>
            <li>
                <a href="https://bg-patriarshia.bg/calendar" target="_blank">Църковен календар (сайт на БПЦ)</a>
            </li>
            <li>
            <a href="https://pravoslaven-calendar.github.io" target="_blank">Църковен календар (в GitHub)</a>
            </li>
            <li>
                <a href="http://apostolite.com/%d0%bf%d0%be%d1%81%d1%82%d0%b5%d0%bd-%d0%ba%d0%b0%d0%bb%d0%b5%d0%bd%d0%b4%d0%b0%d1%80-2025%d0%b3/"
                    target="_blank">
                    Постен календар за 2025 г.
                </a>
                <br />
                (&nbsp;Преглед/Изтегляне:
                <i><a href="/site/static/files-static/downloads/Постен-календар-2025-формат-А4.pdf" target="_blank">.pdf</a></i>
                &nbsp;/
                <i><a href="/site/static/files-static/downloads/Постен-календар-2025.png" target="_blank">.png</a></i>
                &nbsp;)
            </li>
            <li>
            <a href="http://apostolite.com/category/%d0%bf%d0%be%d1%81%d1%82%d0%b5%d0%bd-%d0%ba%d0%b0%d0%bb%d0%b5%d0%bd%d0%b4%d0%b0%d1%80/" target="_blank">Постен календар (архив)</a>
            </li>
        </ul>
    </article>

    <hr>

    <article>
        <h3>Православни видео-канали (YouTube)</h3>

        <section>
            <h4>На български език:</h4>

            <ul>
                <li>
                    <a href="https://www.youtube.com/@tvglas" target="_blank">
                        Епархийски глас (tv)
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/@radio-glas" target="_blank">
                        Епархийски глас (radio)
                    </a>
                    </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCS3ImmFAklu-KGOi7-Yn5EQ/videos" target="_blank">
                        Проповеди от Храма (канал на Георги Чуканов)
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCqq9hUGL3iavzkTbMXSHHUA/videos" target="_blank">
                        Православен видеоканал Храм (канал на Соня Анкова)
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCjmgyhlrcs0pKp9aLrAfubw" target="_blank">
                        Богоявление
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=cANTqrJ75q0&list=PLLZXTBZUCHTcn-RF-XbcWxMuh-zVtKbFx" target="_blank">
                        Седмица на православната книга
                    </a>
                </li>
            </ul>
        </section>

        <section>
            <h4>На руски език:</h4>

            <ul>
                <li>
                    <a href="https://www.youtube.com/c/%D0%95%D0%BB%D0%B5%D0%BD%D0%B0%D0%90%D0%BA%D1%81%D0%B5%D0%BD%D0%BE%D0%B2%D0%B0/videos"
                        target="_blank">
                        Елена Аксенова
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/c/%D0%94%D1%83%D1%85%D0%9F%D1%80%D0%BE%D0%BF%D0%BE%D0%B2%D0%B5%D0%B4%D0%B8%D0%9F%D1%80%D0%B0%D0%B2%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D0%B8%D0%B5/playlists"
                        target="_blank">
                        Дух Проповеди Православие
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UC5rgbnBCRSGIBt2kUcrvItg/videos" target="_blank">
                        Духовный бисер
                    </a>
                </li>
            </ul>
        </section>

    </article>

    <hr>

    <article>
        <h3>Телевизионни предавания</h3>

        <ul>
            <li>
                <a href="https://www.youtube.com/playlist?list=PLzDt0vRS18rBZkiHx1SZa5NsnKGy3A3K6" target="_blank">
                    Път към Голгота (документална поредица на БНТ - архив)
                </a>
            </li>
            <li>
                <a href="https://bnt.bg/bg/a/domt-na-vyarata" target="_blank">
                    Домът на вярата (БНТ)
                </a>
            </li>
            <li>
                <a href="https://bnt.bg/news/religiyata-dnes-283938news.html" target="_blank">
                    Религията днес (БНТ)
                </a>
            </li>
            <li>
                <a href="https://play.nova.bg/tvshow/ikonostas/52" target="_blank">
                    Иконостас (Нова телевизия)
                </a>
            </li>
        </ul>

    </article>

    <hr>

    <article>
        <h3>Радио програми и предавания</h3>

        <ul>
            <li>
                <a href="https://radio-glas.mitropolia-sofia.org/" target="_blank">
                    радио „Епархийски глас“
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/@sreshti.s.pravoslavieto" target="_blank">
                    радиопредаване „Срещи с Православието“ (с отец Методий Корчев)
                </a>
            </li>
            <li>
                <a href="https://zorana.bg/radio/%d0%bd%d0%b5%d0%b1%d0%b5-%d0%bd%d0%b0-%d0%b7%d0%b5%d0%bc%d1%8f%d1%82%d0%b0/" target="_blank">
                    радиопредаване „Небе на земята“ (с проф. Павел Павлов)
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/channel/UCPQGmDh1wiT7A1Dm6xHvZoA/videos" target="_blank">
                    радиопредаване „Светоглед“ (с Георги Тодоров)
                </a>
            </li>
            <li>
                <a href="http://www.radiokanon.com/" target="_blank">
                    радио „Канон“
                </a>
            </li>
        </ul>

    </article>

    <hr>

    <article>
        <h3>Други</h3>

        <ul>
            <li>
                <a href="/recipes.html" target="_blank">
                    Постни рецепти
                </a>
            </li>
        </ul>

    </article>

</div>
`;

export function showLinksPage(ctxInput) {
    ctx = ctxInput;
    ctx.render(linksTemplate());

    const allNavLinks = document.querySelectorAll('.nav-link');
    const currNavLink = document.getElementById('links-link');

    [...allNavLinks].forEach(el => el.classList.remove('active'));
    currNavLink.classList.add('active');
}