import React, {useEffect} from 'react'
import Mentor1 from './../img/mentor1.png'
import Mentor2 from './../img/mentor2.png'

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
                readMore.style.display = 'block';
                fullText.style.maxHeight = null;
                readLess[i].style.display = 'none'
            })
        }
    })
    
    return (
        <>
            <h3 className='mentors__header'>nasi mentorzy</h3>
            <div className='mentors'>
                <div className="mentor">
                    <div className="mentor__img">
                        <img src={Mentor1} alt="Natalia Zarańska"/>
                    </div>
                    <div className="mentor__stripe"></div>
                    <div className="mentor__description">
                        <div className="mentor__name">
                            <h2>NATALIA ZARAŃSKA</h2>
                        </div>
                        <p className='description__short'>w 2001r. zdobyła tytuł mgr pedagogiki ze specjalizacją resocjalizacja i rozpoczęła pracę jako przewodnik młodych ludzi w szkole. Był to czas niezwykły, kiedy </p>
                        <p className='description__read-more'>(czytaj dalej)</p>
                        <p className='description__full'>w 2001r. zdobyła tytuł mgr pedagogiki ze specjalizacją resocjalizacja i rozpoczęła pracę jako przewodnik młodych ludzi w szkole. Był to czas niezwykły, kiedy mogła rozwijać swoje pasje, współpracować, tworzyć projekty i zdobywać wykształcenie. Ukończyła studia podyplomowe w zakresie doradztwa zawodowego, pomocy psychologicznej oraz psychologii pozytywnej. Jej dzisiejszej drodze zawodowej kierunek wyznaczył coaching. Coachem została w 2017r. Ten przełomowy moment sprawił, że połączyła całą dotychczasową wiedzę, aby uczyć się od najlepszych i stworzyć przestrzeń, w której wszyscy mogą budzić swoją świadomość. W 2019r. została także facylitatorem Job Craftingu, gdyż jest przekonana, jak ważne jest poczucie sensu i zaangażowania w miejscu pracy. Jej mentorami są Paul Martinelli oraz Joe Dispenza . To od nich czerpie wiedzę, to oni nadają kierunek jej pracy. Jest trenerem, mówcą i coachem The John Maxwell Team , międzynarodowej firmy, wywodzącej się ze Stanów Zjednoczonych, obecnie największej organizacji szkolącej w zakresie przywództwa i komunikacji na świecie, posługującej się autorskimi programami opracowanymi przez dr Johna C. Maxwella. Ponadto Natalia jest właścicielką Akademii Rozwoju Prosperity w ramach, której działa szkoła Brainy oraz Akademia Lidera Still Up. Jest także współwłaścicielką firmy, w ramach której organizuje obozy naukowe. Jest prezesem Stowarzyszenia FPUNKT. Współpracuje z międzynarodową firmą Forever. Została finalistką konkursu im. Ireny Sendlerowej „Za naprawianie świata”, otrzymała także Medal Komisji Edukacji Narodowej. Aktywnie współpracuje z Ośrodkiem Doskonalenia Nauczycieli w Słupsku prowadząc wykłady i warsztaty dla nauczycieli. Jest także prelegentką na konferencjach dzieląc się swoją wiedzą. Pasją Natalii są musicale, które tworzy wspólnie z młodzieżą. Jej spektakle stanęły na Stadionie Narodowym (spektakl „Szukając siebie”) a także na dużej scenie Teatru Muzycznego w Gdyni (musical „Szepty serc”).</p>
                        <p className='description__read-less'>(czytaj mniej)</p>
                    </div>
                </div>

                <div className="mentor">
                    <div className="mentor__img">
                        <img src={Mentor2} alt="Natalia Zarańska"/>
                    </div>
                    <div className="mentor__stripe"></div>
                    <div className="mentor__description">
                        <div className="mentor__name">
                            <h2>EDYTA WOJCIECHOWICZ</h2>
                        </div>
                        <p className='description__short'>Edyta Wojciechowicz Adwokat - ukończyła wyższe studia na Wydziale Prawa i Administracji Uniwersytetu Gdańskiego o dwóch specjalnościach: Administracja i Prawo</p>
                        <p className='description__read-more'>(czytaj dalej)</p>
                        <p className='description__full'>Edyta Wojciechowicz Adwokat - ukończyła wyższe studia na Wydziale Prawa i Administracji Uniwersytetu Gdańskiego o dwóch specjalnościach: Administracja i Prawo i na obu tych kierunkach uzyskała tytuł magistra z wynikiem bardzo dobrym. Praca magisterska na kierunku Prawo sporządzona w ramach seminarium z Prawa Karnego Materialnego została wyróżniona. <br /> Od 2008 roku doświadczenie zawodowe zdobyła podczas pracy organach ścigania, Prokuraturze i Sądzie oraz Kancelarii Adwokackiej. Po ukończeniu aplikacji adwokackiej i uzyskaniu prawa do wykonywania zawodu adwokata prowadzi indywidualną Kancelarię Adwokacką. W ramach praktyki zawodowej zajmuje się sprawami gospodarczymi, karnymi, w tym postępowaniem w sprawach nieletnich, cywilnymi, rodzinnymi z uwzględnieniem spaw o rozwód, kontakty, alimenty i inne, administracyjnymi, postępowaniem egzekucyjnym. Nadto w ramach praktyki zawodowej prowadzi badania naukowe z zakresu prawa medycznego. Zastępuję również osoby pokrzywdzone przed Wojewódzkimi Komisjami do Orzekania o zdarzeniach Medycznych. Wpisana na listę stałych Mediatorów Prezesa Sądu Okręgowego w Słupsku. Pełni funkcję kuratora sądowego osób pokrzywdzonych przestępstwem.  Współpracuje ze Stowarzyszeniem ,,Ovum” w Gdyni. Kancelaria corocznie bierze udział w ogólnopolskiej akcji dnia bezpłatnych porad prawnych „Adwokaci Pro Bono” oraz  współpracuje ze Stowarzyszeniami oraz Fundacjami. <br />Prywatnie: biega, jest molem książkowym, zakochanym w polskim morzu i chińskiej kuchni. </p>
                        <p className='description__read-less'>(czytaj mniej)</p>
                    </div>
                </div>
            </div>
        </>
    )
}
