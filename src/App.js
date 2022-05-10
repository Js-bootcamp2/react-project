import './App.css';
import {useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Details from './pages/Details/Details';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Header cart={cart} setCart={setCart} />

      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/products/:productId" element={<Details />} />
        <Route path="about" element={<About />} />

        <Route path="*" element={<Home /> } />
      </Routes>
    </div>
  );
}

export default App;
