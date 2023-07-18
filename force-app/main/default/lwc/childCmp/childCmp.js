import { LightningElement,api,track } from 'lwc';

export default class ChildCmp extends LightningElement {
    @api fname;
    @api lname;
    @api callchild;
    @api value;
    @api val;
    @api 
    callFromParent(){
        alert('this is call parent to child');
        this.callchild ="this callled on event";
        this.val="this a val";
    }
    handleClick(){
        this.template.querySelectorAll("lightning-input").forEach(item => {
            let currentLabel=item.label;
            let currentVal=item.value;
            if(currentLabel==="FirstName"){
                this.fname=currentVal;
                console.log('@'+this.fname);
            }
            else{
                this.lname=currentVal;
                console.log('@@'+this.lname);
            }
            const newEvent=new CustomEvent('inptucarryevent',{
                detail:{
                    FirstName:this.fname,
                    LastName:this.lname
                }
            });
            this.dispatchEvent(newEvent);
        });
    }
    parentclick()
        {          
            const newEvent=new CustomEvent('calltoc',{
                
            });
            this.dispatchEvent(newEvent);
        }
}