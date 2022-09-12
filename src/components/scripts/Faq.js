import {useState} from 'react';
import '../styles/Faq.css';
import faqArrow from '../images/faq.svg';

const Faq = () => {
  const [faqArray, setFaqArray] = useState([
    {
      title: 'Очное обучение и как оно будет проходить?',
      boolean: true,
      subtitles: [
        'Привет!'
      ]
    },
    {
      title: 'Как и когда можно оплатить курс?',
      boolean: true,
      subtitles: [
        'Привет!'
      ]
    },
    {
      title: 'Какие нужны знания и навыки, чтобы начать обучаться?',
      boolean: true,
      subtitles: [
        'Привет!'
      ]
    },
    {
      title: 'А что если у меня не будет получаться?',
      boolean: true,
      subtitles: [
        'Привет!'
      ]
    },
    {
      title: 'Сколько будет идти очный и онлайн курс?',
      boolean: true,
      subtitles: [
        'Привет!'
      ]
    },
    {
      title: 'Возможно ли сразу начать работать после окончания курса?',
      boolean: true,
      subtitles: [
        'Привет!'
      ]
    },
    {
      title: 'Возможно ли удаленное прохождение обучения?',
      boolean: true,
      subtitles: [
        'Привет!'
      ]
    },
    {
      title: 'Выдаётся ли сертификат после окончания курса?',
      boolean: true,
      subtitles: [
        'Привет!'
      ]
    }
  ]);

  const toggleClick = (id) => {
    const newFaqArray = [...faqArray];
    newFaqArray[id].boolean = !newFaqArray[id].boolean;
    setFaqArray(newFaqArray);
  }

  return (
    <section className="faq">
      <h2 className="cours__head place">FAQ</h2>
      <ul className="faq__items">
        {faqArray.map((item, id) =>
        <li key={id} className="faq__item">
          <div className="faq__flex place" onClick={() => toggleClick(id)}>
            <p className="faq__paragraph">{item.title}</p>
            <span className={`faq__rider ${
              item.boolean ? '' : 'faq__rider_active'
            }`}>{
              item.boolean ? 'Развернуть' : 'Свернуть'
            }</span>
            <img className={`faq__arrow ${
              item.boolean ? '' : 'faq__arrow_active'
            }`} alt="Стрелка" src={faqArrow}/>
          </div>
          <ul className={`faq__punkts ${
              item.boolean ? '' : 'faq__punkts_active'
            }`}>{item.subtitles.map((subtitle, subId) =>
            <li key={subId} className="faq__punkt place">{subtitle}</li>
            )}
          </ul>
        </li>
        )}
      </ul>
    </section>
  )
}

export default Faq;