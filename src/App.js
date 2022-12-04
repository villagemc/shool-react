import React, {useState} from 'react';
import Header from './components/scripts/Header';
import Home from './components/scripts/Home';
import About from './components/scripts/About';
import Cours from './components/scripts/Cours';
import Study from './components/scripts/Study';
import Quest from './components/scripts/Quest';
import Program from './components/scripts/Program';
import Learn from './components/scripts/Learn';
import Contact from './components/scripts/Contact';
import Faq from './components/scripts/Faq';
import Footer from './components/scripts/Footer';
import Main from './components/scripts/Main';
import Popup from './components/scripts/Popup';

function App() {
  const [popupActive, setPopupActive] = useState(false);
  const clickPopup = () => {
    let active = popupActive;
    setPopupActive(!active);
  }

  return (
    <React.Fragment>
      <Header
        openPopup={clickPopup}
      />
      <Main>
        <Home />
        <About />
        <Cours />
        <Study />
        <Quest />
        <Program />
        <Learn />
        <Contact />
        <Faq />
      </Main>
      <Footer />
      <Popup
        active={popupActive}
        closePopup={clickPopup}
      />
    </React.Fragment>
  );
}

export default App;
