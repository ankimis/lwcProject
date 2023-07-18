import { LightningElement ,api, track,wire} from 'lwc';
import { getListInfoByName } from 'lightning/uiObjectInfoApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import LeadSource from '@salesforce/schema/Contact.LeadSource';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';

export default class ParentCmp extends LightningElement {
@api fnm;
@track myfirstnae;
@api lnm;
@api showFormCalled =false;
@api callFromchildq;
@api showForm=false;
value = "yes success fully call";
    handleClick(event){
        this.showForm=true;
        this.fnm=event.detail.FirstName;
        this.lnm=event.detail.LastName;
    }
    callChildMethod(event){      
        let child = this.template.querySelector('c-child-cmp');
        child.callFromParent();
    }
    @api
    callFromchild(){
        this.showFormCalled =true;
        alert('call to chiltd to parent mathod');
        this.callFromchildq ="call to from chilf d mathod";
    }
    myfirst(e){
        
        this.myfirstnae = e.detail.Name;
        alert('yes call to my first'+ this.myfirstnae);                             
    }
    connectedCallback(){
        console.log(this.template.querySelector('lightning-button'));
        console.log(this.template.querySelector('lightning-button'));
    }
    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    contactInfo;
    @wire(getPicklistValues,
        {
            recordTypeId: '$contactInfo.data.defaultRecordTypeId',
            fieldApiName: INDUSTRY_FIELD
        }
    )
    leadSourceValues;

}