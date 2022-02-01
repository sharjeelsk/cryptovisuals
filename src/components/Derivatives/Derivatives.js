import React from 'react'
import "./Derivatives.scss"
import Header from '../Header/Header'
import axios from 'axios'
const Derivatives = () => {
    const [data, setData] = React.useState({list:[],loading:false})

    React.useEffect(()=>{
        const getData = async ()=>{
            setData({loading:true})
            const response = await axios.get(`https://api.coingecko.com/api/v3/derivatives`)
            console.log(response)
            if(response){
                setData({list:response.data,loading:false})
            }
        }
        getData()
    })
    return (
        <div>
            <Header id="5" />
            <div class="listdiv">
            <table class="ui very basic table">
            <thead>
                    <tr>
                    <th>Market</th>
                    <th>Symbol</th>
                    <th>Index Id</th>
                    <th>Price</th>
                    <th>Volume 24h</th>
                    <th>Expired At</th>
                    </tr>
            </thead>
            <tbody>
                {
                    data.loading?<div>
                        Loading....
                    </div>:
                    data.list.map((e,index)=>(
                        index<50?(
                    <tr>
                        <td>{e.market}</td>
                        <td>{e.symbol}</td>
                        <td>{e.index_id}</td>
                        <td>{e.price}</td>
                        <td>{e.volume_24h}</td>
                        <td>{e.expired_at===null?"Valid":"Expired"}</td>
                    </tr>):null
                    
                    ))
                }
            </tbody>
            </table>

        </div>
        </div>
    );
}

export default Derivatives;