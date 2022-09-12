import '../styles/Program.css';
import programPlus from '../images/prog1.png';
import programCross from '../images/prog2.svg';
import {useState} from 'react';

const Program = () => {
  const [programArray, setProgramArray] = useState([
    {
      title: 'Модуль 1: «Знакомство с курсом»',
      bool: true,
      punkts: [
        'Изучите основы торговли на маркетплейсах. Познакомитесь с моделями торговли и основными бизнес-процессами.',
        'Изучите основы торговли на маркетплейсах. Познакомитесь с моделями торговли и основными бизнес-процессами.',
        'Изучите основы торговли на маркетплейсах. Познакомитесь с моделями торговли и основными бизнес-процессами.'
      ]
    },
    {
      title: 'Модуль 2: «Знакомство с курсом»',
      bool: true,
      punkts: [
        'Изучите основы торговли на маркетплейсах. Познакомитесь с моделями торговли и основными бизнес-процессами.',
        'Изучите основы торговли на маркетплейсах. Познакомитесь с моделями торговли и основными бизнес-процессами.',
        'Изучите основы торговли на маркетплейсах. Познакомитесь с моделями торговли и основными бизнес-процессами.'
      ]
    },
    {
      title: 'Модуль 3: «Знакомство с курсом»',
      bool: true,
      punkts: [
        'Изучите основы торговли на маркетплейсах. Познакомитесь с моделями торговли и основными бизнес-процессами.',
        'Изучите основы торговли на маркетплейсах. Познакомитесь с моделями торговли и основными бизнес-процессами.',
        'Изучите основы торговли на маркетплейсах. Познакомитесь с моделями торговли и основными бизнес-процессами.'
      ]
    }
  ]);

  const handleClick = (id) => {
    const newProgramArray = [...programArray];
    newProgramArray[id].bool = !newProgramArray[id].bool;
    setProgramArray(newProgramArray);
  }

  return (
    <section className="program">
      <h2 className="cours__head program__head">Программа курса</h2>
      <ul className="program__cards">
        {programArray.map((card, id) => 
        <li key={id} className="program__card">
          <ul>
            <div className="program__click hover" onClick={() => handleClick(id)}>
              <div className="program__block place">
                <h3 className="program__title">{card.title}</h3>
                <img
                  className="program__button"
                  src={card.bool ? programPlus : programCross}
                  alt="Закрытие/открытие"
                />
              </div>
            </div>
            {card.punkts.map((punkt, subId) =>
            <li key={subId} className={
              `program__punkt ${card.bool ? '' : 'program__punkt_active'}`
            }>{`• ${punkt}`}</li>
            )}
          </ul>
        </li>
        )}
      </ul>
    </section>
  )
}

export default Program;