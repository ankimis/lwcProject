import { LightningElement ,api,track} from 'lwc';

export default class MyFirst extends LightningElement {


    title  = "ankit mishra first project"
    // @track firstname;
    handleChange(event){
        const field = event.target.name;
        if(field ==='firstname'){
            this.firstname =event.target.value;
        }
        this.detail ={
            Name : this.firstname
        }
        const newmyfirstevent = new CustomEvent('myfirst',{
            detail
        })
        this.dispatchEvent(newmyfirstevent);
    }

}