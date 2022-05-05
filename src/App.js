import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="*" element={<Home /> } />
      </Routes>
    </div>
  );
}

export default App;
