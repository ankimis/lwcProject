import { LightningElement ,track } from 'lwc';
import getEmployeList from '@salesforce/apex/employeecreate.getEmployeList';
 
const columns = [
    {label :'Employeeid', fieldName: 'Id'},
    {label :'Employee Name ', fieldName: 'First_Name__c'},
    {label : ' Employee LastName', fieldName : 'Last_Name__c'},

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
    
    handleRowAction(event) {
        const actionName = event.detail.action.name;
        const row = event.detail.row;
        switch (actionName) {
            case 'delete':
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
        const index = this.findRowIndexById(id);
        if (index !== -1) {
            this.data = this.data
                .slice(0, index)
                .concat(this.data.slice(index + 1));
        }
    }

    findRowIndexById(id) {
        let ret = -1;
        this.data.some((row, index) => {
            if (row.id === id) {
                ret = index;
                return true;
            }
            return false;
        });
        return ret;
    }

    showRowDetails(row) {
        this.record = row;
    }


}