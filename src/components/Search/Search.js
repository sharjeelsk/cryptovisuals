import React from 'react'
import "./Search.scss"
import Header from '../Header/Header'
import "../ExchangeRates/ExchangeRates.scss"
import { useForm } from "react-hook-form";
import axios from 'axios'
const Search = (props) => {
    const { register, handleSubmit,errors } = useForm();
    const [state, setState] = React.useState("")
    const onSubmit = async (data, e) => {
        let value = data.cryptocurrency.toLowerCase()
        let response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${value}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h`)
        if(response.data.length>0){
        props.history.push(`/cryptosearch/${value}`)
        }else{
            setState("Provide a Valid Coin")
        }
    }
    return (
        <div style={{textAlign:"center"}}>
        <Header id="6" />
        <h1 class="exchangerateheading">Exchange Rates</h1>
        <form onSubmit={handleSubmit(onSubmit)}>

 <div class="row">
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 coldiv">
    <h2>Eg.:- <span style={{color:"darkred"}}>bitcoin</span></h2>
    <label>Enter the cryptocurrency : </label>
    {console.log(errors)}
  <input name="cryptocurrency" placeholder="Enter Cryptocurrency" class={errors.cryptocurrency?`inp error`:`inp`} ref={register({required:true})} />
  {errors.cryptocurrency?<div class="errordiv"><span>A field is required with a length of 3</span></div>:null}
  </div>         

 
  <div class="col-12">
  <button type="submit" class="btn-grad" style={{margin:"3% auto"}}>Submit</button>
  <div style={{marginTop:"5%"}}>
  {
   <h2><span style={{color:"darkred"}}>{state}</span></h2>
  }
  </div>
  </div>
  </div>

</form>
    </div>
    );
}

export default Search;