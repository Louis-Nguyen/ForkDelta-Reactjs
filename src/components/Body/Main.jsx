import React, { Component } from 'react'
import Balance from '../../containers/Balance/Balance'
import Sell from '../../containers/Sell/Sell'
import OrderBook from '../../containers/OrderBook/OrderBook'
import PriceChat from '../../containers/PriceChart/PriceChat'
import YourTransaction from '../../containers/YourTransactions/YourTransaction'
import TradeVolume from '../../containers/TradesVolume/TradeVolume'
import Updates from '../../containers/Updates/Updates'
export default class Main extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-3 col-md-12">
                    <Balance />
                    <Sell />
                </div>
                <div className="col-lg-3 col-md-12">
                    <OrderBook />
                </div>
                <div className="col-lg-4 col-md-12">
                    <PriceChat />
                    <YourTransaction />
                </div>
                <div className="col-lg-2 col-md-12">
                    <TradeVolume />
                    <Updates />
                </div>
            </div>
        )
    }
}
