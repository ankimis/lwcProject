import { LightningElement,wire,track} from 'lwc';
import accountName from '@salesforce/apex/AccountDeme.accountName';
import contactName from '@salesforce/apex/AccountDeme.contactName';

export default class DisplatConRecord extends LightningElement {
@wire(accountName)accounts;
@track currentAccName;
@track error;
@track records;
@wire(contactName,{searchKey:'$this.currentAccName'})
wiredContact({data,error}){
    if(data){
        this.records=data;
        console.log('record'+JSON.stringify(data))
        this.error=undefined;
    }else{
        this.records=error;
        console.log('record'+JSON.stringify(error))
        this.data=undefined;
    }
}

handleChange(event){
    this.currentAccName = event.target.value;
    console.log("accouny"+JSON.stringify(this.currentAccName))
}



}