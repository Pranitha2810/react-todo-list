import '../App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';
function MainRoute() {
  const [cryptolist, setcrpytolist] = useState([]);
  useEffect(() =>{
    Axios.get("https://api.coinlore.net/api/tickers/?start=0&limit=15").then((response)=>{
      setcrpytolist(response.data["data"]);
    });
    
  },[]);
  return (
   <>
   <div id="header">
      <h1>CRYPTO LAND</h1>
    </div>
    <div className='cryptoList'>
     {cryptolist.map((coin)=>{
      return (
      <div>
        <h1>{coin.symbol}</h1>
        <h1>{coin.price_usd}</h1>
      </div>
      );
     })}
    </div>
   </>
  );
}

export default MainRoute;
