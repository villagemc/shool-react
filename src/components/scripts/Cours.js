import '../styles/Cours.css';

const Cours = () => {
  const coursArray = [
    {class: 'cours__circle_one', num: '50 000', text: 'Минимальная заработная плата после прохождения курса'},
    {class: 'cours__circle_two', num: '1 час', text: 'Средняя занятость ученика в день'},
    {class: 'cours__circle_three', num: '5 нед.', text: 'Длительность курса'}
  ]

  return (
    <section className="cours" id="cours">
      <div className="cours__content">
        <h2 className="cours__head">о Курсе в цифрах</h2>
        <ul className="cours__circles">
          { coursArray.map((cours, id) =>
          <li key={id} className={`cours__circle ${cours.class}`}>
            <h3 className="cours__title">{cours.num}</h3>
            <p className="cours__subtitle">{cours.text}</p>
          </li>
          )}
        </ul>
        <div className="cours__flex">
          <p className="cours__head cours__head_subtext cours__head_anim">
            очное и онлайн обучение • число мест ограничено
          </p>
          <p className="cours__head cours__head_subtext cours__head_time">
            очное и онлайн обучение • число мест ограничено
          </p>
        </div>
      </div>
    </section>
  )
}

export default Cours;