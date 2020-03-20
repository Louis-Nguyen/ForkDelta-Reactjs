import React, { Component } from 'react'
import { withTranslation, useTranslation } from 'react-i18next';
import datafake from './MyTransactionFakeData.json'

class Important extends Component {
    render() {
        let renderImportant = datafake.important.map((item,index)=>{
           return(<div key={index}><div style={{color:'red', fontWeight:'bold'}}>{item.title}</div>
            <div>{item.content}</div></div>)
        })
        return (
            <div className="important-transactions scroll-bar-custom">
                <a href="https://t.me/ForkDeltaChat" target="_blank"><img alt="Chat on Telegram" src="https://img.shields.io/badge/chat-on%20Telegram-0088cc.svg"></img></a>
                &nbsp;&nbsp;&nbsp;
                <a href="https://www.reddit.com/r/ForkDelta" target="_blank"><img alt="Join us on Reddit" src="https://img.shields.io/badge/reddit-ForkDelta-red.svg"></img></a>
                {renderImportant}
            </div>
        )
    }
}

class Trades extends Component {
    render() {
        const { t, i18n } = this.props;
        return (
            <div className="table-responsive">
            <table className="table table-borderless table-dark">
                <thead>
                    <tr>
                        <th scope="col">{t('main.modal.my-transactions.trades.transaction')}</th>
                        <th scope="col">{t('main.modal.my-transactions.trades.type')}</th>
                        <th scope="col">{t('main.modal.my-transactions.DAI')}</th>
                        <th scope="col">{t('main.modal.my-transactions.ETH')}</th>
                        <th scope="col">{t('main.modal.my-transactions.DAI/ETH')}</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
        )
    }
}
class Orders extends Component {
    render() {
        const { t, i18n } = this.props;
        return (
            <div className="table-responsive">
            <table className="table table-borderless table-dark">
                <thead>
                    <tr>
                        <th scope="col">{t('main.modal.my-transactions.DAI/ETH')}</th>
                        <th scope="col">{t('main.modal.my-transactions.orders.availabel-volume')}</th>
                        <th scope="col">{t('main.modal.my-transactions.orders.expires-in')}</th>
                        <th scope="col">{t('main.modal.my-transactions.orders.cancel')}</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
        )
    }
}
class Funds extends Component {
    render() {
        const { t, i18n } = this.props;
        return (
            <div className="table-responsive">
            <table className="table table-borderless table-dark">
                <thead>
                    <tr>
                        <th scope="col">{t('main.modal.my-transactions.funds.transaction')}</th>
                        <th scope="col">{t('main.modal.my-transactions.funds.type')}</th>
                        <th scope="col">{t('main.modal.my-transactions.DAI')}</th>
                        <th scope="col">{t('main.modal.my-transactions.ETH')}</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
        )
    }
}
class MyTransactions extends Component {
    render() {
        const { t, i18n } = this.props;
        return (
            <div>
                <div className="title-body">&nbsp;&nbsp;&nbsp;{t('main.modal.my-transactions.title')}</div>
                <div className="card mt-3 tab-card">
                    <div className="card-header tab-card-header price-chart">
                        <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="one-tab" data-toggle="tab" href="#important" role="tab"  >{t('main.modal.my-transactions.important')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="two-tab" data-toggle="tab" href="#trades" role="tab" >{t('main.modal.my-transactions.trades.title')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="three-tab" data-toggle="tab" href="#orders" role="tab" >{t('main.modal.my-transactions.orders.title')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="four-tab" data-toggle="tab" href="#funds" role="tab" >{t('main.modal.my-transactions.funds.title')}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active p-3" id="important" role="tabpanel" aria-labelledby="one-tab">
                            <Important />
                        </div>
                        <div className="tab-pane fade p-3" id="trades" role="tabpanel" aria-labelledby="two-tab">
                            <Trades t={t} i18n={i18n}/>
                        </div>
                        <div className="tab-pane fade p-3" id="orders" role="tabpanel" aria-labelledby="three-tab">
                            <Orders t={t} i18n={i18n} />
                        </div>
                        <div className="tab-pane fade p-3" id="funds" role="tabpanel" aria-labelledby="four-tab">
                            <Funds t={t} i18n={i18n} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withTranslation('common')(MyTransactions)