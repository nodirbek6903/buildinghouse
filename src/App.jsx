import { useTranslation } from 'react-i18next';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Partners from './components/Partners/Partners';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import YourHome from './components/YourHome/YourHome';
import { useEffect } from 'react';
function App() {
  const { t,i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if(savedLanguage){
      i18n.changeLanguage(savedLanguage)
    }else{
      localStorage.setItem("language","en")
      i18n.changeLanguage("en")
    }
  },[i18n])
  return (
    <div className="container">
      <Navbar />
       <Main />
      <Services />
      <YourHome />
      <Projects />
      <News />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
