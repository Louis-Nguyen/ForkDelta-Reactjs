import React, { Component } from 'react'
import '../../assets/css/style.scss'
import { observer } from 'mobx-react';
import HeaderStore from '../../store/HeaderStore/HeaderStore';
import { withTranslation, useTranslation } from 'react-i18next';
import Account from "./Account/Account"
import Help from './Help/Help';
import Contract from './Contract/Contract';
@observer
class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            token: {
                address: '',
                name: '',
                fullName: '',
                decimal: ''
            },
        }
    }
    componentDidMount() {
        HeaderStore.getTokens();
    }

    onClickTokens = (item) => {
        this.setState({
            token: item
        })
    }
    render() {
        const { t, i18n } = this.props;
        let showInfoTokens = "";
        let showTokens = "";
        showInfoTokens = HeaderStore.AllTokens.map((item, index) => {
            return <li className="dropdown-item" onClick={() => this.onClickTokens(item)}><a ><span><b>{item.name.trim()}</b>&nbsp;&nbsp;{item.fullName.trim()}</span></a></li>
        });
        showTokens = HeaderStore.AllTokens.map((item, index) => {
            return <li className="dropdown-item" onClick={() => this.onClickTokens(item)}><a ><span><b>{item.name.trim()}</b></span></a></li>
        });
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img src="./images/title.svg" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto dropdown">
                            <a className="dropdown-toggle title-token" data-toggle="dropdown">{this.state.token.name == "" ? HeaderStore.DefaultToken.name : this.state.token.name}</a>
                            <ul className="dropdown-menu list-group-dropdown" id="infotoken">
                                {showInfoTokens}
                            </ul>
                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                        <ul className="nav navbar-nav mr-1">
                            <li className="nav-left"> <a href="#" className="nav-item nav-link"><i className="fa fa-info-circle"></i><span>{t('menu.faqs')}</span></a></li>
                            <Help />
                            <li className="nav-left dropdown">
                                <a className=" dropdown-toggle nav-item nav-link" data-toggle="dropdown"><i className="fa fa-coins"></i><span >{t('menu.tokens')}</span></a>
                                    <ul className="dropdown-menu list-group-dropdown" id="tokens">
                                        {showTokens}
                                    </ul>
                            </li>
                            <Contract />
                            <li className="nav-left dropdown">
                                    <a className="dropdown-toggle nav-item nav-link" data-toggle="dropdown"><i className="fa fa-language"></i>{t('menu.language')}</a>
                                    <ul className="dropdown-menu" id="language">
                                        <li className="dropdown-item" onClick={() => i18n.changeLanguage('en')}><a ><span>English</span></a></li>
                                        <li className="dropdown-item" onClick={() => i18n.changeLanguage('chn')}><a  ><span>中文</span></a></li>
                                        <li className="dropdown-item" onClick={() => i18n.changeLanguage('fra')}><a  ><span>Français</span></a></li>
                                        <li className="dropdown-item" onClick={() => i18n.changeLanguage('esp')}><a  ><span>Español</span></a></li>
                                        <li className="dropdown-item" onClick={() => i18n.changeLanguage('kor')}><a  ><span>한국어</span></a></li>
                                    </ul>
                            </li>
                            <Account />
                        </ul>
                    </div>

                </div>
            </nav>
        )
    }
}
export default withTranslation('common')(Navbar)
