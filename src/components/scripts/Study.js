import '../styles/Study.css';

const Study = () => {
  const studyArray = [
    {id: 1, title: 'Оформлять карточки', subtitle: 'Узнаете, как изучать конкурентов и выбирать товарную нишу. Научитесь работать с системами аналитики.'},
    {id: 2, title: 'Оформлять карточки', subtitle: 'Узнаете, как изучать конкурентов и выбирать товарную нишу. Научитесь работать с системами аналитики.'},
    {id: 3, title: 'Оформлять карточки', subtitle: 'Узнаете, как изучать конкурентов и выбирать товарную нишу. Научитесь работать с системами аналитики.'},
    {id: 4, title: 'Оформлять карточки', subtitle: 'Узнаете, как изучать конкурентов и выбирать товарную нишу. Научитесь работать с системами аналитики.'},
    {id: 5, title: 'Оформлять карточки', subtitle: 'Узнаете, как изучать конкурентов и выбирать товарную нишу. Научитесь работать с системами аналитики.'},
    {id: 6, title: 'Оформлять карточки', subtitle: 'Узнаете, как изучать конкурентов и выбирать товарную нишу. Научитесь работать с системами аналитики.'}
  ]

  return (
    <section className="study">
      <h2 className="cours__head study__head">Чему вы научитесь</h2>
      <ul className="study__cards">
        { studyArray.map((card, id) => 
        <li key={id} className="study__card">
          <span className="study__number">{card.id}</span>
          <h3 className="study__title">{card.title}</h3>
          <p className="study__subtitle">{card.subtitle}</p>
        </li>
        )}
      </ul>
    </section>
  )
}

export default Study;