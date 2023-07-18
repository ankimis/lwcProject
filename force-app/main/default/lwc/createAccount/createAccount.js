import { LightningElement ,track} from 'lwc';
import LightningAlert from "lightning/alert";
import LightningPrompt from "lightning/prompt";
import LightningConfirm from "lightning/confirm";
import Contact from '@salesforce/schema/EMPLOYEE__c';
import Name_Obj from '@salesforce/schema/EMPLOYEE__c.First_Name__c';
import Name_add from '@salesforce/schema/EMPLOYEE__c.Address__c';
import Name_ctc from '@salesforce/schema/EMPLOYEE__c.Annual_CTC__c';


export default class CreateAccount extends LightningElement {
   @track fields = [Name_Obj,Name_add,Name_ctc];
  objectApiName =  Contact;
  recordId ="a045i0000074WymAAE";
    accountId;
    handleSuccess(event) {
        this.accountId = event.detail.id;
    }
    async handler() {
        await LightningAlert.open({
          message: "Sample Alert Message",
          theme: "error",
          label: "Alert Header"
        }).then(() => {
          console.log("###Alert Closed");
        });
      }
}