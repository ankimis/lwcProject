import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import TECH_FIELD  from '@salesforce/schema/Portfoli__c.Technology_Skills__c'
import SOFT_SKILLS_FIELD  from '@salesforce/schema/Portfoli__c.Soft_Skills__c'
import SOFTWARE_TOOL_FIELD  from '@salesforce/schema/Portfoli__c.Software_Tool__c'
import DEVELOPMENT_METHOLODOGY_FIELD  from '@salesforce/schema/Portfoli__c.Development_Methodologys__c'

export default class PortfolioSkills extends LightningElement {
    @api recordId;
    techskills=[];
    Softoolskills=[];
    SoftSkills=[];
    Developmentskills=[];
    @wire(getRecord,{
        recordId:'$recordId',
        fields:[TECH_FIELD,SOFT_SKILLS_FIELD,SOFTWARE_TOOL_FIELD,DEVELOPMENT_METHOLODOGY_FIELD]
    })skilHandler({data,error}){
        if(data){
            console.log("data==>",JSON.stringify(data));
            this.formatSkiils(data);
        }if(error){
        console.log("error",error)
        }
    }
    formatSkiils(data){
        const {Software_Tool__c,Technology_Skills__c,Soft_Skills__c,Development_Methodologys__c} = data.fields;
        this.techskills = Technology_Skills__c ? Technology_Skills__c.value.split(',') : []
        this.Softoolskills = Software_Tool__c ? Software_Tool__c.value.split(','):[]
        this.SoftSkills = Soft_Skills__c ? Soft_Skills__c.value.split(','):[]
        this.Developmentskills = Development_Methodologys__c ? Development_Methodologys__c.value.split(','):[]

    }
}