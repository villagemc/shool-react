import {useState} from 'react';
import '../styles/Contact.css';
import Links from './Links';

const Contact = () => {
  const punkts = [
    'Пункт1',
    'Пункт2',
    'Пункт3' 
  ];

  const [select, setSelect] = useState(false);
  const [text, setText] = useState('Выбери форму обучения');

  const activeSelect = () => {
    return setSelect(!select);
  }

  const handleChange = () => {
    setText(
      document
        .forms
        .inputs
        .radio
        .value
    );

    activeSelect();
  }

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
      <form name="inputs" className="contact__form">
        <div className="contact__text">
          <span>Привет! Меня зовут</span>
          <input name="name" className="contact__input" type="text" placeholder="Напишите свое имя"/>
          <span className="contact_orf">,</span>
          <span> и я хочу попасть к вам на курс Wildberries с 0 на форму </span>
          <div className="contact__select" id="select">
            <p onClick={activeSelect} className="contact__option">{text}</p>
            {select && <div className="contact__labels">
              {punkts.map((punkt, i) => 
              <label key={i} className="contact__label">
                {punkt}
                <input
                  onChange={handleChange}
                  name="radio"
                  value={punkt}
                  className="contact__radio"
                  type="radio"
                />
              </label>
              )}
            </div>
            }
          </div>
          <span className="contact_orf"> .</span>
          <span> Вы можете связаться со мной по номеру телефона</span>
          <input name="tel" className="contact__input" type="tel" placeholder="Твой номер"/>
          <span>или в телеграмм</span>
          <input name="tag" className="contact__input" type="text" placeholder="@name"/>
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
          <button className="contact__submit hover" type="submit">Отправить заявку</button>
        </div>
      </form>
    </section>
  )
}

export default Contact;
