import React, { Component } from 'react'
import UpdateFakeData from './UpdateFakeData.json'
import { withTranslation, useTranslation } from 'react-i18next';
class Updates extends Component {

    render() {
        const { t, i18n } = this.props;
        let renderUpdateFake = UpdateFakeData.map((item, index) => {
            return (<tr key={index} >
              <td style={{fontSize:'14px', fontWeight:'bold'}}>{item.Name}</td>
            <td>{item.content}</td>
            </tr>)
        });
        return (
            <div>
                <div className="title-body">&nbsp;&nbsp;&nbsp;{t('main.modal.updates.title')}
                        </div>
                <div className="table-responsive updates scroll-bar-custom">
                    <table className="table table-hover table-dark">
                        <tbody >
                            {renderUpdateFake}
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}
export default withTranslation('common')(Updates)
