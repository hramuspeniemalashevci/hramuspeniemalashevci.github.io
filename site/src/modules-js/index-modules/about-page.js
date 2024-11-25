import { html } from '../../lib.js';

let ctx = null;

const aboutTemplate = () => html`
    <div id="about-page">
        <article>
            <h3>История</h3>
            <p id="history">
                Православният храм "Успение на Пресвета Богородица" се намира в кв. "Малашевци", гр. София.<br>
                Построен е през 1905 г. като еднокорабна базилика. Осветен е на 15.08.1905 г. от епископ Григорий. През
                1999 г. е изцяло обновен.<br>
                Храмът разполага с три Св. престола – централен, южен –
                посветен на
                Св.Св. Константин и Елена (с храмов празник на 21 май) и северен – на Св. вмчк. Георги (с храмов празник на
                6
                май).<br>
                Иконите на иконостаса са от 1905 г. Храмът притежава чудотворна икона на Св.Богородица - Троеручица.
                <div>
                    Източник: <a href="https://www.hramove.bg/hramove/temple_55.html" target="_blank">hramove.bg</a>
                    и
                    <a href="https://opoznai.bg/view/pravoslaven-hram-uspenie-bogorodichno-malashevtzi"
                        target="_blank">opoznai.bg</a>
                </div>
            </p>
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
                    <li>- трамваи №18, №4, №3 (спирка&nbsp;0796 – „Католически гробищен парк“)</li>
                    <li>- автобуси №100, №22, №21, №20</li>
                </ul>
                * <a href="https://www.sofiatraffic.bg/bg/" target="_blank"><i>https://www.sofiatraffic.bg/bg/</i></a><br>
            </p>
    
        </article>
    
        <hr>
    
        <article>
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
                    <!-- <tr>
                                                                                                                                    <th colspan="2">***</th>
                                                                                                                                </tr> -->
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
        </article>
    </div>
`;

export function showAboutPage(ctxInput) {
    ctx = ctxInput;
    ctx.render(aboutTemplate());

    const allNavLinks = document.querySelectorAll('.nav-link');
    const currNavLink = document.getElementById('about-link');

    [...allNavLinks].forEach(el => el.classList.remove('active'));
    currNavLink.classList.add('active');
}
