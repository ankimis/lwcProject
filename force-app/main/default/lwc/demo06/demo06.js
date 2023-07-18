import { LightningElement, api, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import newcontct from '@salesforce/apex/AccountDeme.createAccount';
import { refreshApex } from '@salesforce/apex';
import NAME_FIELD from '@salesforce/schema/Account.Name';
export default class Demo06 extends LightningElement {

    @api parent = 'parentcpm';
    @track childtopp;
    @track contactname;
    @track contactlastame;
    @track datet;
   change(){
    console.log('check');
    this.parent='changeparent';
   }
   chlidvaue(e){
   this.childtopp =e.detail;
   }
   ContactName(e){
    this.data.nameq=e.target.value;
   }
   ContactLastName(e){
    this.data.LastName=e.target.value;
   }
   Datet(e){
    this.data.date=e.target.value;
   }
   data = { nameq: this.contactname, LastName : this.contactlastame, date:this.datet};
   savecontactdata(e){
    // console.log(this.data);

     //    alert('FGFG'+JSON.stringify(this.data));
     //  this.dispatchEvent(new ShowToastEvent({
     //      title: 'Conact Information',
     //      message: 'Date'+this.datet+'Lastname'+this.contactlastmame,
     //      variant: 'success'
     //  }));
    newcontct({ conData:this.data })
   .then((result) => {
    this.contactlastame='';
    this.contactname='';
    this.date='';
    const evt = new ShowToastEvent({
        title: 'Saved succesfully',
        message: result,
        variant: 'success',
    })
    .catch((error)=>{
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Error creating record',
                message: error.body.message,
                variant: 'error',
            })
        );
    })
    this.dispatchEvent(evt);
    console.log("Opps updated!" + result)
       return refreshApex(this.wiredDataResult);  //HERE I AM CALLING REFRESHING THE DATATABLE, BUT ITS NOT GETTING REFRESHED

   })
   }

}