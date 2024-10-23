import React, { useContext, useEffect, useState } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import LineChart from "../../LineChart/LineChart";

const Coin = () => {
  const {coinId} = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();
  const {currency} = useContext(CoinContext);

  const fetchCoinData = async () =>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-3XLyVX9i47uLuDr629we4bAn	'
      }
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(response => response.json())
      .then(response => setCoinData(response))
      .catch(err => console.error(err));
  }

  const fetchHistoricalData = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-3XLyVX9i47uLuDr629we4bAn	'
      }
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/ 
      bitcoin/market_chart?vs_currency=${currency.name}usd&days=10&interval=daily`, options)
      .then(response => response.json())
      .then(response => setHistoricalData(response))
      .catch(err => console.error(err));
  }
 
  useEffect(()=> {
    fetchCoinData();
    fetchHistoricalData();
  },[currency])

  if(coinData & historicalData){
  return (
    <div className="coin">
      <div className="coin-name">  
        <img src={coinData.image.large} alt="" />
        <p><b>{coinData.name} {coinData.symbol.toUpperCase()}</b></p>
      </div>
      <div className="coin-chart">
        <LineChart historicalData={historicalData}/>
      </div>
      <div className="coin-info">
        <ul>
          <li>Crypto Market Rank</li>
          <li>{coinData.market_cap_rank}</li>
        </ul>
        <ul>
          <li>Current Price</li>
          <li>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</li>
        </ul>
        <ul>
          <li>Market cap</li>
          <li>{currency.symbol} {coinData.market_data.market_cap
          [currency.name].toLocaleString()}</li>
        </ul>
        <ul>
          <li>24h High</li>
          <li>{currency.symbol} {coinData.market_data.high_24
          [currency.name].toLocaleString()}</li>
        </ul>
        <ul>
          <li>24h Low</li>
          <li>{currency.symbol} {coinData.market_data.low_24
          [currency.name].toLocaleString()}</li>
        </ul>
      </div>
    </div>
  )
}else{
  return (
    <div className="spinner">
      <div className="spin"></div>
    </div>
  )
}
}

export default Coin;
 