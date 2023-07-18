import { LightningElement ,api, track } from 'lwc';
import UpdateAccount from '@salesforce/apex/CreaterecordAccountFirstLwc.UpdateAccount'

export default class UpdateAccountLwc extends LightningElement {
    @api recordId
    accountName;
    accountIndustry;
     @track areDetailsVisible=false;
    
    handlerNameChange(event){
        this.accountName =event.target.value
        console.log(this.accountName);

    }
      
    handlerIndustryChange(event){
        this.accountIndustry =  event.target.value
        console.log(this.accountIndustry);


    }
      
    updateAccount(event){
       this.areDetailsVisible=true;
        UpdateAccount({ AccountId: this.recordId,
            Accountname: this.accountName,
            Accountindusrtry: this.accountIndustry
        })
        .then(result =>{
            console.log("accountDetails"+JSON.stringify(result));
        })
        .catch(err =>{
            console.log("error"+JSON.stringify(console.error()));
        })

       }
       }