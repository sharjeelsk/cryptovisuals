import React from 'react'
import "./CryptoSearch.scss"
import Header from '../Header/Header'
import axios from 'axios'
import Graph from '../Graph/Graph'
const CryptoSearch = (props) => {
    let name = props.match.params.name.toLowerCase()
    const [data, setData] = React.useState({list:[],loading:false}) 
    React.useEffect(()=>{
        const getData = async ()=>{
        setData({list:[],loading:true})
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${name}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h`)
        if(response){
            setData({list:response.data, loading:false})
        }
        }
        getData()
    },[])
    return (
        <div style={{textAlign:"center"}}>
            {
                console.log(data.list)
            }
            <Header />
            {
                data.list.length!==0?(
                    <img style={{marginTop:"3%"}} src={data.list[0].image} height={100} width={100} alt={data.list[0].name}/>
                ):null
            }
            <h1 class="cryph1">{data.list.length!==0? data.list[0].name:null}</h1>
           <div >
            <Graph class="crypgraph"  coinname={name} color="rgb(228, 88, 38,0.2)" colorborder="rgb(228, 88, 38,0.5)"/>
            </div>
            {
                data.list.length!==0?
        (<div>
                <div class="row cryprow">
                    <div class="col-6 key">
                        Id:
                    </div>
                    <div class="col-6 value">
                    {data.list[0].id}
                    </div>
                </div>

                 <div class="row cryprow">
                    <div class="col-6 key">
                        atl date:
                    </div>
                    <div class="col-6 value">
                    {data.list[0].atl_date}
                    </div>
                </div>

                <div class="row cryprow">
                    <div class="col-6 key">
                        Current Price:
                    </div>
                    <div class="col-6 value">
                    {data.list[0].current_price}
                    </div>
                </div>

                <div class="row cryprow">
                    <div class="col-6 key">
                        High 24h:
                    </div>
                    <div class="col-6 value">
                    {data.list[0].high_24h}
                    </div>
                </div>

                <div class="row cryprow">
                    <div class="col-6 key">
                        Market Cap:
                    </div>
                    <div class="col-6 value">
                    {data.list[0].market_cap}
                    </div>
                </div>

                <div class="row cryprow">
                    <div class="col-6 key">
                        Market Cap Rank:
                    </div>
                    <div class="col-6 value">
                    {data.list[0].market_cap_rank}
                    </div>
                </div>

                <div class="row cryprow">
                    <div class="col-6 key">
                        Max Supply:
                    </div>
                    <div class="col-6 value">
                    {data.list[0].max_supply}
                    </div>
                </div>

                <div class="row cryprow">
                    <div class="col-6 key">
                        Symbol:
                    </div>
                    <div class="col-6 value">
                    {data.list[0].symbol}
                    </div>
                </div>

                <div class="row cryprow">
                    <div class="col-6 key">
                        Total Supply:
                    </div>
                    <div class="col-6 value">
                    {data.list[0].total_supply}
                    </div>
                </div>



            </div>
        )
                :null
            }
           
        </div>
    );
}

export default CryptoSearch;