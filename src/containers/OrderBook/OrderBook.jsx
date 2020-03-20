import React, { Component } from 'react'
import orderbookdata from './OrderBookFakeData.json'
import { withTranslation, useTranslation } from 'react-i18next';

 class OrderBook extends Component {
    render() {
        const { t, i18n } = this.props;
        let renderOrderBookFake = orderbookdata.map((item, index) => {
            return (<tr key={index}>
                <td style={{color:'red'}}>{item.number1}</td>
                <td>{item.number2}</td>
                <td>{item.number3}</td>
            </tr>)
        })
        return (
            <div>
                <div className="title-body">&nbsp;&nbsp;&nbsp;{t('main.modal.order-book.title')}</div>
                <div className="table-responsive scroll-bar-custom orderbook">
                    <table className="table table-hover table-dark">
                        <tbody>
                            {renderOrderBookFake}
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

export default withTranslation('common')(OrderBook)