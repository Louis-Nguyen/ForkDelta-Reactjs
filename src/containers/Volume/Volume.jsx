import React, { Component } from 'react'
import volume from './VolumeFakeData.json'
import { withTranslation, useTranslation } from 'react-i18next';
class Volume extends Component {

    render() {
        const { t, i18n } = this.props;
        let renderVolumeFake = volume.map((item, index) => {
            return (<tr key={index}>
                <td>
                    <div className="title-volume">{item.name}</div>
                    <div>{item.fullName}</div>
                    <div>{item.bid}</div>
                    <div>{item.ask}</div>

                </td>
                <td className="">
                    <div>{item.decimal}</div>
                    <div>{item.daily}</div>

                </td>
            </tr>)
        });

        return (
            <div>
                <div className="title-body">&nbsp;&nbsp;&nbsp;{t('main.modal.volume.title')}
                        </div>
                <div>
                    <input type="text" className="form-control input-dark" id="exampleInputPassword1" placeholder="Search for name, symbol, or address" ></input>
                </div>
                <div className="table-responsive volume scroll-bar-custom">
                    <table className="table table-hover table-dark">
                        <tbody >
                            {renderVolumeFake}
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}
export default withTranslation('common')(Volume)
