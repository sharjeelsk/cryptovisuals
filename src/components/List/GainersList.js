import React from 'react'
import "./List.scss"
import axios from 'axios'
import {Link} from 'react-router-dom'
const GainersList = (props) => {
    const flag=0
    const [list,setList] = React.useState([])
    React.useEffect(()=>{
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h")
        .then(resp=>{
          setList(resp.data)
        })
      },[])

      let gainersList=[]
if(list.length!==0){
   gainersList = list.sort((a, b) =>{
    return parseFloat(b.price_change_percentage_24h) - parseFloat(a.price_change_percentage_24h);
});

}
    return (
        <div class="listdiv">
            <h2>Top Gainers</h2>
            <table class="ui very basic table">
            <thead>
                    <tr>
                    <th>Name</th>
                    <th>Current Price</th>
                    <th>Change in Price (24h)</th>
                    <th>Change in Price Percentage (24h)</th>
                    </tr>
            </thead>
            <tbody>
                {
                    gainersList.map((e,index)=>(
                        index<21?(<tr>
                          <td><Link to={`/cryptosearch/${e.name}`}>{e.name}</Link></td>
                        <td>{e.current_price}</td>
                        <td>{e.price_change_24h}</td>
                        <td class={flag===1?"red":"green"}>{e.price_change_percentage_24h}</td>
                    </tr>):(null)
                    
                    ))
                }
            </tbody>
            </table>

        </div>
    );
}

export default GainersList;