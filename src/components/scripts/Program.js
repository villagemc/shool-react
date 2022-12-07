import '../styles/Program.css';
import programPlus from '../images/prog1.png';
import programCross from '../images/prog2.svg';
import {useState} from 'react';

const Program = () => {
  const [programArray, setProgramArray] = useState([
    {
      title: 'Модуль 1: «Подготовительный»',
      bool: true,
      punkts: [
        'Онлайн встреча с психологом на тему : «Страхи, которые мешают нам развиваться».',
        'Глоссарий.Основные понятия',
        'Введение в маркетинг',
        'Менеджер маркетплейсовособенности профессии.',
        'Тайм-менеджментключ к успеху.',
        'Онлайн-встреча с автором курса. Организационные моменты обучения.'
      ]
    },
    {
      title: 'Модуль 2: «Старт на маркетплейсах»',
      bool: true,
      punkts: [
        'Выбор ниши. Поиск товара.',
        'Понятие маркетплейсов. Как они работают.',
        'Целевая аудитория, УТП, конкуренты.',
        'Обзор площадок – Wildberries, OZON, Яндекс Маркет, Aliexpress',
        '-Подготовка документов для работы на площадках. Регистрация бизнеса.',
        'Выбор схемы работы на маркетплейсе (FBО, FBS и т.д)',
        'Маркировка «Честный знак»',
        'Регистрация на маркетплейсах. Обзор',
        'Брифинг клиента',
        'Воронка продаж',
        'Создание собственного бренда'
      ]
    },
    {
      title: 'Модуль 3: «Поиск клиента»',
      bool: true,
      punkts: [
        'Линейка продуктов',
        'Создаем резюме',
        'Оформляем портфолио',
        'Создание телеграмканала и оформление социальных сетей ',
        'Способы поиска клиентов',
        'Как правильно коммуницировать с работодателем'
      ]
    },
    {
      title: 'Модуль 4: «Поиск клиента»',
      bool: true,
      punkts: [
        'Анализ ниши.',
        'Unitэкономика',
        'Анализ конкурентов',
        'Сервисы аналитики. Обзор'
      ]
    },
    {
      title: 'Модуль 5: «Поиск клиента»',
      bool: true,
      punkts: [
        'Анализ конкурентов. Поиск ключевых слов.',
        'Создание карточек товаров',
        'Создание продающих описаний',
        'Rich –контент ',
        'Фотосессия своими руками',
        'Создание видео-контента ',
        'Создание инфографики',
        'Live-контент',
        'Воронка продаж в контенте'
      ]
    },
    {
      title: 'Модуль 6: «Поиск клиента»',
      bool: true,
      punkts: [
        'Особенности работы ',
        'Требования к контенту',
        'Регистрация личного кабинета',
        'Схемы работы ',
        'Маркировка товара ',
        'Оформление поставки товара',
        'Упаковка товара',
        'Работа с фулфилментом. ',
        'Отчетность поставок. Прогноз поставок.',
        'Продвижение товара'
      ]
    },
    {
      title: 'Модуль 7: «Поиск клиента»',
      bool: true,
      punkts: [
        'Особенности работы ',
        'Требования к контенту',
        'Регистрация личного кабинета',
        'Выбор схемы работы',
        'Маркировка товара ',
        'Оформление поставки товара ',
        'Упаковка товара – требования ',
        'Продвижение товара (бесплатные и платные методы)',
        'Аналитика OZON',
        'Бонусы от OZON'
      ]
    },
    {
      title: 'Модуль 8: «Поиск клиента»',
      bool: true,
      punkts: [
        'Особенности работы на площадке',
        'Требования к контенту',
        'Работа с карточками товара',
        'Требования к упаковке товара'
      ]
    },
    {
      title: 'Модуль 9: «Поиск клиента»',
      bool: true,
      punkts: [
        'Вопросы и отзывы ',
        'Улучшение контента через вопросы покупателей',
        'Отработка негатива в отзывах'
      ]
    },
    {
      title: 'Модуль 10: «Поиск клиента»',
      bool: true,
      punkts: [
        'Как вырасти в доходе',
        'Формирование команды. Делегирование полномочий',
        'Личный бренд. От консультаций до наставничества'
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