import React, { Component } from 'react'
import Modal from 'react-bootstrap4-modal';
export default class LedgerNanoS extends Component {
    onCancelForm = () => {
        this.props.onHide();
    }
    render() {
        return (
            <Modal visible={this.props.show}  >
                <div className="modal-header">
                    <h5 className="modal-title">Ledger</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.onCancelForm()}>
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div>
                        <h3>Instructions</h3>
                        <ol>
                            <li>Plug in your Ledger Nano S.</li>
                            <li>On the Ledger Nano S, open the Ethereum app.</li>
                            <li>On the Ledger Nano S, go to "Settings" and turn on "Browser" and "Contract" modes.</li>
                            <li>Refresh ForkDelta.</li>
                            <li>Your Ledger Nano S address will appear in the account dropdown automatically, with a green "Ledger" box next to it.</li>
                            <li>When you deposit, withdraw, place an order, or trade, approve the transaction using your Ledger Nano S.</li>
                        </ol>
                    </div>
                </div>
            </Modal>
        )
    }
}
