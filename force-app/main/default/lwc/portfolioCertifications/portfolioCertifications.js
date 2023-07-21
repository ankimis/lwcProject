import { LightningElement, wire ,api} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import SF_CERT_FIELDS from '@salesforce/schema/Portfoli__c.Salesforce_Certifications__c';
import OTHER_CERT_FIELDS from '@salesforce/schema/Portfoli__c.Other_Certifications__c';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
export default class PortfolioCertifications extends LightningElement {
@api recordId;
otherCert=[]
salesCert=[]
certLogo = `${PortfolioAssets}/PortfolioAssets/cert_logo.png`
    @wire(getRecord,{
        recordId:'$recordId',
        fields:[SF_CERT_FIELDS,OTHER_CERT_FIELDS]
    })getCertificatios({data,error}){
        if(data){
            console.log('data',JSON.stringify(data))
            this.certificateList(data)
        }
        if(error){
            console.log('error',error);
        }
    }
    certificateList(data){
           const {Other_Certifications__c,Salesforce_Certifications__c} = data.fields;
              this.salesCert = Salesforce_Certifications__c ? Salesforce_Certifications__c.value.split(';').map(item=>{
                return `Salesforce Certified ${item}`
              }):[]
           //    return {this.otherCert,this.salesCert}
              this.otherCert = Other_Certifications__c ? Other_Certifications__c.value.split(','):[]
    }

}