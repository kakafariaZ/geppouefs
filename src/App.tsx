import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Events />
        <News />
      </main>
      <Footer />
    </>
  );
}

export default App;
