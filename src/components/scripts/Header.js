import '../styles/Header.css';
import menuHeader from '../images/menu.svg';
import headerLogo from '../images/riseshool.png'
import Links from './Links';

const Header = (props) => {
  const headerArray = [
    {link: '#about', text: 'О нас'},
    {link: '#cours', text: 'Немного цифр'},
    {link: '#learn', text: 'Тарифы'},
    {link: '#quest', text: 'Частые вопросы'}
  ]
  return (
    <header className="header">
      <Links href="" className="header__logo-link">
        <img className="header__logo" src={headerLogo} alt="Логотип" />
      </Links>
      <div className="header__place">
        <nav>
          <ul className="header__items">
            {headerArray.map((site, id) =>
            <li key={id}>
              <Links
                className="header__link hover"
                href={site.link}
              >{site.text}</Links>
            </li>
            )}
          </ul>
        </nav>
        <Links className="header__button hover" href="#contact">Оставить заявку</Links>
      </div>
      <img onClick={props.openPopup} className='header__image hover' src={menuHeader} alt="Меню"/>
    </header>
  )
}

export default Header;