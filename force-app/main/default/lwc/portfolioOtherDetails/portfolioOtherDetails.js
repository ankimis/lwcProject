import { LightningElement ,api,wire} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import SUPERBADGE_FIELDS from '@salesforce/schema/Portfoli__c.Super__c'
import AWARDS_FIELDS from '@salesforce/schema/Portfoli__c.Awards__c'
import LANGUAGES_FIELDS from '@salesforce/schema/Portfoli__c.Languages__c'
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'


export default class PortfolioOtherDetails extends LightningElement {
    @api recordId;
    superBadges= [];
    langusges= [];
    awards= [];
    awardIcon =`${PortfolioAssets}/PortfolioAssets/trophy.png`
    salesbadgeIcon =`${PortfolioAssets}/PortfolioAssets/badge.png`
    languageIcon =`${PortfolioAssets}/PortfolioAssets/language.png`
    @wire(getRecord,{
        recordId:'$recordId',
        fields:[SUPERBADGE_FIELDS,AWARDS_FIELDS,LANGUAGES_FIELDS]
    })otherFieldHandler({data,error}){
        if(data){
            console.log('otherFieldHandler==>',JSON.stringify(data));
            this.formatData(data)
        }
        if(error){
            console.log('error==>',error);
        }
    }
    formatData(data){
       const{Super__c,Awards__c,Languages__c} = data.fields;
       this.superBadges =   Super__c ? Super__c.value.split(';'):[]
       this.awards =   Awards__c ? Awards__c.value.split(','):[]
       this.langusges =   Languages__c ? Languages__c.value.split(','):[]
    }
}