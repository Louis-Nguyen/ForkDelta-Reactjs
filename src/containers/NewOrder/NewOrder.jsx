import React, { Component } from 'react'
import { withTranslation, useTranslation } from 'react-i18next';

class Buy extends Component {
    render() {
        const { t, i18n } = this.props;
        return (
            <div className="table-responsive">
                <table className="table table-borderless table-dark">
                    <tbody>
                        <tr>
                            <td>DAI</td>
                            <td colSpan={2}> <input type="text" className="form-control input-dark"  placeholder={t('main.modal.new-order.amount-to-buy')}></input></td>
                        </tr>
                        <tr>
                            <td>DAT/ETH</td>
                            <td colSpan={2}> <input type="text" className="form-control input-dark" placeholder={t('main.modal.new-order.price')}></input></td>
                        </tr>
                        <tr>
                            <td>ETH</td>
                            <td colSpan={2}> <input type="text" className="form-control input-dark"  placeholder={t('main.modal.new-order.total')}></input></td>
                        </tr>
                        <tr>
                            <td>{t('main.modal.new-order.expires')}</td>
                            <td colSpan={2}> <input type="text" className="form-control input-dark"  defaultValue="10000"></input></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan={2}><button style={{backgroundColor:'#4da53c'}} className="btn button-common">{t('main.modal.new-order.buy')}</button> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class Sell extends Component {
    render() {
        const { t, i18n } = this.props;
        return (
            <div className="table-responsive">
            <table className="table table-borderless table-dark">
                <tbody>
                    <tr>
                        <td>DAI</td>
                        <td colSpan={2}> <input type="text" className="form-control input-dark"  placeholder={t('main.modal.new-order.amount-to-sell')}></input></td>
                    </tr>
                    <tr>
                        <td>DAT/ETH</td>
                        <td colSpan={2}> <input type="text" className="form-control input-dark" placeholder={t('main.modal.new-order.price')}></input></td>
                    </tr>
                    <tr>
                        <td>ETH</td>
                        <td colSpan={2}> <input type="text" className="form-control input-dark"  placeholder={t('main.modal.new-order.total')}></input></td>
                    </tr>
                    <tr>
                        <td>{t('main.modal.new-order.expires')}</td>
                        <td colSpan={2}> <input type="text" className="form-control input-dark" id=""  defaultValue="10000" ></input></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={2}><button  style={{backgroundColor:'#ff6939'}} className="btn  button-common">{t('main.modal.new-order.sell')}</button> </td>
                    </tr>
                </tbody>
            </table>
        </div>
        )
    }
}
class NewOrder extends Component {
    render() {
        const { t, i18n } = this.props;
        return (
            <div>
                <div className="title-body">&nbsp;&nbsp;&nbsp;{t('main.modal.new-order.title')}</div>
                <div className="card bg-dark text-white mt-3 tab-card new-order">
                    <div className="card-header tab-card-header ">
                        <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="one-tab" data-toggle="tab" href="#buy" role="tab" aria-controls="One" aria-selected="true">{t('main.modal.new-order.buy')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="two-tab" data-toggle="tab" href="#sell" role="tab" aria-controls="Two" aria-selected="false">{t('main.modal.new-order.sell')}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content new-order-content scroll-bar-custom" id="myTabContent">
                        <div className="tab-pane fade show active p-3" id="buy" role="tabpanel" aria-labelledby="one-tab">
                            <Buy t={t} i18n={i18n} />
                        </div>
                        <div className="tab-pane fade p-3" id="sell" role="tabpanel" aria-labelledby="two-tab">
                            <Sell t={t} i18n={i18n} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation('common')(NewOrder)