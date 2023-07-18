import { LightningElement } from 'lwc';
import login from '@salesforce/apex/LoginUser.login';

export default class Amazonclone extends LightningElement {
    email;
    password;
    isError=false;
    errorMessage='';

    handleUsername(e){
    this.email =e.target.value;
    }
    handlePassword(e){
        this.password = e.target.value;    
    }
    handleLogin(){
            console.log("Inside Login");
            console.log("Email Value:",this.email);
            console.log("Password:",this.password);
        if(this.email!=null && this.password!=null){
            login({
                userName : this.email,
                password : this.password
            })
            .then((result) =>{
                this.isError =false;
                console.log('result Is',result);
            })
            .catch((error)=>{
                console.log('error',error);
                this.isError =true;
                this.errorMessage=error.body.message[0];
            })
        }
    }
}