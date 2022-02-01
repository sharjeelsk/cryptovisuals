import React from 'react'
import './App.scss';
import List from './components/List/List'
import Graph from './components/Graph/Graph'
import axios from 'axios'
import GainersList from './components/List/GainersList'
import LosersList from './components/List/LosersList'
import News from './components/News/News'
import {Link} from 'react-router-dom'
import TrendingList from './components/List/TrendingList'
import ExchangeList from './components/List/ExchangeList'
import Header from './components/Header/Header'
const App = () => {
  const [data, setData] = React.useState({response:[],response2:[],topList:[]})
  React.useEffect(()=>{
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h")
    .then(resp=>{
      setData({response:resp.data,response2:resp.data,topList:resp.data})
    })
  },[])


  return (
    <div>
      <Header id="1" />
      <h1 class="heading"><span style={{color:"gold"}}>Crypto</span> Visuals</h1>
      <div style={{textAlign:"center"}}>

      <img class="indeximg" src="https://alternative.me/crypto/fear-and-greed-index.png
" alt="Latest Crypto Fear & Greed Index" />
      </div>


      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" style={{textAlign:"center"}}>
      <h2>Bitcoin</h2>
      <Graph coinname="bitcoin" color="rgb(228, 88, 38,0.3)" colorborder="rgb(228, 88, 38)"/>
      </div>
      
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" style={{textAlign:"center"}}>
      <h2>Ethereum</h2>
      <Graph coinname="ethereum" color="rgb(49, 50, 111,0.7)" colorborder="lightblue" />
      </div>
      
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" style={{textAlign:"center"}}>
      <h2>Litecoin</h2>
      <Graph coinname="litecoin" color="rgb(170, 170, 170,0.5)" colorborder="lightgrey" />
      </div>
      </div>
      <div class="row" style={{textAlign:"center"}}>
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
        <List Heading="Top 100"  flag={0}/>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
        <GainersList />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
        <LosersList Heading="Top Losers" list = {data.topList} flag={1}/>
        </div>

      </div>
    <div class="row" style={{textAlign:"center",margin:"5% 0",paddingBottom:"10%"}}>
      <div class="col-4">
<h2>Latest News</h2>
        <News />
        <Link to="/newsdetails">Click to get more news</Link>
      </div>
      <div class="col-4">
      <h2>Trending</h2>
      <TrendingList />
      </div>
      <div class="col-4">
      <h2>Exchange</h2>
      <ExchangeList />
      </div>
    </div>



    </div>
  );
}

export default App;