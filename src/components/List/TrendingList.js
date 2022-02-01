import React from 'react'
import "./List.scss"
import axios from 'axios'
import {Link} from 'react-router-dom'
const TrendingList = (props) => {
    const flag=0
    const [list,setList] = React.useState([])
    React.useEffect(()=>{
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h")
        .then(resp=>{
          setList(resp.data)
        })
      },[])
    return (
        <div class="listdiv">
            <table class="ui very basic table">
            <thead>
                    <tr>
                    <th>Name</th>
                    <th>Current Price</th>
                    <th>Change in Price (1h)</th>
                    <th>Change in Price Percentage (1h)</th>
                    </tr>
            </thead>
            <tbody>
                {
                    list.map((e,index)=>(
                    index<10?(<tr>
                          <td><Link to={`/cryptosearch/${e.name}`}>{e.name}</Link></td>
                        <td>{e.current_price}</td>
                        <td>{e.price_change_24h}</td>
                        <td class={flag===1?"red":"green"}>{e.price_change_percentage_24h}</td>
                    </tr>):null
                    
                    ))
                }
            </tbody>
            </table>

        </div>
    );
}

export default TrendingList;