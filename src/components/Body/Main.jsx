import React, { Component } from 'react'
import Balance from '../../containers/Balance/Balance'
import OrderBook from '../../containers/OrderBook/OrderBook'
import Volume from '../../containers/Volume/Volume'
import NewOrder from '../../containers/NewOrder/NewOrder'
import PriceChart from '../../containers/PriceChart/PriceChart'
import MyTransactions from '../../containers/MyTransactions/MyTransactions'
import Trades from '../../containers/Trades/Trades'
import Updates from '../../containers/Updates/Updates'
export default class Main extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-3 col-md-12 body-custom">
                    <Balance />
                    <Volume />
                </div>
                <div className="col-lg-2 col-md-12 body-custom">
                    <OrderBook />
                    <NewOrder />
                </div>
                <div className="col-lg-4 col-md-12 body-custom">
                    <PriceChart />
                    <MyTransactions />
                </div>
                <div className="col-lg-3 col-md-12 body-custom">
                    <Trades />
                    <Updates />
                </div>
            </div>
        )
    }
}
