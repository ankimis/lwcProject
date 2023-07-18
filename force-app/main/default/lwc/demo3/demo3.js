import { LightningElement ,track } from 'lwc';
import LightningAlert from 'lightning/alert';
import getEmployeList from '@salesforce/apex/employeecreate.getEmployeList';
const actions = [
    { label: 'Show details', name: 'show_details' },
    { label: 'Delete', name: 'delete' },
];
const columns = [
    {label :'Employeeid', fieldName: 'Id'},
    {label :'Employee Name ', fieldName: 'First_Name__c'},
    {label : ' Employee LastName', fieldName : 'Last_Name__c'},
    { type: 'action',
        typeAttributes: { rowActions: actions },
    },
];


export default class Demo1 extends LightningElement {

    title ="ankit mishra first project";

    @track  columns =columns;
    @track data=[];

    handler(){
        getEmployeList()
        .then(result =>{
            this.data = result;
            console.log(this.data);

        })
        .catch(error =>{
            console.log("error occurred");
                        })
    }

   async handleRowActions(event) {
        const actionName = event.detail.action.name;
        const row = event.detail.row;
        console.log(row);

        await LightningAlert.open({
            message: 'this is the alert message',
            theme: 'error', // a red theme intended for error states
            label: 'Error!', // this is the header text
        });
        switch (actionName) {
            
            case 'delete':
        // console.log(deleteRow(row));
                
                this.deleteRow(row);
                break;
            case 'show_details':
                this.showRowDetails(row);
                break;
            default:
        }
    }

    deleteRow(row) {
        const { id } = row;
        // console.log(row);
        const index = this.findRowIndexById(id);
        if (index !== -1) {
            this.data = this.data
                .slice(0, index)
                .concat(this.data.slice(index + 1));
        }
    }
    
    showRowDetails(row) {
        this.record = row;
    }
}