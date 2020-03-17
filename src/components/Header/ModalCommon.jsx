import React, { Component } from 'react'
import Modal from 'react-bootstrap4-modal';
export default class ModalCommon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showError: false
        }
    }
    onCancelForm = () => {
        this.setState({
            showError: false
        })
    }
    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.showError !== this.state.showError) {
          this.setState({ showError: true });
        }
      }

    render() {
        return (
            <Modal visible={this.state.showError}  >
                <div className="modal-header">
                    <h5 className="modal-title"><i class="fas fa-times-circle"></i>&nbsp;{this.props.modalTitle}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>this.onCancelForm()}>
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div>
                        {this.props.modalBody}
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={() => this.onCancelForm()}>
                        {this.props.modalFooter}
                    </button>
                </div>
            </Modal>
        )
    }
}
