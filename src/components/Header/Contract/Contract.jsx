import React, { Component } from 'react'
import { withTranslation, useTranslation } from 'react-i18next';

 class Contract extends Component {
    render() {
        const { t, i18n } = this.props;
        return (
            <li className="nav-left dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownXL" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-file-alt"></i><span >{t('menu.contract.title')}</span></a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownXL">
                    <li className="dropdown-item"><a >{t('menu.contract.connection')}</a></li>
                    <li className="dropdown-item"><a >{t('menu.contract.etherscan-contract')}</a></li>
                    <li className="dropdown-item"><a >{t('menu.contract.smart-contract-overview')}</a></li>
                    <hr />
                </ul>
            </li>
        )
    }
}
export default withTranslation('common')(Contract)
