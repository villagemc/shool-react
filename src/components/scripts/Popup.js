import '../styles/Popup.css';
import popupClose from '../images/popup.svg';
import Links from './Links';

const Popup = (props) => {
  const popupArray = [
    {link: '#about', text: 'О нас'},
    {link: '#cours', text: 'О курсе в цифрах'},
    {link: '#quest', text: 'Частые вопросы'},
    {link: '#learn', text: 'Формы обучения'},
    {link: '#contact', text: 'Контакты'}
  ];

  return (
    <div className={`popup ${props.active ? 'popup_active' : ''}`}>
      <img
        onClick={props.closePopup}
        className="popup__close hover"
        src={popupClose}
        alt="Закрытие попапа"
      />
      <nav className="popup__links">
        {popupArray.map((site, id) =>
        <Links
          key={id}
          href={site.link}
          onClick={props.closePopup}
          className="popup__link hover"
          >{site.text}
        </Links>
        )}
      </nav>
      <div className="footer__offers popup__offers">
        <Links className="footer__offer popup__theme hover">Оферта</Links>
        <Links className="footer__offer popup__theme hover">Политика конфиденциальности</Links>
      </div>
      <ul className="footer__contact">
        <li className="footer__flex">
          <p className="footer__tel popup__theme">8 (800) 222-22-22</p>
          <p className="footer__appeal popup__theme">Вопросы и жалобы</p>
        </li>
        <li className="footer__flex footer__flex_sup">
          <p className="footer__support popup__theme">support@rise-school.ru</p>
          <p className="footer__appeal popup__theme">Для обращений</p>
        </li>
        <li className="footer__flex">
          <p className="footer__paragraph popup__theme popup__theme_opacity">ИП Алханова Оксана Викторовна</p>
          <p className="footer__paragraph popup__theme popup__theme_opacity">ИНН 664898248101</p>
          <p className="footer__paragraph popup__theme popup__theme_opacity">ОГРНИП 312662309500030</p>
        </li>
      </ul>
    </div>
  )
}

export default Popup;