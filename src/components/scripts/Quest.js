import '../styles/Quest.css';
import questLetter from '../images/quest1.svg';
import questDrawing from '../images/quest2.svg';
import questHandshake from '../images/quest3.svg';
import questNews from '../images/quest4.svg';

const Quest = () => {
  const questArray = [
    { 
      image: questLetter,
      title: 'Начинающим менджерам маркетплейсов',
      subtitle: 'Разберётесь в перспективном маркетинговом направлении. Узнаете особенности разных платформ и сможете зарабатывать больше.',
      text: 'Запись'
    },
    {
      image: questHandshake,
      title: 'Владельцам интернет-магазинов',
      subtitle: 'Поймёте, как привлекать аудиторию к продукту и продвигать бренд на маркетплейсах. Сможете масштабировать бизнес и увеличить прибыль.',
      text: 'Рукопожатие'
    },
    {
      image: questDrawing,
      title: 'Интернет-маркетологам',
      subtitle: 'Узнаете, как вывести бренд на маркетплейсы, увеличить продажи и повысить лояльность клиентов.',
      text: 'Диаграмма'
    },
    {
      image: questNews,
      title: 'Предпринимателям',
      subtitle: 'Научитесь анализировать рыночные ниши и рассчитывать прибыльность продаж. Сможете эффективно работать с разными маркетплейсами.',
      text: 'Новости'
    }
  ]

  return (
    <section className="quest" id="quest">
      <div className="quest__content">
        <h2 className="cours__head">кому подойдёт курс</h2>
        <ul className="quest__cards">
          {questArray.map((card, id) =>
          <li key={id} className="quest__card">
            <img className="quest__image" src={card.image} alt={card.text} />
            <div className="quest__text">
              <h3 className="quest__title">{card.title}</h3>
              <p className="quest__subtitle">{card.subtitle}</p>
            </div>
          </li>
          )}
        </ul>
      </div>
    </section>
  )
}

export default Quest;