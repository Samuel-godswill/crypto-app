import React, { useContext } from "react";
import "./Navbar.css";
import { CoinContext } from "../context/CoinContext";
import { Link } from "react-router-dom";
import togglelight from '../../assets/lightmode.png'
import toggle_dark from '../../assets/darkmode.png'

function Navbar({theme, setTheme}) { 
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "ngn": {
        setCurrency({ name: "ngn", symbol: "₦" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };

  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <div className="navbar">
      <Link to={"/"}>
        <div className="logo">omoòga</div>
      </Link>
      <div className="nav-right">
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
        </ul>
        <img onClick={toggle_mode} src={theme == 'light' ? togglelight : toggle_dark} alt="" className="toggle-icon"/>
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="ngn">NGN</option>
        </select>
        <button>Sign Up</button>
      </div>
    </div>
  );
}
export default Navbar;
