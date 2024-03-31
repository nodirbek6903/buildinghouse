import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Partners from './components/Partners/Partners';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import YourHome from './components/YourHome/YourHome';
function App() {
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
