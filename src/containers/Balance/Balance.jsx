import React, { Component } from 'react'
import { withTranslation, useTranslation } from 'react-i18next';

class Deposit extends Component {
    render() {
        const { t, i18n } = this.props;
        return (
            <div className="table-responsive">
                <table className="table table-borderless table-dark">
                    <thead>
                        <tr>
                            <th scope="col">{t('main.modal.balance.token')}</th>
                            <th scope="col">{t('main.modal.balance.wallet')}</th>
                            <th scope="col">{t('main.modal.balance.forkdelta')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>DAI</td>
                            <td>0.000</td>
                            <td>0.000</td>
                        </tr>
                        <tr>
                            <td colSpan={2}> <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={t('main.modal.balance.amount')}></input></td>
                            <td><button type="button" className="btn btn-primary">{t('main.modal.balance.deposit')}</button></td>
                        </tr>
                        <tr>
                            <td>ETH</td>
                            <td>0.000</td>
                            <td>0.000</td>
                        </tr>
                        <tr>
                            <td colSpan={2}> <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={t('main.modal.balance.amount')}></input></td>
                            <td><button type="button" className="btn btn-primary">{t('main.modal.balance.deposit')}</button></td>
                        </tr>
                        <tr>
                            <td colSpan={3}><small>Make sure DAI is the token you actually want to trade. Multiple tokens can share the same name.</small></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
class Withdraw extends Component {
    render() {
        const { t, i18n } = this.props;
        return (
            <div className="table-responsive">
                <table className="table table-borderless table-dark">
                    <thead>
                        <tr>
                            <th scope="col">{t('main.modal.balance.token')}</th>
                            <th scope="col">{t('main.modal.balance.wallet')}</th>
                            <th scope="col">{t('main.modal.balance.forkdelta')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>DAI</td>
                            <td>0.000</td>
                            <td>0.000</td>
                        </tr>
                        <tr>
                            <td colSpan={2}> <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={t('main.modal.balance.amount')}></input></td>
                            <td><button type="button" className="btn btn-primary">{t('main.modal.balance.withdraw')}</button></td>
                        </tr>
                        <tr>
                            <td>ETH</td>
                            <td>0.000</td>
                            <td>0.000</td>
                        </tr>
                        <tr>
                            <td colSpan={2}> <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={t('main.modal.balance.amount')}></input></td>
                            <td><button type="button" className="btn btn-primary">{t('main.modal.balance.withdraw')}</button></td>
                        </tr>
                        <tr>
                            <td colSpan={3}><small>Make sure DAI is the token you actually want to trade. Multiple tokens can share the same name.</small></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
class Transfer extends Component {
    render() {
        const { t, i18n } = this.props;
        return (
            <div className="table-responsive">
                <table className="table table-borderless table-dark">
                    <thead>
                        <tr>
                            <th scope="col">{t('main.modal.balance.token')}</th>
                            <th scope="col">{t('main.modal.balance.wallet')}</th>
                            <th scope="col">{t('main.modal.balance.forkdelta')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>DAI</td>
                            <td>0.000</td>
                            <td>0.000</td>
                        </tr>
                        <tr>
                        <td > <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={t('main.modal.balance.amount')}></input></td>
                            <td > <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={t('main.modal.balance.address')}></input></td>
                            <td><button type="button" className="btn btn-primary">{t('main.modal.balance.transfer')}</button></td>
                        </tr>
                        <tr>
                            <td>ETH</td>
                            <td>0.000</td>
                            <td>0.000</td>
                        </tr>
                        <tr>
                            <td > <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={t('main.modal.balance.amount')}></input></td>
                            <td > <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={t('main.modal.balance.address')}></input></td>
                            <td><button type="button" className="btn btn-primary">{t('main.modal.balance.transfer')}</button></td>
                        </tr>
                        <tr>
                            <td colSpan={3}><small>Make sure DAI is the token you actually want to trade. Multiple tokens can share the same name.</small></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
class Balance extends Component {
    render() {
        const { t, i18n } = this.props;
        return (
            <div className="card bg-dark text-white mt-3 tab-card balance">
                <div className="card-header tab-card-header">
                    <div className="title">Balance</div>
                    <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link" id="one-tab" data-toggle="tab" href="#one" role="tab" aria-controls="One" aria-selected="true">Deposit</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="Two" aria-selected="false">Withdraw</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="three-tab" data-toggle="tab" href="#three" role="tab" aria-controls="Three" aria-selected="false">Transfer</a>
                        </li>
                    </ul>
                </div>
                <div className="tab-content balance-content" id="myTabContent">
                    <div className="tab-pane fade show active p-3" id="one" role="tabpanel" aria-labelledby="one-tab">
                        <Deposit t={t} i18n={i18n} />
                    </div>
                    <div className="tab-pane fade p-3" id="two" role="tabpanel" aria-labelledby="two-tab">
                        <Withdraw t={t} i18n={i18n} />
                    </div>
                    <div className="tab-pane fade p-3" id="three" role="tabpanel" aria-labelledby="three-tab">
                        <Transfer t={t} i18n={i18n} />
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation('common')(Balance)


