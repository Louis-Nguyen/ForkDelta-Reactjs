import React, { Component } from 'react'
import { withTranslation, useTranslation } from 'react-i18next';
import { Chart } from "react-google-charts";
class Price extends Component {
    render() {
        return (
            <div>
                <Chart
                   width="100%"
                   height="100%"
                   chartType="BarChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        [
                            '',
                            '',
                            '',
                            '',
                        ],
                        [1, 37.8, 80.8, 41.8],
                        [2, 30.9, 69.5, 32.4],
                        [3, 25.4, 57, 25.7],
                        [4, 11.7, 18.8, 10.5],
                        [5, 11.9, 17.6, 10.4],
                        [6, 8.8, 13.6, 7.7],
                        [7, 7.6, 12.3, 9.6],
                        [8, 12.3, 29.2, 10.6],
                        [9, 16.9, 42.9, 14.8],
                        [10, 12.8, 30.9, 11.6],
                        [11, 5.3, 7.9, 4.7],
                        [12, 6.6, 8.4, 5.2],
                        [13, 4.8, 6.3, 3.6],
                        [14, 4.2, 6.2, 3.4],
                    ]}
                    options={{
                        chart: {
                            title: 'Price',
                            subtitle: '(USD)',
                        },
                        backgroundColor: "#1e2b34"
                    }}
                    rootProps={{ 'data-testid': '3' }}
                />
            </div>
        )
    }
}

class Depth extends Component {
    render() {
        return (
            <div>
            <Chart
               width="100%"
               height="100%"
               chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={[
                    [
                        '',
                        '',
                        '',
                        '',
                    ],
                    [1, 37.8, 80.8, 41.8],
                    [2, 30.9, 69.5, 32.4],
                    [3, 25.4, 57, 25.7],
                    [4, 11.7, 18.8, 10.5],
                    [5, 11.9, 17.6, 10.4],
                    [6, 8.8, 13.6, 7.7],
                    [7, 7.6, 12.3, 9.6],
                    [8, 12.3, 29.2, 10.6],
                    [9, 16.9, 42.9, 14.8],
                    [10, 12.8, 30.9, 11.6],
                    [11, 5.3, 7.9, 4.7],
                    [12, 6.6, 8.4, 5.2],
                    [13, 4.8, 6.3, 3.6],
                    [14, 4.2, 6.2, 3.4],
                ]}
                options={{
                    chart: {
                        title: 'Sell',
                        subtitle: '(USD)',
                    },
                    backgroundColor: "#1e2b34"
                }}
                rootProps={{ 'data-testid': '3' }}
            />
        </div>
        )
    }
}

class PriceChart extends Component {

    render() {
        const { t, i18n } = this.props;
        return (
            <div>
                <div className="title-body">&nbsp;&nbsp;&nbsp;{t('main.modal.price-chart.title')}</div>
                <div className="card mt-3 tab-card price-chart">
                    <div className="card-header tab-card-header">
                        <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="one-tab" data-toggle="tab" href="#price" role="tab" aria-controls="One" aria-selected="true">{t('main.modal.price-chart.price')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="two-tab" data-toggle="tab" href="#depth" role="tab" aria-controls="Two" aria-selected="false">{t('main.modal.price-chart.depth')}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active p-3" id="price" role="tabpanel" aria-labelledby="one-tab">
                            <Price />
                        </div>
                        <div className="tab-pane fade p-3" id="depth" role="tabpanel" aria-labelledby="two-tab">
                            <Depth />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default withTranslation('common')(PriceChart)