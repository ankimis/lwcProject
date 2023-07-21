import { LightningElement,api,wire } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
const COLUMNS = [
    { label: 'Education', fieldName: 'Education' },
    { label: 'Title', fieldName: 'Title' },
    { label: 'Passing Year', fieldName: 'PassingYear' },

];
export default class PortfolioEducation extends LightningElement {
    columns= COLUMNS;
    @api recordId;
    tableData=[]
    @wire(getRelatedListRecords,{
        parentRecordId:'$recordId',
        relatedListId:'Education__r',
        fields:[
            'Education__c.institutionNames__c',
            'Education__c.Title__c',
            'Education__c.PassingYear__c',
            // 'Education__c.Company_Name__c'
        ]
    })getEductionList({data,error}){
        if(data){
            // console.log("Data",JSON.stringify(data));
            this.formateData(data);
        }
        if(error){
            console.log("error",error);
        }
    }
    formateData(data){
        this.tableData= [...data.records].reverse().map(item=>{
            let id=item.id
            const {PassingYear__c,Title__c,institutionNames__c} = item.fields
            let PassingYear =PassingYear__c.value
            let Title =Title__c.value
            let Education =institutionNames__c.value
            return {id,PassingYear,Title,Education}
        })
        // console.log('tabledata',JSON.stringify(this.tableData))
    }
}