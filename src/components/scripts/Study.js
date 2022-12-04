import '../styles/Study.css';

const Study = () => {
  const studyArray = [
    {id: 1, title: 'Анализировать', subtitle: 'Анализировать рынок, ниши и конкурентов при помощи сервисов аналитики.'},
    {id: 2, title: 'Оформлять карточки', subtitle: 'Научитесь создавать продающий контент для карточек товаров. Изучите SEO. Научитесь инфографике.'},
    {id: 3, title: 'Стратегии', subtitle: 'Составлять комплексную стратегию выхода и продвижения на маркетплейсах. '},
    {id: 4, title: 'Продвижение', subtitle: 'Научитесь запускать медийную рекламу, акции и оценивать их эффективность.'},
    {id: 5, title: 'Экономике', subtitle: ' Работать с экономикой товара: рассчитывать прибыль, выгодные цены, управлять скидками. Освоите unit-экономику.'},
    {id: 6, title: 'Составление ТЗ', subtitle: 'Готовить техническое задание для дизайнеров, фотографов, копирайтеров, заводить карточки товаров и работать с отзывами и возражениями.'}
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