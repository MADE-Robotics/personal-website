import './App.scss';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackToTop from 'react-back-to-top-button';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <Skills /> 
        <Contact />

      </main>
      <BackToTop
        showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint"
      >
        <Button class="btn btn-secondary">Scroll Up</Button>
      </BackToTop>
      <Footer /> 
    </div>
  );
}

export default App;
