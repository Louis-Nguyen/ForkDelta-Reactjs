import React, { Component } from 'react'
import { withTranslation, useTranslation } from 'react-i18next';
import ImportAccount from './ImportAccount'
import LedgerNanoS from './LedgerNanoS';

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModalImportAccount: false,
            showLedgerNanoS: false
        }
    }
    closeImportAccount = (e) => {
        if (e == true) {
            this.setState({
                showModalImportAccount: false
            })
        }
        else {
            this.setState({
                showModalImportAccount: false,
            })
        }
    }
    checkUserLogin = ()=>{
        const { t, i18n } = this.props;
        var user = JSON.parse(JSON.stringify("user"));
        if(!user){
            return( <ul className="dropdown-menu" aria-labelledby="navbarDropdownXL">
            <li className="dropdown-item"><a >{t('menu.account.new-account')}</a></li>
            <li className="dropdown-item" onClick={() => this.setState({ showModalImportAccount: true })}><a >{t('menu.account.import-account')}</a></li>
            <li className="dropdown-item" onClick={() => this.setState({ showLedgerNanoS: true })}><a >{t('menu.account.ledger-nano-s')}</a></li>
            <li className="dropdown-item"><a >{t('menu.account.gas-price')}</a></li>
        </ul>)
        }
        else{
            return( <ul className="dropdown-menu" aria-labelledby="navbarDropdownXL">
            <li>{user}</li>
            <hr />
            <li className="dropdown-item"><a >{t('menu.account.new-account')}</a></li>
            <li className="dropdown-item" onClick={() => this.setState({ showModalImportAccount: true })}><a >{t('menu.account.import-account')}</a></li>
            <li className="dropdown-item" onClick={() => this.setState({ showLedgerNanoS: true })}><a >{t('menu.account.ledger-nano-s')}</a></li>
            <li className="dropdown-item"><a >{t('menu.account.etherscan-address')}</a></li>
            <li className="dropdown-item"><a >{t('menu.account.export-private-key')}</a></li>
            <li className="dropdown-item"><a >{t('menu.account.forget-account')}</a></li>
            <li className="dropdown-item"><a >{t('menu.account.gas-price')}</a></li>
        </ul>)
        }
    }
    render() {
        const { t, i18n } = this.props;
        return (
            <li className="nav-left dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownXL" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="far fa-user"></i><span >{t('menu.account.title')}</span></a>
                {this.checkUserLogin()}
                <ImportAccount show={this.state.showModalImportAccount} onHide={(e) => this.closeImportAccount(e)} />
                <LedgerNanoS  show={this.state.showLedgerNanoS} onHide={(e) => this.setState({showLedgerNanoS:false})}/>
            </li>
        )
    }
}

export default withTranslation('common')(Account)
