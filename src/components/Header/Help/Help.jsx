import React, { Component } from 'react'
import { withTranslation, useTranslation } from 'react-i18next';

 class Help extends Component {
    render() {
        const { t, i18n } = this.props;
        return (
            <li className="nav-left dropdown">
                <a className="nav-link dropdown-toggle nav-item" id="navbarDropdownXL" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-book"></i><span >{t('menu.help.title')}</span></a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownXL">
                    <li className="dropdown-item"><a ><i className="fa fa-question-circle"></i>&nbsp;{t('menu.help.beginner-guide')}</a></li>
                    <li className="dropdown-item"><a ><i className="fa fa-desktop"></i>&nbsp;{t('menu.help.connect-to-etherum-screencast')}</a></li>
                    <li className="dropdown-item"><a ><i className="fa fa-desktop"></i>&nbsp;{t('menu.help.deposit-screencast')}</a></li>
                    <li className="dropdown-item"><a ><i className="fa fa-desktop"></i>&nbsp;{t('menu.help.withdraw-screencast')}</a></li>
                    <li className="dropdown-item"><a ><i className="fa fa-desktop"></i>&nbsp;{t('menu.help.order-screencast')}</a></li>
                    <li className="dropdown-item"><a ><i className="fa fa-desktop"></i>&nbsp;{t('menu.helpcancel-screencast')}</a></li>
                    <li className="dropdown-item"><a ><i className="fa fa-desktop"></i>&nbsp;{t('menu.help.trade-screencast')}</a></li>
                    <li className="dropdown-item"><a ><i className="fa fa-money-bill-alt"></i>&nbsp;{t('menu.help.fees')}</a></li>
                    <li className="dropdown-item"><a ><i className="fab fa-reddit-alien"></i>&nbsp;{t('menu.help.ask-the-community')}</a></li>
                </ul>
            </li>
        )
    }
}
export default withTranslation('common')(Help)
