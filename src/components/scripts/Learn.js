import '../styles/Learn.css';
import learnMark from '../images/learn.svg';
import Links from './Links';

const Learn = () => {
  const learnArray = [
    {
      link: '',
      format: 'Онлайн',
      price: '7990 ₽',
      notprice: '14990 ₽',
      place: 'Количество мест ограничено',
      text: 'Обучение происходит на собственной платформе с участием автора курса, кураторов и тех. специалистов.',
      punkts: [
        'Уроки будут выходить 3 раза в неделю',
        'Приятный интерфейс платформы',
        'Сертификат по окончанию курса',
        'Обучение с чёткой структурой',
        '24/6 поддержка'
      ]
    },
    {
      link: '',
      format: 'Очно',
      price: '10990 ₽',
      notprice: '19990 ₽',
      place: 'Количество мест ограничено',
      text: 'Обучение происходит на собственной платформе с участием автора курса, кураторов и тех. специалистов.',
      punkts: [
        'Уроки будут выходить 3 раза в неделю',
        'Приятный интерфейс платформы',
        'Сертификат по окончанию курса',
        'Обучение с чёткой структурой',
        '24/6 поддержка'
      ]
    }
  ];

  return (
    <section className="learn" id="learn">
      <h2 className="cours__head learn__head">Формы обучения</h2>
      <ul className="learn__cards">
        {learnArray.map((learn, id) =>
        <li key={id} className="learn__card">
          <h3 className="learn__format">{learn.format}</h3>
          <p className="learn__price">{learn.price}</p>
          <p className="learn__outprice">{learn.notprice}</p>
          <p className="learn__place">{learn.place}</p>
          <p className="learn__text">{learn.text}</p>
          <ul className="learn__punkts">
            {learn.punkts.map((punkt, subId) =>
            <li key={subId} className="learn__punkt">
              <img className="learn__mark" src={learnMark} alt="Галочка"/>
              <p className="learn__paragraph">{punkt}</p>
            </li>
            )}
          </ul>
          <Links href={learn.link} className="learn__enroll">Записаться</Links>
        </li>
        )}
      </ul>
    </section>
  )
}

export default Learn;