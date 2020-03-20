import React, { Component } from 'react'
import { withTranslation, useTranslation } from 'react-i18next';
import ImportAccount from './ImportAccount'
import LedgerNanoS from './LedgerNanoS';
import HeaderStore from '../../../store/HeaderStore/HeaderStore';
import ModalCommon from '../ModalCommon';
import ForgetAccount from './ForgetAccount';

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModalImportAccount: false,
            showLedgerNanoS: false,
            showModalInfoNewAccount: false,
            showExportPrivateKey: false,
            showForgetAccount: false,
            test: false
        }
    }
    randomStr(len, arr) {
        var ans = '';
        for (var i = len; i > 0; i--) {
            ans +=
                arr[Math.floor(Math.random() * arr.length)];
        }
        return ans;
    }
    createNewAccount = () => {
        var data = {};
        data.Address = 'Ox' + this.randomStr(43, "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz");
        data.Keyprivate = this.randomStr(64, "0123456789abcdefghiklmnopqrstuvwxyz");
        var result = HeaderStore.fetchCreateAccount(data);
    }
    checkUserLogin = (user) => {
        const { t, i18n } = this.props;
        if (user.Address == "") {
            return (<ul className="dropdown-menu" aria-labelledby="navbarDropdownXL">
                <li className="dropdown-item" onClick={() => this.createNewAccount()}><a >{t('menu.account.new-account')}</a></li>
                <li className="dropdown-item" onClick={() => this.setState({ showModalImportAccount: true })}><a >{t('menu.account.import-account')}</a></li>
                <li className="dropdown-item" onClick={() => this.setState({ showLedgerNanoS: true })}><a >{t('menu.account.ledger-nano-s')}</a></li>
                <li className="dropdown-item"><a >{t('menu.account.gas-price')}</a></li>
            </ul>)
        }
        else {
            return (<ul className="dropdown-menu" aria-labelledby="navbarDropdownXL">
                <li><small style={{ display: 'inline-block', width: '400px', height: '1.2em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.Address}</small></li>
                <hr />
                <li className="dropdown-item" onClick={() => this.createNewAccount()}><a >{t('menu.account.new-account')}</a></li>
                <li className="dropdown-item" onClick={() => this.setState({ showModalImportAccount: true })}><a >{t('menu.account.import-account')}</a></li>
                <li className="dropdown-item" onClick={() => this.setState({ showLedgerNanoS: true })}><a >{t('menu.account.ledger-nano-s')}</a></li>
                <li className="dropdown-item"><a style={{ textDecoration: 'none', color: 'black' }} href={"https://etherscan.io/address/" + user.Address} target="_blank" >{t('menu.account.etherscan-address')}</a></li>
                <li className="dropdown-item" onClick={() => this.setState({ showExportPrivateKey: true })}><a >{t('menu.account.export-private-key')}</a></li>
                <li className="dropdown-item" onClick={() => this.setState({ showForgetAccount: true })}><a >{t('menu.account.forget-account')}</a></li>
                <li className="dropdown-item"><a >{t('menu.account.gas-price')}</a></li>
            </ul>)
        }
    }
    render() {
        var user = JSON.parse(sessionStorage.getItem("user"));
        if (!user) {
            user = {
                Address: "",
                Keyprivate: ""
            }
        }
        const { t, i18n } = this.props;
        return (
            <li className="nav-left dropdown">
                <a className="nav-link dropdown-toggle my-dropdown-toggle" href="#" id="navbarDropdownXL" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <div>{user.Address == "" ? (<span><i className="far fa-user"></i> &nbsp;{t('menu.account.title')}</span>) :
                        (
                            <span>
                                <div style={{ display: 'inline-block', width: '9em', height: '1.2em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.Address}</div>
                                <span className="badge-1">0.000 ETH</span>
                                <span className="badge-2">ForkDelta via MEW API (Private Key)</span>
                            </span>)
                    }</div></a>
                {this.checkUserLogin(user)}
                <ImportAccount show={this.state.showModalImportAccount} onHide={() => this.setState({ showModalImportAccount: !this.state.showModalImportAccount })} />
                <LedgerNanoS show={this.state.showLedgerNanoS} onHide={(e) => this.setState({ showLedgerNanoS: !this.state.showLedgerNanoS })} />
                <ModalCommon onHide={() => this.setState({ showModalInfoNewAccount: !this.state.showModalInfoNewAccount })} show={this.state.showModalInfoNewAccount} modalTitle="Error" modalBody="The specified address is invalid." modalFooter="OK" />
                <ModalCommon onHide={() => this.setState({ showExportPrivateKey: !this.state.showExportPrivateKey })} show={this.state.showExportPrivateKey} modalTitle="Infomation Account" modalBody={"For account " + user.Address + ", the private key is" + user.Keyprivate} modalFooter="OK" />
                <ForgetAccount onHide={() => this.setState({ showForgetAccount: !this.state.showForgetAccount })} show={this.state.showForgetAccount} user={user} />
            </li>
        )
    }
}

export default withTranslation('common')(Account)
