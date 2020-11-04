import React, {useEffect} from 'react'
import Mentor1 from './../img/mentor1.png'
import Mentor2 from './../img/mentor2.png'
import Mentor3 from './../img/mentor3.png'
import Mentor4 from './../img/mentor4.png'
import Mentor5 from './../img/mentor5.png'
import Mentor6 from './../img/mentor6.png'
import Triangle from './../img/triangle.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
//problem with .scss so i imported swiper.css in index.html

SwiperCore.use([Navigation, Pagination])

export default function Mentors() {
    useEffect(()=>{
        let readMore = document.querySelectorAll('.description__read-more');
        for (let i=0; i< readMore.length; i++){
            readMore[i].addEventListener('click', ()=>{
                let fullText = readMore[i].nextSibling
                let shortText = readMore[i].previousSibling
                let readLess = readMore[i].nextSibling.nextSibling
                fullText.style.maxHeight = fullText.scrollHeight + 'px';
                readLess.style.display = 'block';
                fullText.style.transition = 'unset';
                shortText.style.display ='none'
                readMore[i].style.display='none'
            })
        }

        let readLess = document.querySelectorAll('.description__read-less');
        for (let i=0; i< readLess.length; i++){
            readLess[i].addEventListener('click', ()=>{
                let fullText = readLess[i].previousSibling
                let readMore = readLess[i].previousSibling.previousSibling
                let shorText = readLess[i].previousSibling.previousSibling.previousSibling
                shorText.style.display = 'block';
                readMore.style.display = 'block'
                fullText.style.maxHeight = null;
                readLess[i].style.display = 'none'
            })
        }
    })
    return (
        <>
            <h3 className='mentors__header'>nasi mentorzy</h3>
            <div className='mentors-mobile'>
                <div className="mentor">
                    <div className="mentor__img">
                        <img src={Mentor1} alt="Natalia Zarańska"/>
                    </div>
                    <div className="mentor__name">
                            <h2>NATALIA<br />ZARAŃSKA</h2>
                    </div>
                    <div className="mentor__description">
                        <p className='description__short'>W 2001r. zdobyła tytuł mgr pedagogiki ze specjalizacją resocjalizacja i rozpoczęła pracę jako przewodnik młodych ludzi w szkole. Był to czas niezwykły, kiedy mogła rozwijać swoje pasje, współpracować, tworzyć projekty i zdobywać wykształcenie. Ukończyła studia podyplomowe w zakresie doradztwa zawodowego, pomocy psychologicznej oraz psychologii pozytywnej.</p>
                        <p className='description__read-more'>(czytaj dalej)</p>
                        <p className='description__full'>W 2001r. zdobyła tytuł mgr pedagogiki ze specjalizacją resocjalizacja i rozpoczęła pracę jako przewodnik młodych ludzi w szkole. Był to czas niezwykły, kiedy mogła rozwijać swoje pasje, współpracować, tworzyć projekty i zdobywać wykształcenie. Ukończyła studia podyplomowe w zakresie doradztwa zawodowego, pomocy psychologicznej oraz psychologii pozytywnej.<br />Jej dzisiejszej drodze zawodowej kierunek wyznaczył coaching. Coachem została w 2017r. Ten przełomowy moment sprawił, że połączyła całą dotychczasową wiedzę, aby uczyć się od najlepszych i stworzyć przestrzeń, w której wszyscy mogą budzić swoją świadomość. W 2019r. została także facylitatorem Job Craftingu, gdyż jest przekonana, jak ważne jest poczucie sensu i zaangażowania w miejscu pracy. Jej mentorami są Paul Martinelli oraz Joe Dispenza . To od nich czerpie wiedzę, to oni nadają kierunek jej pracy. Jest trenerem, mówcą i coachem The John Maxwell Team , międzynarodowej firmy, wywodzącej się ze Stanów Zjednoczonych, obecnie największej organizacji szkolącej w zakresie przywództwa i komunikacji na świecie, posługującej się autorskimi programami opracowanymi przez dr Johna C. Maxwella. Ponadto Natalia jest właścicielką Akademii Rozwoju Prosperity w ramach, której działa szkoła Brainy oraz Akademia Lidera Still Up. Jest także współwłaścicielką firmy, w ramach której organizuje obozy naukowe. Jest prezesem Stowarzyszenia FPUNKT. Współpracuje z międzynarodową firmą Forever.<br />Została finalistką konkursu im. Ireny Sendlerowej „Za naprawianie świata”, otrzymała także Medal Komisji Edukacji Narodowej. Aktywnie współpracuje z Ośrodkiem Doskonalenia Nauczycieli w Słupsku prowadząc wykłady i warsztaty dla nauczycieli. Jest także prelegentką na konferencjach dzieląc się swoją wiedzą. Pasją Natalii są musicale, które tworzy wspólnie z młodzieżą. Jej spektakle stanęły na Stadionie Narodowym (spektakl „Szukając siebie”) a także na dużej scenie Teatru Muzycznego w Gdyni (musical „Szepty serc”).</p>
                        <p className='description__read-less'>(czytaj mniej)</p>
                    </div>
                </div>

                <div className="mentor">
                    <div className="mentor__img">
                        <img src={Mentor2} alt="Edyta Wojeciechowicz"/>
                    </div>
                    <div className="mentor__name">
                            <h2>EDYTA<br />WOJCIECHOWICZ</h2>
                    </div>
                    <div className="mentor__description">
                        <p className='description__short'>Ukończyła wyższe studia na Wydziale Prawa i Administracji Uniwersytetu Gdańskiego o dwóch specjalnościach: Administracja i Prawo i na obu tych kierunkach uzyskała tytuł magistra z wynikiem bardzo dobrym. Praca magisterska na kierunku Prawo sporządzona w ramach seminarium z Prawa Karnego Materialnego została wyróżniona.</p>
                        <p className='description__read-more'>(czytaj dalej)</p>
                        <p className='description__full'>Ukończyła wyższe studia na Wydziale Prawa i Administracji Uniwersytetu Gdańskiego o dwóch specjalnościach: Administracja i Prawo i na obu tych kierunkach uzyskała tytuł magistra z wynikiem bardzo dobrym. Praca magisterska na kierunku Prawo sporządzona w ramach seminarium z Prawa Karnego Materialnego została wyróżniona.<br /><br />Od 2008 roku doświadczenie zawodowe zdobyła podczas pracy organach ścigania, Prokuraturze i Sądzie oraz Kancelarii Adwokackiej. Po ukończeniu aplikacji adwokackiej i uzyskaniu prawa do wykonywania zawodu adwokata prowadzi indywidualną Kancelarię Adwokacką. W ramach praktyki zawodowej zajmuje się sprawami gospodarczymi, karnymi, w tym postępowaniem w sprawach nieletnich, cywilnymi, rodzinnymi z uwzględnieniem spaw o rozwód, kontakty, alimenty i inne, administracyjnymi, postępowaniem egzekucyjnym. Nadto w ramach praktyki zawodowej prowadzi badania naukowe z zakresu prawa medycznego. Zastępuję również osoby pokrzywdzone przed Wojewódzkimi Komisjami do Orzekania o zdarzeniach Medycznych.<br /><br />Wpisana na listę stałych Mediatorów Prezesa Sądu Okręgowego w Słupsku. Pełni funkcję kuratora sądowego osób pokrzywdzonych przestępstwem.  Współpracuje ze Stowarzyszeniem ,,Ovum” w Gdyni. Kancelaria corocznie bierze udział w ogólnopolskiej akcji dnia bezpłatnych porad prawnych „Adwokaci Pro Bono” oraz  współpracuje ze Stowarzyszeniami oraz Fundacjami. <br /><br />Prywatnie: biega, jest molem książkowym, zakochanym w polskim morzu i chińskiej kuchni. </p>
                        <p className='description__read-less'>(czytaj mniej)</p>
                    </div>
                </div>

                <div className="mentor">
                    <div className="mentor__img">
                        <img src={Mentor3} alt="Katarzyna Szwiec"/>
                    </div>
                    <div className="mentor__name">
                            <h2>KATARZYNA<br />SZWIEC</h2>
                    </div>
                    <div className="mentor__description">
                        <p className='description__short'>Absolwentka Liceum Medycznego w Wejherowie na kierunku pielęgniarstwo. Studiowała kosmetologię w Wyższej Szkole Zdrowia, Urody i Edukacji w Poznaniu - Wydział zamiejscowy w Gdyni.<br />Od ponad 19 lat prowadzi Studio Odnowy Biologicznej Virgo . Jest to jedno z bardziej prestiżowych gabinetów w mieście . Przez te lata ukończyła wiele szkoleń z tej dziedziny.</p>
                        <p className='description__read-more'>(czytaj dalej)</p>
                        <p className='description__full'>Absolwentka Liceum Medycznego w Wejherowie na kierunku pielęgniarstwo. Studiowała kosmetologię w Wyższej Szkole Zdrowia, Urody i Edukacji w Poznaniu - Wydział zamiejscowy w Gdyni.<br />Od ponad 19 lat prowadzi Studio Odnowy Biologicznej Virgo . Jest to jedno z bardziej prestiżowych gabinetów w mieście . Przez te lata ukończyła wiele szkoleń z tej dziedziny. Dzisiaj w gabinecie wykonywane są zabiegi podstawowej pielęgnacji kosmetycznej po lasery jak i pełną medycynę estetyczną pod okiem dermatologa z którym współpracuję. Od 4 lat wykładowca na WSB w Gdańsku - kierunek kosmetologia. Niespełna 5 lat temu podjęła decyzję budowy drugiej nogi biznesowej w marketingu sieciowym, wybierając Amerykańską Firmę Forever. Przez ten krótki czas rozbudowała międzynarodowy biznes w tej branży . Dzisiaj jako Senior Manager jest liderem wyjątkowej grupy osób w Polsce i na świecie . Od 4 lat czynnie zaangażowana w Fundacji Lęborskie Hospicjum Stacjonarne . Piastując stanowisko zastępcy przewodniczącej rady fundacji. Organizatorka wielu szkoleń biznesowych. </p>
                        <p className='description__read-less'>(czytaj mniej)</p>
                    </div>
                </div>

                <div className="mentor">
                    <div className="mentor__img">
                        <img src={Mentor4} alt="Wiktor Witkowski"/>
                    </div>
                    <div className="mentor__name">
                        <h2>WIKTOR<br />WITKOWSKI</h2>
                    </div>
                    <div className="mentor__description">
                        <p className='description__short'>Absolwent kierunku prawo na Wydziale Prawa Kanonicznego, Prawa i Administracji Katolickiego Uniwersytetu Jana Pawła II w Lublinie i absolwent Studiów Podyplomowych z zakresu Prawa Własności Intelektualnej i Prawa Nowych Technologii odbytych na Wydziale Prawa i Administracji Uniwersytetu Gdańskiego. Mediator wpisany na listę Gdyńskiego Centrum Mediacji.</p>
                        <p className='description__read-more'>(czytaj dalej)</p>
                        <p className='description__full'>Absolwent kierunku prawo na Wydziale Prawa Kanonicznego, Prawa i Administracji Katolickiego Uniwersytetu Jana Pawła II w Lublinie i absolwent Studiów Podyplomowych z zakresu Prawa Własności Intelektualnej i Prawa Nowych Technologii odbytych na Wydziale Prawa i Administracji Uniwersytetu Gdańskiego. Mediator wpisany na listę Gdyńskiego Centrum Mediacji.<br/><br/>Radca prawny wpisany na listę radców prawnych Okręgowej Izby Radców Prawnych w Gdańsku. Posiada doświadczenie w zakresie kompleksowej obsługi prawnej przedsiębiorców.  W swojej działalności koncentruje się w świadczeniu szeroko pojętej pomocy prawnej na rzecz przedsiębiorców i osób fizycznych, w tym negocjowaniu i zawieraniu ugód sądowych oraz pozasądowych.</p>
                        <p className='description__read-less'>(czytaj mniej)</p>
                    </div>
                </div>

                <div className="mentor">
                    <div className="mentor__img">
                        <img src={Mentor5} alt="Oskar Lizun"/>
                    </div>
                    <div className="mentor__name">
                        <h2>OSKAR<br />LIZUN</h2>
                    </div>
                    <div className="mentor__description">
                        <p className='description__short'>Urodził się 27 czerwca 1988 r. w Szczecinie. Przez pierwsze 7 lat mieszkał w Świdninie, a następnie w Lęborku. Przedsiębiorca z powołania, otwarty umysł, praktyk biznesu, który rozwinął firmę Direct Call od zera do ponad 100 pracowników. Współwłaściciel Pomorskiej Grupy Sprzedażowej, po godzinach DJ Oscar Lloyd w nocnych klubach, a prywatnie - mąż i ojciec.</p>
                        <p className='description__read-more'>(czytaj dalej)</p>
                        <p className='description__full'>Urodził się 27 czerwca 1988 r. w Szczecinie. Przez pierwsze 7 lat mieszkał w Świdninie, a następnie w Lęborku. Przedsiębiorca z powołania, otwarty umysł, praktyk biznesu, który rozwinął firmę Direct Call od zera do ponad 100 pracowników. Współwłaściciel Pomorskiej Grupy Sprzedażowej, po godzinach DJ Oscar Lloyd w nocnych klubach, a prywatnie - mąż i ojciec.<br /><br />Młody Oskar dorastał pod skrzydłami przedsiębiorczej mamy, która zarządzała własnymi sklepami z bielizną. Chłopak już od najmłodszych lat kształcił w sobie postawy przedsiębiorcze. Kiedy niefortunnie zepsuł ukochane Playstation, na naprawę zarobił sam, zbierając truskawki. Szybko zrozumiał, że praca daje wymierne korzyści.<br /><br />Był przeciętnym uczniem. W podstawówce miał dobre oceny, ale od gimnazjum sytuacja zaczęła się pogarszać. — Zdolny, ale leń — mówili. Szkolna ława i zamknięcie w murach schematów nie były jego mocną stroną. Zdecydowanie lepiej odnajdywał się w pracy. W zamian za „kieszonkowe” pomagał wujkom i kuzynom, a w późniejszych latach dorabiał na budowie czy był kasjerem w dużej sieci sklepów spożywczych. Po zdanej maturze przeprowadził się do Trójmiasta.<br /><br />Rozpoczął studia, które szybko porzucił. Wieczorami łączył pasję z zarobkowaniem, stojąc za konsoletą w pomorskich klubach. Za dnia pracował w telemarketingu, gdzie po 5 miesiącach awansował na team leader’a. Z firmą, która dała mu szansę na ogromny rozwój pożegnał się po 5 latach. Zapragnął zmian i rozpoczął karierę wicedyrektora w towarzystwie ubezpieczeniowym. Za branżą telemarketingu szybko zatęsknił. Gdy pojawiła się okazja, aby rozwinąć dział call center dla jednej z trójmiejskich firm - nie zastanawiał się długo. I to był sukces!<br /><br />Powoli w Oskarze kiełkowała myśl o stworzeniu własnego biznesu. Brakowało jedynie kapitału i wspólnika. Rok 2016 okazał się być tym przełomowym. Oskar stanął wówczas na czele firmy Direct Call - Pomorska Grupa Sprzedażowa Sp. z o.o. Razem ze wspólnikiem zaczynali od 4 biurek, a dzisiaj zarządzają 120 stanowiskami operacyjnymi i ponad setką pracowników. Mimo sukcesu, Oskar Lizun nie spoczywa na laurach. W trakcie pandemii wzniósł firmę na nowy, całkowicie zdalny poziom, a obecnie jest również współwłaścicielem dobrze rokującej Pomorskiej Grupy Sprzedażowej.</p>
                        <p className='description__read-less'>(czytaj mniej)</p>
                    </div>
                </div>

                <div className="mentor">
                    <div className="mentor__img">
                        <img src={Mentor6} alt="Filip Koniecki"/>
                    </div>
                    <div className="mentor__name">
                        <h2>FILIP<br />KONIECKI</h2>
                    </div>
                    <div className="mentor__description">
                        <p className='description__short'>Absolwent Wydziału Dziennikarstwa i Nauk Politycznych Uniwersytetu Warszawskiego (specjalizacja telewizyjna). W 2012 roku obronił pracę magisterską, której promotorem był prof. Jerzy Bralczyk. Analizie poddana została siatka pojęciowa słowa "luksus" i związana z nim retoryka tekstów reklamowych.</p>
                        <p className='description__read-more'>(czytaj dalej)</p>
                        <p className='description__full'>Absolwent Wydziału Dziennikarstwa i Nauk Politycznych Uniwersytetu Warszawskiego (specjalizacja telewizyjna). W 2012 roku obronił pracę magisterską, której promotorem był prof. Jerzy Bralczyk. Analizie poddana została siatka pojęciowa słowa "luksus" i związana z nim retoryka tekstów reklamowych.<br /><br />Fascynacji słowem towarzyszyła pasja do tworzenia filmów krótkometrażowych, która zaowocowała dyplomem Akademii Filmu i Telewizji w Warszawie w 2017 roku na kierunku montaż filmowy. Zrealizował etiudy w konwencji refleksyjno-satyrycznej  ("Niedowład", "Tramwaj, któremu było smutno", "Poezja", "Psychoanalityk", "Wiosna", "Homo XXI", "Deadline"), pokazujące paradoksy i absurdy ludzkiej egzystencji. "Psychonalityk" dostał się do 10 najlepszych filmów polskiej sekcji Sundance Channel Festiwal w 2015 roku. W latach 2013-2015 współtworzył magazyn wędkarski "Wędrówki z wędką", zwracający uwagę na piękno polskiej przyrody.<br /><br />Największym wyzwaniem zawodowym i przygodą życia była współpraca operatorsko-montażowa przy filmie dokumentalnym "Nieletni inżynierowie"(2019) w reżyserii Aleksandry Skowron i Hanny Polak, opowiadającym o tym, co może się stać, gdy grupa "zwykłych" nastolatków trafi na charyzmatycznego nauczyciela. Magiczna historia rozbudzania potencjału, drzemiącego w każdym młodym człowieku, została zakwalifikowana na kilka znaczących międzynarodowych festiwali filmowych (m.in. Docs Against Gravity, Satisfied Eye, Zlin Film Festiwal).</p>
                        <p className='description__read-less'>(czytaj mniej)</p>
                    </div>
                </div>
            </div>
            <div className="mentors">
                <div className="menotrs-stripe"></div>
                <Swiper
                    navigation={{
                        nextEl: '.nextNav',
                        prevEl: '.prevNav'
                }}
                    slidesPerView={1}
                    loop={true}
                    pagination={{
                        el:'.pagination',
                        clickable: true
                    }}
                    >
                    <SwiperSlide>
                        <div className="mentor">
                        <div className="menotrs-stripe"></div>
                            <div className="mentor__img">
                                <img src={Mentor1} alt="Natalia Zarańska"/>
                            </div>
                            <div className="mentor__description">
                                <div className="mentor__name">
                                        <h2>NATALIA<br />ZARAŃSKA</h2>
                                </div>
                                <p className='description__full'>w 2001r. zdobyła tytuł mgr pedagogiki ze specjalizacją resocjalizacja i rozpoczęła pracę jako przewodnik młodych ludzi w szkole. Był to czas niezwykły, kiedy mogła rozwijać swoje pasje, współpracować, tworzyć projekty i zdobywać wykształcenie. Ukończyła studia podyplomowe w zakresie doradztwa zawodowego, pomocy psychologicznej oraz psychologii pozytywnej. Jej dzisiejszej drodze zawodowej kierunek wyznaczył coaching. Coachem została w 2017r. Ten przełomowy moment sprawił, że połączyła całą dotychczasową wiedzę, aby uczyć się od najlepszych i stworzyć przestrzeń, w której wszyscy mogą budzić swoją świadomość. W 2019r. została także facylitatorem Job Craftingu, gdyż jest przekonana, jak ważne jest poczucie sensu i zaangażowania w miejscu pracy. Jej mentorami są Paul Martinelli oraz Joe Dispenza . To od nich czerpie wiedzę, to oni nadają kierunek jej pracy. Jest trenerem, mówcą i coachem The John Maxwell Team , międzynarodowej firmy, wywodzącej się ze Stanów Zjednoczonych, obecnie największej organizacji szkolącej w zakresie przywództwa i komunikacji na świecie, posługującej się autorskimi programami opracowanymi przez dr Johna C. Maxwella. Ponadto Natalia jest właścicielką Akademii Rozwoju Prosperity w ramach, której działa szkoła Brainy oraz Akademia Lidera Still Up. Jest także współwłaścicielką firmy, w ramach której organizuje obozy naukowe. Jest prezesem Stowarzyszenia FPUNKT. Współpracuje z międzynarodową firmą Forever. Została finalistką konkursu im. Ireny Sendlerowej „Za naprawianie świata”, otrzymała także Medal Komisji Edukacji Narodowej. Aktywnie współpracuje z Ośrodkiem Doskonalenia Nauczycieli w Słupsku prowadząc wykłady i warsztaty dla nauczycieli. Jest także prelegentką na konferencjach dzieląc się swoją wiedzą. Pasją Natalii są musicale, które tworzy wspólnie z młodzieżą. Jej spektakle stanęły na Stadionie Narodowym (spektakl „Szukając siebie”) a także na dużej scenie Teatru Muzycznego w Gdyni (musical „Szepty serc”).</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mentor">
                            <div className="menotrs-stripe"></div>
                            <div className="mentor__img">
                                <img src={Mentor2} alt="Edyta Wojeciechowicz"/>
                            </div>
                            <div className="mentor__description">
                            <div className="mentor__name">
                                    <h2>EDYTA<br />WOJCIECHOWICZ</h2>
                            </div>
                                <p className='description__full'>ukończyła wyższe studia na Wydziale Prawa i Administracji Uniwersytetu Gdańskiego o dwóch specjalnościach: Administracja i Prawo i na obu tych kierunkach uzyskała tytuł magistra z wynikiem bardzo dobrym. Praca magisterska na kierunku Prawo sporządzona w ramach seminarium z Prawa Karnego Materialnego została wyróżniona.<br /><br />Od 2008 roku doświadczenie zawodowe zdobyła podczas pracy organach ścigania, Prokuraturze i Sądzie oraz Kancelarii Adwokackiej. Po ukończeniu aplikacji adwokackiej i uzyskaniu prawa do wykonywania zawodu adwokata prowadzi indywidualną Kancelarię Adwokacką. W ramach praktyki zawodowej zajmuje się sprawami gospodarczymi, karnymi, w tym postępowaniem w sprawach nieletnich, cywilnymi, rodzinnymi z uwzględnieniem spaw o rozwód, kontakty, alimenty i inne, administracyjnymi, postępowaniem egzekucyjnym. Nadto w ramach praktyki zawodowej prowadzi badania naukowe z zakresu prawa medycznego. Zastępuję również osoby pokrzywdzone przed Wojewódzkimi Komisjami do Orzekania o zdarzeniach Medycznych.<br /><br />Wpisana na listę stałych Mediatorów Prezesa Sądu Okręgowego w Słupsku. Pełni funkcję kuratora sądowego osób pokrzywdzonych przestępstwem.  Współpracuje ze Stowarzyszeniem ,,Ovum” w Gdyni. Kancelaria corocznie bierze udział w ogólnopolskiej akcji dnia bezpłatnych porad prawnych „Adwokaci Pro Bono” oraz  współpracuje ze Stowarzyszeniami oraz Fundacjami. <br /><br />Prywatnie: biega, jest molem książkowym, zakochanym w polskim morzu i chińskiej kuchni. </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mentor">
                            <div className="menotrs-stripe"></div>
                            <div className="mentor__img">
                                <img src={Mentor3} alt="Katarzyna Szwiec"/>
                            </div>
                            <div className="mentor__description">
                            <div className="mentor__name">
                                    <h2>KATARZYNA<br />SZWIEC</h2>
                            </div>
                                <p className='description__full'>absolwentka Liceum Medycznego w Wejherowie na kierunku pielęgniarstwo. Studiowała kosmetologię w Wyższej Szkole Zdrowia, Urody i Edukacji w Poznaniu - Wydział zamiejscowy w Gdyni. Od ponad 19 lat prowadzi Studio Odnowy Biologicznej Virgo . Jest to jedno z bardziej prestiżowych gabinetów w mieście . Przez te lata ukończyła wiele szkoleń z tej dziedziny. Dzisiaj w gabinecie wykonywane są zabiegi podstawowej pielęgnacji kosmetycznej po lasery jak i pełną medycynę estetyczną pod okiem dermatologa z którym współpracuję. Od 4 lat wykładowca na WSB w Gdańsku - kierunek kosmetologia. Niespełna 5 lat temu podjęła decyzję budowy drugiej nogi biznesowej w marketingu sieciowym, wybierając Amerykańską Firmę Forever. Przez ten krótki czas rozbudowała międzynarodowy biznes w tej branży . Dzisiaj jako Senior Manager jest liderem wyjątkowej grupy osób w Polsce i na świecie . Od 4 lat czynnie zaangażowana w Fundacji Lęborskie Hospicjum Stacjonarne . Piastując stanowisko zastępcy przewodniczącej rady fundacji. Organizatorka wielu szkoleń biznesowych. </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mentor">
                            <div className="menotrs-stripe"></div>
                            <div className="mentor__img">
                                <img src={Mentor4} alt="Wiktor Witkowski"/>
                            </div>
                            <div className="mentor__description">
                                <div className="mentor__name">
                                    <h2>WIKTOR<br />WITKOWSKI</h2>
                                </div>
                                <p className='description__full'>absolwent kierunku prawo na Wydziale Prawa Kanonicznego, Prawa i Administracji Katolickiego Uniwersytetu Jana Pawła II w Lublinie i absolwent Studiów Podyplomowych z zakresu Prawa Własności Intelektualnej i Prawa Nowych Technologii odbytych na Wydziale Prawa i Administracji Uniwersytetu Gdańskiego. Mediator wpisany na listę Gdyńskiego Centrum Mediacji.<br/><br/>Radca prawny wpisany na listę radców prawnych Okręgowej Izby Radców Prawnych w Gdańsku. Posiada doświadczenie w zakresie kompleksowej obsługi prawnej przedsiębiorców.  W swojej działalności koncentruje się w świadczeniu szeroko pojętej pomocy prawnej na rzecz przedsiębiorców i osób fizycznych, w tym negocjowaniu i zawieraniu ugód sądowych oraz pozasądowych.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mentor">
                            <div className="menotrs-stripe"></div>
                            <div className="mentor__img">
                                <img src={Mentor5} alt="Oskar Lizun"/>
                            </div>
                            <div className="mentor__description">
                                <div className="mentor__name">
                                    <h2>OSKAR<br />LIZUN</h2>
                                </div>
                                <p className='description__full'>ur. 27 czerwca 1988 r. w Szczecinie. Przez pierwsze 7 lat mieszkał w Świdninie, a następnie w Lęborku. Przedsiębiorca z powołania, otwarty umysł, praktyk biznesu, który rozwinął firmę Direct Call od zera do ponad 100 pracowników. Współwłaściciel Pomorskiej Grupy Sprzedażowej, po godzinach DJ Oscar Lloyd w nocnych klubach, a prywatnie - mąż i ojciec.<br /><br />Młody Oskar dorastał pod skrzydłami przedsiębiorczej mamy, która zarządzała własnymi sklepami z bielizną. Chłopak już od najmłodszych lat kształcił w sobie postawy przedsiębiorcze. Kiedy niefortunnie zepsuł ukochane Playstation, na naprawę zarobił sam, zbierając truskawki. Szybko zrozumiał, że praca daje wymierne korzyści.<br /><br />Był przeciętnym uczniem. W podstawówce miał dobre oceny, ale od gimnazjum sytuacja zaczęła się pogarszać. — Zdolny, ale leń — mówili. Szkolna ława i zamknięcie w murach schematów nie były jego mocną stroną. Zdecydowanie lepiej odnajdywał się w pracy. W zamian za „kieszonkowe” pomagał wujkom i kuzynom, a w późniejszych latach dorabiał na budowie czy był kasjerem w dużej sieci sklepów spożywczych. Po zdanej maturze przeprowadził się do Trójmiasta.<br /><br />Rozpoczął studia, które szybko porzucił. Wieczorami łączył pasję z zarobkowaniem, stojąc za konsoletą w pomorskich klubach. Za dnia pracował w telemarketingu, gdzie po 5 miesiącach awansował na team leader’a. Z firmą, która dała mu szansę na ogromny rozwój pożegnał się po 5 latach. Zapragnął zmian i rozpoczął karierę wicedyrektora w towarzystwie ubezpieczeniowym. Za branżą telemarketingu szybko zatęsknił. Gdy pojawiła się okazja, aby rozwinąć dział call center dla jednej z trójmiejskich firm - nie zastanawiał się długo. I to był sukces!<br /><br />Powoli w Oskarze kiełkowała myśl o stworzeniu własnego biznesu. Brakowało jedynie kapitału i wspólnika. Rok 2016 okazał się być tym przełomowym. Oskar stanął wówczas na czele firmy Direct Call - Pomorska Grupa Sprzedażowa Sp. z o.o. Razem ze wspólnikiem zaczynali od 4 biurek, a dzisiaj zarządzają 120 stanowiskami operacyjnymi i ponad setką pracowników. Mimo sukcesu, Oskar Lizun nie spoczywa na laurach. W trakcie pandemii wzniósł firmę na nowy, całkowicie zdalny poziom, a obecnie jest również współwłaścicielem dobrze rokującej Pomorskiej Grupy Sprzedażowej.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mentor">
                            <div className="menotrs-stripe"></div>
                            <div className="mentor__img">
                                <img src={Mentor6} alt="Filip Koniecki"/>
                            </div>
                            <div className="mentor__description">
                                <div className="mentor__name">
                                    <h2>FILIP<br />KONIECKI</h2>
                                </div>
                                <p className='description__full'>absolwent Wydziału Dziennikarstwa i Nauk Politycznych Uniwersytetu Warszawskiego (specjalizacja telewizyjna). W 2012 roku obronił pracę magisterską, której promotorem był prof. Jerzy Bralczyk. Analizie poddana została siatka pojęciowa słowa "luksus" i związana z nim retoryka tekstów reklamowych.<br /><br />Fascynacji słowem towarzyszyła pasja do tworzenia filmów krótkometrażowych, która zaowocowała dyplomem Akademii Filmu i Telewizji w Warszawie w 2017 roku na kierunku montaż filmowy. Zrealizował etiudy w konwencji refleksyjno-satyrycznej  ("Niedowład", "Tramwaj, któremu było smutno", "Poezja", "Psychoanalityk", "Wiosna", "Homo XXI", "Deadline"), pokazujące paradoksy i absurdy ludzkiej egzystencji. "Psychonalityk" dostał się do 10 najlepszych filmów polskiej sekcji Sundance Channel Festiwal w 2015 roku. W latach 2013-2015 współtworzył magazyn wędkarski "Wędrówki z wędką", zwracający uwagę na piękno polskiej przyrody.<br /><br />Największym wyzwaniem zawodowym i przygodą życia była współpraca operatorsko-montażowa przy filmie dokumentalnym "Nieletni inżynierowie"(2019) w reżyserii Aleksandry Skowron i Hanny Polak, opowiadającym o tym, co może się stać, gdy grupa "zwykłych" nastolatków trafi na charyzmatycznego nauczyciela. Magiczna historia rozbudzania potencjału, drzemiącego w każdym młodym człowieku, została zakwalifikowana na kilka znaczących międzynarodowych festiwali filmowych (m.in. Docs Against Gravity, Satisfied Eye, Zlin Film Festiwal).</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-nav">
                    <div className="prevNav"><img src={Triangle} alt="Strzałki służące do przewijania"/></div>
                    <div className="pagination"></div>
                    <div className="nextNav"><img src={Triangle} alt="Strzałki służące do przewijania"/></div>
                </div>
            </div>
        </>
    )
}
