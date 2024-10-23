import Navbar from "./components/Navbar/Navbar";
import React, {useState} from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home.jsx";
import Coin from "./components/pages/Coin/Coin.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div className={`App ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
