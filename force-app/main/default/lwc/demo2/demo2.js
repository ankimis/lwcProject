import { api,LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import 	Phone_FIELD from '@salesforce/schema/Account.Phone';
import 	Active_FIELD from '@salesforce/schema/Account.Active__c';

export default class Demo2 extends LightningElement {
    objectApiName=ACCOUNT_OBJECT;
    name_Field=NAME_FIELD;
    phone_Field=Phone_FIELD;
    active_Field    =Active_FIELD;

@api recordId = "0015i0000088AQ6AAM";

}