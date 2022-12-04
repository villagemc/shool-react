import '../styles/Home.css';
import manHome from '../images/man.png';

const Home = () => {
  return (
    <section className="home">
      <div className="home__content">
        <h1 className="home__title">курс<br/>МЕНЕДЖЕР МАРКЕТПЛЕЙСОВ<br/>от RISE SCHOOL</h1>
        <img className="home__man" src={manHome} alt="Человек на стуле"/>
      </div>
      <div className="home__line"></div>
    </section>
  )
}

export default Home;