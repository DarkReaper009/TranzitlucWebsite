import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import HappyClients from './components/HappyClients';
import Works from './pages/Works';
import GetQuote from './pages/GetQuote';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-[100dvw] min-h-[2000px] overflow-x-hidden  bg-white">
      <Header />
      <Home />
      <AboutUs />
      <Services />
      <HappyClients />
      <Works />
      <GetQuote />
      <Footer />
    </div>
  );
}

export default App;
