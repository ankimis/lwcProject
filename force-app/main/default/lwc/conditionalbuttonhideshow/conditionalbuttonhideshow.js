import { LightningElement ,track} from 'lwc';

export default class Conditionalbuttonhideshow extends LightningElement {
   @track onclickbuttonlabel ='show';
   @track cardvisible =false;
   myTitle ="fbgshrghksk";
   click(event){
    const label= event.target.label;
    if(label ==='show'){
        this.onclickbuttonlabel = 'hide'; 
        this.onclickbuttonlabel = true; 


    }else{
        this.onclickbuttonlabel = 'show';
        this.onclickbuttonlabel = false; 

    }
     
   }
}