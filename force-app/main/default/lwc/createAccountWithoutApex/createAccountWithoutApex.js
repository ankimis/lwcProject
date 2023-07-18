import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import Active_FIELD from '@salesforce/schema/Account.Active__c';
import LightningConfirm from 'lightning/confirm';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';




export default class LightningToastExample extends NavigationMixin(
    LightningElement
){
    accountId;
    accountName='';
    status='';
    handlerNameChange(event){
        this.accountName=event.target.value;
        console.log("fields"+JSON.stringify(this.accountName));
        
    }
    
    handlerStatusChange(event){
        this.status=event.target.value;
        console.log("fields"+JSON.stringify(this.status));
    }
    async createAccoun(){
        const fields ={};
        fields[NAME_FIELD.fieldApiName] = this.accountName;
        fields[Active_FIELD.fieldApiName] = this.status;
        console.log("fields"+JSON.stringify(fields));
          
          
           const result = await LightningConfirm.open({
                message: 'Are you sure you want to reset fields?',
                variant: 'header',
                label: 'Please Confirm',
                theme: 'success',
            });
    
            if(result==true){
                this.emailvalue = "username@example.com";
                this.mobilevalue = "000-000-0000";
    
            }
        
            const recordInput ={ apiName : ACCOUNT_OBJECT.objectApiName , fields };
        // console.log("error"+JSON.stringify(this.recordInput.apiName));


         createRecord(recordInput)
        .then((result) => {
            console.log("account"+JSON.stringify(result));
            this.accountId =result.id;
            if(result !=''){
                const evt = new ShowToastEvent({
                    title: 'Toast Success',
                    message: 'Opearion sucessful',
                    variant: 'success',
                    mode: 'dismissable'
                });
                this.dispatchEvent(evt);
                
        }
            
        }).catch((err) => {
            console.log("error"+JSON.stringify(err));
        });

    }
}