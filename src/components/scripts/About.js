import '../styles/About.css';
import Links from './Links';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__text">
        <h3 className="about__head">О курсе</h3>
        <div className="about__paragraphs">
          <p className="about__paragraph">
            <span className="about__bold">Менеджер Wildberries</span> — специалист, отвечающий за продажи и продвижение товара на тороговой площадке “Wildberries”. От него зависит, будет ли спрос на товар, а также насколько прибыльной будет торговля. Для этого он анализирует, разрабатывает стратегию, увеличивает базу клиентов и повышает лояльность покупателей.</p>
          <p className="about__paragraph">Специальность становится всё более востребованной! В 2018 году на hh.ru было размещено всего 12 вакансий, в 2020 году их количество было 1744 штуки. За 2021 год таких ваканский было на 60% больше, чем за 2020.</p>
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