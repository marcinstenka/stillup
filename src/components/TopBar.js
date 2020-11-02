import React from 'react'
import StillUp from './../img/stillup.png'
import LogoMobile from './../img/logoMobile.jpg'
import DotsMobile from './../img/dotsMobile.png'
export default function TopBar() {
    return (
    <>
        <div className='topBar'>
            <div className="topBar__up">
                <div className="topBar__header">
                    <div className="topBar__header-logo">
                        <img src={StillUp} alt="Still Up"/>
                    </div>
                    <div className='stripe-blue'></div>
                    <h1>AKADEMIA LIDERA</h1>
                </div>
                <div className="topBar__logo">
                    <img src={LogoMobile} alt="Logo projektu Still Up"/>
                </div>
            </div>
            <div className="topBar__description">
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
        <h2 className="mobile-header">Wszystko zaczyna się bowiem od Ciebie.</h2>
    </>
    )
}
