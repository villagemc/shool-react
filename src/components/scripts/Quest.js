import '../styles/Quest.css';
import questLetter from '../images/quest1.svg';
import questDrawing from '../images/quest2.svg';
import questHandshake from '../images/quest3.svg';
import questNews from '../images/quest4.svg';

const Quest = () => {
  const questArray = [
    { 
      image: questLetter,
      title: 'Новичкам, которые хотят обучиться новой профессии.',
      subtitle: 'Получите все необходимые знания для старта в новой профессии, сможете попрактиковаться во время обучения. Сможете работать не выходя из дома.',
      text: 'Запись'
    },
    {
      image: questHandshake,
      title: 'Владельцам интернет-магазинов',
      subtitle: 'Научитесь проводить анализ бизнеса. Получите все знания по привлечению внимания покупателя к продукту. Научитесь формировать свой бренд на маркетплейсах. Сможете масштабировать свой бизнес и увеличить прибыль.',
      text: 'Рукопожатие'
    },
    {
      image: questDrawing,
      title: 'Интернет-маркетологам',
      subtitle: 'Узнаете особенности работы на маркетплейсах, попрактикуетесь в размещении и продвижении товаров на площадках. Расширите знания в аналитике товара, привлечении дополнительного трафика. Узнаете, как вывести бренд на маркетплейсы, повысить продажи и лояльность покупателей.',
      text: 'Диаграмма'
    },
    {
      image: questNews,
      title: 'Предпринимателям',
      subtitle: 'Научитесь правильно выбирать рыночные ниши. Сможете освоить все нюансы работы на маркетплейсах. Сможете самостоятельно выйти на маркетплейс. Научитесь рассчитывать прибыль, оформлять отгрузку, продвигать собственный товар, выстраивать логистику, проводить анализ по результатам работы.',
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