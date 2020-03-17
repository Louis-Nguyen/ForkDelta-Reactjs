import React, { Component } from 'react'
import Modal from 'react-bootstrap4-modal';
import HeaderStore from '../../../store/HeaderStore/HeaderStore';
import ModalCommon from '../ModalCommon';

export default class ImportAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Address:'',
            Keyprivate:'',
            showError: false
        }
    }
    onChangeInput = (e) =>{
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onCancelForm = ()=>{
       this.props.onHide(true);
   }
   onSubmitForm = (e) =>{
    e.preventDefault();
    const regexp = /Ox[A-Za-z0-9]{42,100}$/;
    if(regexp.exec(this.state.Address) == null){ 
        this.setState({
            showError: true
        })
        
    }
    else{
        var data ={};
        data.Address = this.state.Address;
        data.Keyprivate = this.state.Keyprivate;
        HeaderStore.fetchCreateAccount(data);
        this.props.onHide(true);
    }
    
   }
    render() {
        return (
            <Modal visible={this.props.show} >
                <div className="modal-header">
                    <h5 className="modal-title">Import Account</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>this.onCancelForm()}>
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div>
                        <div><small>Address</small></div>
                        <input style={{width: '-webkit-fill-available'}} onChange={(e) => this.onChangeInput(e)} name="Address" type="text" className="form-control" id="Address" placeholder="Ox..."></input>
                    </div>
                    <div>
                        <div><small>Private Key</small></div>
                        <div><input style={{width: '-webkit-fill-available'}} onChange={(e) => this.onChangeInput(e)} name="Keyprivate" type="text" className="form-control" id="Keyprivate" placeholder="Ox..."></input></div>
                    </div>
                </div>  
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" onClick={()=>this.onCancelForm()}>
                            Cancel
              </button>
                        <button type="button" className="btn btn-info" onClick={(e)=>this.onSubmitForm(e)}>
                            Import Account
              </button>
                    </div>
              <ModalCommon showError={this.state.showError} modalTitle="Error" modalBody="The specified address is invalid." modalFooter="OK"/>
          </Modal>
        )
    }
}
