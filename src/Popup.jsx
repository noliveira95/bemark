import './Popup.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Home from './screens/Home';

function Popup() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const popup = document.getElementById('popup');

    const handleScroll = () => {
      setScrollY(popup.scrollTop);
    };

    popup.addEventListener('scroll', handleScroll);

    return () => {
      popup.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="popup">
      <Navbar />
      <Home scrollY={scrollY} />
      <Search />
    </div>
  );
}

export default Popup;
