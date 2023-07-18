import { LightningElement } from 'lwc';
import createRecord from '@salesforce/apex/CreaterecordAccountFirstLwc.createRecord';

export default class Createaccountwithapexclass extends LightningElement {
    accountIds;
    accountName;
    accountIndustry;
    handleNameChang(event){
        this.accountName =event.target.value;
    }
    handleIndustryChang(event){
        this.accountIndustry =event.target.value;
    }
    onCreateRecord(){
        createRecord({accountName : this.accountName,
            accountIndustry : this.accountIndustry})
            .then(result => {
                this.accountIds =result[0].Id;
                console.log("result:"+JSON.stringify(result));
            })
            .catch(error =>{
                console.error("error:"+JSON.stringify(error));
            })
    }
    

}