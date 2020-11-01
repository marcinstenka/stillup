import React from 'react'
import StillUp from './../img/stillup.png'
import LogoMobile from './../img/logoMobile.jpg'
export default function TopBar() {
    return (
        <div className='topBar'>
            <div className="topBar__header">
                <div className="topBar__header-logo">
                    <img src={StillUp} alt="Still Up"/>
                </div>
                <div className='stripe'></div>
                <h1>AKADEMIA LIDERA</h1>
            </div>
            <div className="topBar__logo">
                <img src={LogoMobile} alt="Logo projektu Still Up"/>
            </div>
        </div>
    )
}
