import DotsFooter from './../img/dots3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare  } from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
    return(
        <>
            <div className="footer">
                <div data-aos="fade-right" className="footer__img">
                    <img src={DotsFooter} alt="Ozdobne kształty"/>
                </div>
                <div className="stripe-orange"></div>
                <div className="footer__info">
                    <p>Zajęcia rozpoczynają się 15 września 2021r. uroczystą inauguracją i odbywają się w każdą środę w godzinach 17:00-20:00.</p>
                    <p>Szczegółowy plan słuchacze otrzymają w dniu inauguracji.</p>
                    <p>W ramach Akademii Lidera Still Up słuchacze mają 75 godzin (100 godzin dydaktycznych) zajęć plus 3 spotkania niespodzianki.</p>
                    <p>Grupy maksymalnie 10 osób.<br />Warunkiem uruchomienia zajęć jest liczba 8 osób.</p>
                    <p><bold>Koszt:</bold> 350zł miesięcznie</p>
                </div>
            </div>
            <div className="contact">
                <div className="contact__map">
                    <iframe title='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2314.0101239323008!2d17.791033216011215!3d54.55094699150002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fdc2bf1b2b5b27%3A0x2f90741ed2c06d06!2sD%C5%82uga%2024%2C%2084-353!5e0!3m2!1spl!2spl!4v1604338035726!5m2!1spl!2spl" frameBorder={"0"}></iframe>
                </div>
                <div className="contact__info">
                    <h4>KONTAKT</h4>
                    <p>Akademia Lidera Still Up<br />ul. Długa 24A<br />84-353 Lębork Mosty</p>
                    <p>tel. 601 069 863</p>
                    <a href='//www.facebook.com/AkademiaLideraStillUp' className='contact__icon'><FontAwesomeIcon icon={faFacebookSquare } size='2x' /></a>
                </div>
            </div>
        </>
    )
}