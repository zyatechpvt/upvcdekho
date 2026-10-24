import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import About from './components/About/About';
import Benefits from './components/Benefits/Benefits';
import WindowTypes from './components/WindowTypes/WindowTypes';
import OurWork from './components/OurWork/OurWork';
import Process from './components/Process/Process';
import Reviews from './components/Reviews/Reviews';
import ServiceAreas from './components/ServiceAreas/ServiceAreas';
import FAQs from './components/FAQs/FAQs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Benefits />
        <WindowTypes />
        <OurWork />
        <Process />
        <Reviews />
        <ServiceAreas />
        <FAQs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;