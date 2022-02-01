import React from 'react'
import Header from '../Header/Header'
import "./ExchangeRates.scss"
import { useForm } from "react-hook-form";
import axios from 'axios'
const ExchangeRates = () => {
    const { register, handleSubmit,errors } = useForm();
    const [state, setState] = React.useState({value:"",loading:false,code:"" })
    const onSubmit = async (data, e) => {
        let fromVal = data.cryptocode.toUpperCase();
        let toVal = data.currencycode.toUpperCase()
        setState({loading:true})
        const response = await axios.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromVal}&to_currency=${toVal}&apikey=JIS3FACOMOLNM4AZ`)
        let ob= response.data[Object.keys(response.data)[0]];
        console.log(ob)
       if(ob === "Invalid API call. Please retry or visit the documentation (https://www.alphavantage.co/documentation/) for CURRENCY_EXCHANGE_RATE."){
           setState({value:"Invalid Details",loading:false,code:""})
       }else{
            let code = ob[Object.keys(ob)[2]] 
           let val = ob[Object.keys(ob)[4]]
        setState({value:val,loading:false,code})
       }
}
    return (
        <div>
            <Header id="4" />
            <h1 class="exchangerateheading">Exchange Rates</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

     <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 coldiv ">
        <h2>Eg.:- BTC <span style={{color:"darkred"}}>( bitcoin )</span></h2>
        <label>Enter the cryptocurrency code which you want to convert: </label>
      <input name="cryptocode" placeholder="Enter Code" class={errors.cryptocode?`inp error`:`inp`} ref={register({required:true})} />
      {errors.cryptocode?<div class="errordiv"><span>A field is required with a length of 3</span></div>:null}
      </div>         

      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 coldiv">
      <h2>Eg.:- USD <span style={{color:"darkred"}}>( American Dollar )</span></h2>
      <label>Enter the currency code in which you want to convert crypto: </label>
      <input name="currencycode" class={errors.cryptocode?`inp error`:`inp`}  placeholder="Enter Code" ref={register({required:true})} />
      {errors.currencycode?<div class="errordiv"><span>A field is required with a length of 3</span></div>:null}
      </div>
      <div class="col-12">
      <button type="submit" class="btn-grad">Submit</button>
      <div style={{marginTop:"5%"}}>
      {
        state.loading?<div>Loading....</div>:<h2><span style={{color:"darkred"}}>{state.code}</span> {state.value}</h2>
      }
      </div>
      </div>
      </div>

    </form>
        </div>
    );
}

export default ExchangeRates;