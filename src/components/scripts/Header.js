import '../styles/Header.css';
import menuHeader from '../images/menu.svg';
import Links from './Links';

const Header = (props) => {
  const headerArray = [
    {link: '#about', text: 'О нас'},
    {link: '#cours', text: 'О курсе в цифрах'},
    {link: '#quest', text: 'Частые вопросы'},
    {link: '#learn', text: 'Формы обучения'},
    {link: '#contact', text: 'Контакты'}
  ]
  return (
    <header className="header">
      <Links href="" className="header__logo">RISE SCHOOL</Links>
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
        <Links className="header__button hover" href="">Оставить заявку</Links>
      </div>
      <img onClick={props.openPopup} className='header__image hover' src={menuHeader} alt="Меню"/>
    </header>
  )
}

export default Header;