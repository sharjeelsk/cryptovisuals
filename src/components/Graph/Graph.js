import React from 'react'
import "./Graph.scss"
import { Line } from 'react-chartjs-2';
import axios from 'axios'
import date from 'date-and-time';
// function currentDate(){
//     var today = new Date();
//     var dd = String(today.getDate()).padStart(2, '0');
//     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//     var yyyy = today.etFullYear();
//     today = (dd-7) + '-' + mm + '-' + yyyy;
  
//     return today;
//   }
//   console.log(currentDate());

const Graph = (props) => {
    let dateArray= [];
    let priceArray = []

const [data,setData] = React.useState({dateArray:[],priceArray:[],loading:false})
    React.useEffect(()=>{
        const getData = async()=>{
            setData({loading:true})
            
            const now = new Date();

            for( let i =7;i>0;i--){
                const yesterday = date.addDays(now, -i);
                let d = date.format(yesterday, 'DD-MM-YYYY');
                dateArray.push(d)
            
             let response = await axios.get(`https://api.coingecko.com/api/v3/coins/${props.coinname}/history?date=${d}&localization=false`)
             console.log(response.data.market_data.current_price.usd)
             priceArray.push(response.data.market_data.current_price.usd);
            }
             setData({dateArray,priceArray,loading:false})

            // for( var i =7 ; i>=1 ; i--){
            //     var today = new Date();
            // var dd = String(today.getDate()).padStart(2, '0');
            // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            // var yyyy = today.getFullYear();
            // today = (dd-i) + '-' + mm + '-' + yyyy;
            //  console.log(today);
            // dateArray.push(today);
            // let date = today


            // // console.log(dateArray);
            // // console.log(priceArray);
            // }    
        }
        getData()
        },[])
        
    return (
      <div style={{margin:"5% 2%",textAlign:"center"}}>
          
        {
            data.loading?<div>loading........</div>:
            <Line 
            data = {{
                labels: data.dateArray,
                datasets: [{
                    label: `${props.coinname.toUpperCase()} USD`,
                    data: data.priceArray,
                    backgroundColor: [
                        `${props.color}`,
                       
                    ],
                    borderColor: [
                        `${props.colorborder}`,
                       
                    ],
                    borderWidth: 1
                }],
                options: {
                    scales: {
                        yAxes: [{
                            display: true,
                            ticks: {
                                callback: function(value, index, values){
                                    return value+"USD"
                                }
                            },
                            gridLines: {
                                display: true,
                                 color: "#FFFFFF"

                              }
                        }],
                        xAxes:[{
                            display: true,
                            gridLines: {
                                display: true,
                                 color: "#FFFFFF"

                              }
                        }]
                    }
                }
            }}
            

            height ={300}
            width = {200}
            options = {{
                maintainAspectRatio: false
            }}
        />
        }
            

      </div>
    );
}

export default Graph;