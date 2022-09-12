import '../styles/About.css';
import Links from './Links';
import aboutToggle from '../images/about.svg';
import {useState} from 'react';

const About = () => {
  const [aboutBool, setAboutBool] = useState(true);
  const toggleClick = () => setAboutBool(!aboutBool);

  return (
    <section id="about" className="about">
      <div className="about__text">
        <div className="about__flex">
          <h3 className="about__head">О курсе</h3>
          <img
            onClick={toggleClick}
            src={aboutToggle}
            alt="Стрелочка"
            className={`about__toggle ${
              aboutBool ? '' : 'about__toggle_active'
            }`}
          />
        </div>
        <div className="about__paragraphs">
          <p className="about__paragraph">
            <span className="about__bold">Менеджер Wildberries</span> — специалист, отвечающий за продажи и продвижение товара на тороговой площадке “Wildberries”. От него зависит, будет ли спрос на товар, а также насколько прибыльной будет торговля. Для этого он анализирует, разрабатывает стратегию, увеличивает базу клиентов и повышает лояльность покупателей.
          </p>
          <p className={`about__paragraph ${
            aboutBool ? 'about__paragraph_inactive' : ''
          }`}>
            Специальность становится всё более востребованной! В 2018 году на hh.ru было размещено всего 12 вакансий, в 2020 году их количество было 1744 штуки. За 2021 год таких ваканский было на 60% больше, чем за 2020.
          </p>
        </div>
        <div className="about__links">
          <Links href="" className="about__link hover">Записаться на курс</Links>
          <Links href="" className="about__link hover about__link_then"></Links>
        </div>
      </div>
      <div className="about__fon about__fon_right"></div>
      <div className="about__fon about__fon_left"></div>
    </section>
  )
}

export default About;