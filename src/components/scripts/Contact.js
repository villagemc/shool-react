import '../styles/Contact.css';
import Links from './Links';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="cours__head contact__head">Оставь заявку</h2>
      <div className="contact__combo">
        <div className="contact__lines">
          <div className="contact__lines-text">
            <p className="contact__line-text">набор открыт</p>
          </div>
          <div className="contact__line">
            <div className="contact__lins contact__lins_top"></div>
            <div className="contact__lins contact__lins_bottom"></div>
          </div>
        </div>
        <p className="cours__head contact__head">на обучение</p>
      </div>
      <form className="contact__form">
        <div className="contact__text">
          <span>Привет! Меня зовут</span>
          <input className="contact__input" type="text" placeholder="Напишите свое имя"/>
          <span className="contact_orf">,</span>
          <span> и я хочу попасть к вам на курс Wildberries с 0 на форму </span>
          <input className="contact__input" type="text" placeholder="Выбери форму обучения"/>
          <span className="contact_orf">.</span>
          <span> Вы можете связаться со мной по номеру телефона</span>
          <input className="contact__input" type="tel" placeholder="Твой номер"/>
          <span>или в телеграмм</span>
          <input className="contact__input" type="text" placeholder="@name"/>
          <span className="contact_orf">.</span>
        </div>
        <div className="contact__assent">
          <div className="contact__flex">
            <input className="contact__checkbox" type="checkbox"/>
            <p className="contact__accept contact__accept_place">Я согласен с 
              <Links
                className="contact__accept contact__accept_politics hover" 
                href=""> Политикой конфиденциальности
              </Links>
            </p>
          </div>
          <Links className="contact__submit hover" href="">Отправить заявку</Links>
        </div>
      </form>
    </section>
  )
}

export default Contact;
