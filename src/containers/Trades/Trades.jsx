import React, { Component } from 'react'
import tradefakedata from './TradesFakeData.json'
import { withTranslation, useTranslation } from 'react-i18next';

class Trades extends Component {
    render() {
        const { t, i18n } = this.props;
        let renderTradeFake = tradefakedata.map((item, index) => {
            return (<tr key={index}>
                <td style={{ color: 'red' }}>{item.ethdai}</td>
                <td>{item.dai}</td>
                <td>{item.eth}</td>
            </tr>)
        })
        return (
            <div>
                <div className="title-body">&nbsp;&nbsp;&nbsp;{t('main.modal.trades.title')}</div>
                <div className="table-responsive scroll-bar-custom orderbook">
                    <table className="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">{t('main.modal.trades.DAI/ETH')}</th>
                                <th scope="col">{t('main.modal.trades.DAI')}</th>
                                <th scope="col">{t('main.modal.trades.ETH')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTradeFake}
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

export default withTranslation('common')(Trades)