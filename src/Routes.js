import React from 'react'
import {Route, Switch} from 'react-router-dom'
import App from './App'
import Graph from './components/Graph/Graph'
import NewsDetails from './components/News/NewsDetails'
import Market from './components/Market/Market'
import Event from './components/Event/Event'
import ExchangeRates from './components/ExchangeRates/ExchangeRates'
import Derivatives from './components/Derivatives/Derivatives'
import Search from './components/Search/Search'
import CryptoSearch from './components/CryptoSearch/CryptoSearch'

const Routes = () => {
    return (
        <Switch>
            <Route exact path = "/" component={App} />
            <Route path = "/graph" component={Graph} />
            <Route path="/newsdetails" component={NewsDetails} />
            <Route path="/market" component = {Market} />
            <Route path="/event" component={Event} />
            <Route path="/exchangerates" component={ExchangeRates} />
            <Route path="/derivatives" component = {Derivatives} />
            <Route path="/search" component={Search} />
            <Route path="/cryptosearch/:name" component={CryptoSearch} />
        </Switch>
    );
}

export default Routes;