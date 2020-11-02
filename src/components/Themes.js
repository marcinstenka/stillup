import React from 'react'
import Theme1 from './../img/section1.png'
import Theme2 from './../img/section2.png'
import Theme3 from './../img/section3.png'
import Theme4 from './../img/section4.png'
export default function Themes() {
    return (
        <div className='themes'>
            <p className='themes__heading'>Nasza Akademia została podzielona na kilka bloków tematycznych. W ramach każdego z nich nauczysz się lub wzmocnisz w sobie kompetencje, aby stać się niezawodnym przywódcą.</p>
            <div className="theme">
                <div className="theme__logo">
                    <img src={Theme1} alt="Ozdobny obrazek"/>
                </div>
                <h2 className='theme__name'><black>I.</black>Inicjatywa<br/>Inwencja<br/>Efektywność</h2>
                <p className='theme__text'>Dwóch niezwykłych mentorów Katarzyna Szwiec i Oskar Lizun. Przedsiębiorcy, którzy nauczą Cię, że biznes to połączenie logiki, wiary i wytrwałości. Wspólnie z nimi odkryjesz, jakie są korzyści i ograniczenia biznesu, zaplanujesz swoją przyszłość, odkrywając własny potencjał. Poznasz tajniki prowadzenie własnego biznesu, a co najważniejsze  - odkryjesz, że biznes to przede wszystkim ludzie. Wspólnie z nimi będziesz stawał/a się takim przywódcą, za jakim sam/a chciałbyś/abyś podążać.</p>
                <p className='theme__bold'>Ta przestrzeń zawiera 6 spotkań po 3 godziny.</p>
            </div>

            <div className="theme">
                <div className="theme__logo">
                    <img src={Theme2} alt="Ozdobny obrazek"/>
                </div>
                <h2 className='theme__name'><black>II.</black>System<br/>Kryterium<br/>Kanon</h2>
                <p className='theme__text'>Adwokat Edyta Wojciechowicz oraz radca prawny Wiktor Witkowski zaproszą Ciebie w świat prawniczych zawiłości. Pokażą Tobie, jakie są możliwe następstwa działań (co mogą oznaczać niektóre Twoje zachowania na gruncie prawa karnego oraz ich wpływ na karierę zawodową). Przedstawią konsekwencje wynikające z zaniechania odpowiedniej interakcji z urzędami oraz sądami w życiu zawodowym oraz prywatnym. Wyposażą Ciebie w wiedzę z zakresu prawa gospodarczego. Ukażą przed Tobą obowiązki przedsiębiorcy, a także ograniczenia swobody podejmowania działalności gospodarczej. Nauczą Ciebie mediacji i negocjacji, a także poruszą niezwykle ważny temat mobbingu.</p>
                <p className='theme__bold'>Ta przestrzeń zawiera 6 spotkań po 3 godziny.</p>
            </div>

            <div className="theme">
                <div className="theme__logo">
                    <img src={Theme3} alt="Ozdobny obrazek"/>
                </div>
                <h2 className='theme__name'><black>III.</black>Popularność<br/>Niezawodność<br/>Zwycięstwo</h2>
                <p className='theme__text'>Trzech artystów z branży filmowej i fotograficznej Joanna Piotrowicz, Tomasz Oczkowski oraz Filip Konecki odkryją przed Tobą świat, który odkrywają, kiedy stają po drugiej stronie kamery czy aparatu. Aby przewodzić innym, musisz nauczyć się wywierać wpływ. Prawie 100% tego kim chcemy być, co chcemy mieć i robić, dzieje się przy współudziale innych osób. I niezależnie od tego, dokąd podążysz, to Ty jesteś swoją marką osobistą. Ludzie zawsze Cię obserwują, część z nich Ciebie naśladuje,  idzie za Twoim głosem. Mamy ogromny wpływ na kształtowanie tego, jak ludzie myślą, czują i działają poprzez komunikację z nimi. Przywódca musi być pewny swoich słów, gestów i zachowań. To inni dają Tobie pozwolenie, abyś do nich mówił/a. Zatem musisz wiedzieć, jak inni Ciebie widzą i słyszą.</p>
                <p className='theme__bold'>Ta przestrzeń zawiera 7 spotkań po 3 godziny.</p>
            </div>

            <div className="theme">
                <div className="theme__logo">
                    <img src={Theme4} alt="Ozdobny obrazek"/>
                </div>
                <h2 className='theme__name'><black>IV.</black>Moc<br/>Potencjał<br/>Wiara</h2>
                <p className='theme__text'>Coach, trener psychologii pozytywnej i doradca zawodowy w jednej osobie – Natalia Zarańska - zabierze Ciebie w niezwykłą podróż, która być może czasami nie będzie podróżą łatwą. Często będzie niewygodna, będzie wymagała od Ciebie odwiedzenia miejsc, o których chciałeś/aś zapomnieć. To podróż w głąb siebie. Przywódca musi dobrze zarządzać sobą, radzić sobie z emocjami, znać własną wartość i być pewnym siebie. Znać swoje zasoby i ograniczenia. Wiedzieć, jak zarządzać zmianą. Tego wszystkiego nauczysz się w tej podróży. To odkrywanie oprzemy na 21 prawach przywództwa oraz 15 prawach rozwoju Johna Maxwella, który uczy tego, jak zostać liderem i skutecznie rozwijać swój potencjał od ponad 40 lat na całym świecie.</p>
                <p className='theme__bold'>Ta przestrzeń zawiera 6 spotkań po 3 godziny.</p>
            </div>
            <div className="stripe-orange"></div>
            <div className="suprise">
                <p className='suprise__bold'>W ramach Akademii zorganizowane będą także spotkania niespodzianki.</p>
                <p>Jak sam/a widzisz, Akademia Lidera Still Up to gwarancja odkrywania, kształtowania i wzmacniania w sobie cech przywódczych. To szyta na miarę Twoich potrzeb przestrzeń wzrastania, zwiększania świadomości i budzenia potencjału. To właśnie w tym wyjątkowym miejscu, w atmosferze zaufania, życzliwości i akceptacji będziesz szedł/szła wciąż w górę.</p>
            </div>
        </div>
    )
}
