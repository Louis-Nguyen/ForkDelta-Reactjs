import React, { Component } from 'react'

export default class PriceChat extends Component {
    render() {
        return (
            <div className="card mt-3 tab-card">
            <div className="card-header tab-card-header">
            <div className="title">Price Chat</div>
                <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link" id="one-tab" data-toggle="tab" href="#price" role="tab" aria-controls="One" aria-selected="true">Price</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="two-tab" data-toggle="tab" href="#depth" role="tab" aria-controls="Two" aria-selected="false">Depth</a>
                    </li>
                </ul>
            </div>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active p-3" id="price" role="tabpanel" aria-labelledby="one-tab">
                   
                </div>
                <div className="tab-pane fade p-3" id="depth" role="tabpanel" aria-labelledby="two-tab">
                   
                </div>
            </div>
        </div>
        )
    }
}
