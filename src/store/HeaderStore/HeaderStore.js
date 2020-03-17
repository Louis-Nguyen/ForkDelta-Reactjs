import { observable } from 'mobx'
import { PathConfig } from '../../config/path.config'
import MyNotification from '../../config/MyNotification'
class HeaderStore {

    @observable AllTokens = []
    @observable DefaultToken = {
        address:'',
        name:'',
        fullName:'',
        decimal:''
    }
    constructor(){
    }
    handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    getTokens = () => {
        fetch(PathConfig.get_ALL_TOKENS.path,{
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
        })
            .then(this.handleErrors)
            .then( response => response.json())
            .then( data => {     
                this.AllTokens = data.tokens.value;
                this.DefaultToken = data.defaultToken;
            }).catch( error => {
            }) 
    };
    fetchCreateAccount = (data) => {
        fetch(PathConfig.post_ACCOUNT.path, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
             'Accept': 'application/json',
              "Content-Type": "application/json; charset=utf-8",
          }
      })
          .then(
               response => {
                response.json();
                if (response.status == 200) {
                    MyNotification.alertSuccess("Create Account success!");
                    
                  }
                  else{
                    MyNotification.alertError("Error create Account !")
                  }
               }
          )
          .then(data => {
            console.log(data);
            sessionStorage.setItem("user",JSON.stringify(data));
          })
          .catch(error => {
              MyNotification.alertError("Error save Account !")
          });
  }
}

export default new HeaderStore();