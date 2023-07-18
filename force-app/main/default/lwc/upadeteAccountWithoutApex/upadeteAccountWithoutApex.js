import { LightningElement } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';
import Id_FIELD from '@salesforce/schema/Account.Id';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class UpadeteAccountWithoutApex extends LightningElement 
{
    accoutId;
    AccountName;
    TYPE;
    handlerIdChange(event)
    {
        this.accoutId =event.target.value;
    }
    handlerNameChange(event)
    {
            this.AccountName =event.target.value;
        
    }
    handlerStatusChange(event)
    {
            this.TYPE =event.target.value;
        
    }

    updateAccount()
        {
                const fields ={}
                fields[Id_FIELD.fieldApiName]=this.accoutId;
                fields[NAME_FIELD.fieldApiName]=this.AccountName;
                fields[TYPE_FIELD.fieldApiName]=this.TYPE;
                console.log("fields"+JSON.stringify(fields));
            const recordInput = { fields };
            updateRecord(recordInput)
                    .then((result) => {
                        console.log("account"+JSON.stringify(result))
                        const event = new ShowToastEvent({
                            title: 'Updated Account',
                            message:
                                'Account '+JSON.stringify(result.Name)+' is Succssfilly Updated',
                            variant:'success',
                        });
                        this.dispatchEvent(event);
                        // this.accountId =result.id;
                        
                    }).catch((err) => {
                        console.log("error"+JSON.stringify(err));
                        const event = new ShowToastEvent({
                            title: 'Not  Updated Account',
                            message:
                                'Account '+result.Name+' is NOt Updated',
                            variant:'error',
                        });
                        this.dispatchEvent(event);
                    });
        }


}