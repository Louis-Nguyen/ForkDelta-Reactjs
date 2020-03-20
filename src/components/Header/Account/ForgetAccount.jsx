import React, { Component } from 'react'
import Modal from 'react-bootstrap4-modal';
export default class ForgetAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    onCancelForm = () => {
        this.props.onHide();
    }
    onForgetAccount = ()=>{
        sessionStorage.removeItem("user");
        this.props.onHide();
    }
    // componentWillReceiveProps(nextProps) {
    //     // You don't have to do this check first, but it can help prevent an unneeded render
    //     if (nextProps.showError !== this.state.showError) {
    //       this.setState({ showError: true });
    //     }
    //   }
    render() {
        return (
            <Modal visible={this.props.show}  >
                <div className="modal-header">
                    <h5 className="modal-title"><i className="fas fa-exclamation-triangle"></i>&nbsp;Forget account?</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.onCancelForm()}>
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div>
                        You are about to remove an Ethereum account:
                    </div>
                    <div>
                        {this.props.user.Address}
                    </div>
                    <div><b>
                        To withdraw funds from this account in the future, you will need the Private Key. SAVE it now!
                    </b> </div>
                    <div><span><b>Private Key:</b></span><small>{this.props.user.Keyprivate}</small></div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-warning" onClick={() => this.onForgetAccount()}>Yes, forget account </button>
                    <button type="button" className="btn btn-primary" onClick={() => this.onCancelForm()}>No </button>
                </div>
            </Modal>
        )
    }
}
