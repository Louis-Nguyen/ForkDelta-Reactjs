import React, { Component } from 'react'

export default class Updates extends Component {
    render() {
        return (
            <div className="card mt-3 tab-card">
            <div className="card-header tab-card-header">
            <div className="">Updates</div>
                <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link" id="one-tab" data-toggle="tab" href="#one" role="tab" aria-controls="One" aria-selected="true">Important</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="Two" aria-selected="false">Twitter</a>
                    </li>
                </ul>
            </div>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active p-3" id="one" role="tabpanel" aria-labelledby="one-tab">
                   
                </div>
                <div className="tab-pane fade p-3" id="two" role="tabpanel" aria-labelledby="two-tab">
                  
                </div>
            </div>
        </div>
        )
    }
}
