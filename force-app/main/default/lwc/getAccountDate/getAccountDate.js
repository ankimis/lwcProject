import { LightningElement,api,wire,track } from 'lwc';
import accountRecord from '@salesforce/apex/AccountController.accountRecord';
import { refreshApex } from '@salesforce/apex';
import updateRecod from '@salesforce/apex/AccountController.updateRecod';
import createRecord from '@salesforce/apex/AccountController.createRecord';
import deleteRecord from '@salesforce/apex/AccountController.deleteRecord'
import fetchUpdateRecord from '@salesforce/apex/AccountController.fetchUpdateRecord';
import LightningConfirm from 'lightning/confirm';
import LightningPrompt from 'lightning/prompt';
import LightningAlert from 'lightning/alert';


// import Account from '@salesforce/schema/AccountCleanInfo.Account';
export default class GetAccountDate extends LightningElement {
    @track accIid
   accountname;
    @api nname;
   accDescription;
   accindustry;
   acccphone;
   accdesgnation;

    @track createAccountForm=false;
    @track customFormModal
   @track customFormModal=false;

    accounts;
   @wire(accountRecord)accountRecords;
    error;
    errorMessage
   @api recordId;
   @api deleteId;

    @track phone;
    @track accountname;
    @track email;
    @track accDescription;
    createName(event){
    this.accountname=event.target.value;
    console.log(JSON.stringify(this.accountname));
   }
   createPhone(event){
    this.phone=event.target.value;
    console.log(JSON.stringify(this.phone));
   }
   createEmail(event){
    this.accDescription=event.target.value;
    console.log(JSON.stringify(this.accDescription));
   }
   accIndustry(event){
    this.designation=event.target.value;
    console.log(JSON.stringify(this.accIndustry));
   }
   customHideModalPopup() {    
            this.customFormModal = false;
            this.createAccountForm =false;

        }
        creteAccount(){
            this.createAccountForm =true;
        }
        handleCancel(){
            //  this.accountname = result[0].Name;
            console.log(nname);
            // this.accDescription =result[0].Description;
            // this.acccphone =result[0].Phone;
            // this.accIndustry =result[0].Industry;
        }
    
   async handleClick(event){
    this.recordId=event.target.value;
    const result = await LightningConfirm.open({
        message: 'Are You Sure Updated This Record'+JSON.stringify(this.recordId),
        variant: 'headerless',
        label: 'this is the aria-label value',
        
    });
    await LightningAlert.open({
        message: 'this is the alert message',
        theme: 'error', 
        label: 'Error!', 
        variant: 'header',
    });
    fetchUpdateRecord({
        accId : this.recordId
    }).then(result =>{
    // console.log(result[0].Id);
    // this.accountIds =result[0].Id;
   const  nname = this.accountname = result[0].Name;
    console.log(this.accountname);
    this.accDescription =result[0].Description;
    this.acccphone =result[0].Phone;
    this.accIndustry =result[0].Industry;
    this.customFormModal=true;
    // this.name =JSON.stringify(result[0].Name)

    console.log(JSON.stringify(result));
    })
    // await handleClick1(this.recordId);
    console.log("id"+JSON.stringify(this.recordId));
        alert("id"+JSON.stringify(this.recordId));
        }
async handle(e){
    await createRecord({
        // accId: this.recordId,
        accName: this.accountname,
        accPhone: this.acccphone
        // accEmail: this.accDescription,
        // accDesgination: this.designation
        
    }).then(() => {
        console.log("Create this Record");
        this.customFormModal = false;
        this.createAccountForm =false;
        return refreshApex(this.accountRecords);

    }).catch((error)=>{
        this.errorMessage = error;
        console.log("Unable to Update this Record"+JSON.stringify(this.errorMessage));
    })

}



@track form
 async  handleClick1(event){
    // this.customFormModal=true;
        // this.form=event.target.value;
      
        console.log("id"+JSON.stringify(this.designation));
        console.log("id"+JSON.stringify(this.email));

        
        // alert("id"+JSON.stringify(this.recordId));
       await updateRecod({
            accId: this.recordId,
            accName: this.accountname,
            accPhone: this.acccphone,
            accEmail: this.accDescription,
            accDesgination: this.designation
            
        }).then(() => {
            console.log("Update this Record");
            this.customFormModal = false;
            this.createAccountForm =false;
            return refreshApex(this.accountRecords);

        }).catch((error)=>{
            this.errorMessage = error;
            console.log("Unable to Update this Record"+JSON.stringify(this.errorMessage));
        })
    }
     async handleDelete(event){
        this.deleteId = event.target.value;
        console.log('deleteId'+JSON.stringify(this.deleteId));
        const result = await LightningConfirm.open({
            message: 'Are You Sure Deleted This Record'+JSON.stringify(this.deleteId),
            variant: 'headerless',
            label: 'this is the aria-label value',
            // setting theme would have no effect
        });
        deleteRecord({
            deleteId:this.deleteId
        }).then((result) => {
            console.log("delete this Record");
            LightningPrompt.open({
                message: 'Done Deleted Record',
                //theme defaults to "default"
                label: 'Please Respond', // this is the header text
                defaultValue: 'initial input value'+JSON.stringify(result), //this is optional
            })
            return refreshApex(this.accountRecords);
        }).catch((error)=>{
            this.errorMessage = error;
            console.log("Unable to Update this Record"+JSON.stringify(this.errorMessage));
        })
    }
}