import React from 'react'
import StillUp from './../img/stillup.png'
import LogoMobile from './../img/logoMobile.jpg'
import Logo from './../img/logo.png'
import DotsTopBar from './../img/dots1.png'
import DotsMobile from './../img/dotsMobile.png'
export default function TopBar() {
    return (
        <>
    <div className="topBar-container">
        <div className='topBar'>
            <div className="gray-bg"></div>
            <div className="topBar__up-container">
                <div className="topBar__up">
                    <div className="topBar__header">
                        <div className="topBar__header-logo">
                            <img src={StillUp} alt="Still Up"/>
                        </div>
                        <div className='stripe-blue'></div>
                        <h1>AKADEMIA LIDERA</h1>
                    </div>
                    <div className="topBar__description">
                        <p>... to wyjątkowa i jednocześnie nietypowa przestrzeń dla młodych ludzi, którzy chcą w swoim życiu osiągnąć sukces. Jeśli masz ukończone 15 lat,  możesz wstąpić w szeregi Akademii i zostać słuchaczem, prowadzonym przez mentorów z wielu branż zawodowych, którzy przekażą Tobie swoją wiedzę i doświadczenie. To jedyna taka szkoła w Lęborku, której program został napisany przez grupę przedsiębiorców, aby nauczyć Ciebie wszystkich potrzebnych kompetencji w zakresie przywództwa, a także pomóc Tobie odkryć i rozwinąć Twój potencjał. Przywództwo to wpływ, a nie pozycja zawodowa czy stanowisko.</p>
                        <p>Przywództwo to ludzie. Bycia dobrym i skutecznym liderem można się nauczyć. Jednak wszystko zaczyna się od Ciebie. Najpierw to Ty musisz stać się przywódcą dla siebie samego/samej, nauczyć się zarządzać sobą. Wyposażyć się w zestaw narzędzi, aby w przyszłości inni szli za Twoimi słowami. Szli nie dlatego, że muszą, ale dlatego, że chcą.</p>
                        <h2>Wszystko zaczyna się od bowiem Ciebie.</h2>
                    </div>
                </div>
                <div className="topBar__logo-mobile">
                    <img src={LogoMobile} alt="Logo projektu Still Up"/>
                </div>
                <div className="topBar__logo">
                    <img src={Logo} alt="Logo projektu Still Up"/>
                </div>
            </div>
            <div className="topBar__description-mobile">
                <p>
                    ... to wyjątkowa i jednocześnie nietypowa przestrzeń dla młodych ludzi, którzy chcą w swoim życiu osiągnąć sukces. Jeśli masz ukończone 15 lat,  możesz wstąpić w szeregi Akademii i zostać słuchaczem, prowadzonym przez mentorów z wielu branż zawodowych, którzy przekażą Tobie swoją wiedzę i doświadczenie. To jedyna taka szkoła w Lęborku, której program został napisany przez grupę przedsiębiorców, aby nauczyć Ciebie wszystkich potrzebnych kompetencji w zakresie przywództwa, a także pomóc Tobie odkryć i rozwinąć Twój potencjał. Przywództwo to wpływ, a nie pozycja zawodowa czy stanowisko.
                </p>
                <div className="dotsMobile">
                    <img src={DotsMobile} alt="Ozdobne kształty"/>
                </div>
                <p>
                    Przywództwo to ludzie. Bycia dobrym i skutecznym liderem można się nauczyć. Jednak wszystko zaczyna się od Ciebie. Najpierw to Ty musisz stać się przywódcą dla siebie samego/samej, nauczyć się zarządzać sobą. Wyposażyć się w zestaw narzędzi, aby w przyszłości inni szli za Twoimi słowami. Szli nie dlatego, że muszą, ale dlatego, że chcą.
                </p>
            </div>
        </div>
        <h2 className="mobile-header">Wszystko bowiem zaczyna się od Ciebie.</h2>
        <div className="cicle"></div>
    </div>
    <div className='topBar__down'>
        <div className="down__img"><img src={DotsTopBar} alt="Ozdobne kształty"/></div>
        <p>Nasza Adademia została podzielona na kilka bloków tematycznych.<br />W ramach każdego z nich nauczysz się lub wzmocnisz w sobie kompetencje,<br />aby stać się niezawodnym przywódcą.</p>
    </div>
    </>
    )
}
