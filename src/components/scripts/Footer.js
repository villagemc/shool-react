import '../styles/Footer.css';
import footerLogo from '../images/footer.svg';
import Links from './Links';

const Footer = () => {
  return (
    <footer className="footer place">
      <h2 className="cours__head footer__head">
        обучение.<br/>
        Практика.<br/>
        свобода.<br/>
      </h2>
      <div className="footer__content">
        <ul className="footer__contact">
          <li className="footer__flex">
            <p className="footer__tel">8 (800) 222-22-22</p>
            <p className="footer__appeal">Вопросы и жалобы</p>
          </li>
          <li className="footer__flex footer__flex_sup">
            <p className="footer__support">support@rise-school.ru</p>
            <p className="footer__appeal">Для обращений</p>
          </li>
          <li className="footer__flex">
            <p className="footer__paragraph">ИП Алханова Оксана Викторовна</p>
            <p className="footer__paragraph">ИНН 664898248101</p>
            <p className="footer__paragraph">ОГРНИП 312662309500030</p>
          </li>
        </ul>
        <div className="footer__offers">
          <Links className="footer__offer hover">Оферта</Links>
          <Links className="footer__offer hover footer__offer_add">Политика конфиденциальности</Links>
        </div>
        <div className="footer__author">
          <Links href="" className="footer__logo hover">
            <img className="footer__image" src={footerLogo} alt="Логотип"/>
          </Links>
          <p className="footer__text">Сделано с любовью</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;