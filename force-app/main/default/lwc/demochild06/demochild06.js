import { LightningElement,api,track } from 'lwc';

export default class Demochild06 extends LightningElement {

    @api parentC;
    @api parentData;
    @track Name='first';
    input(e){
        this.name=e.target.value;
        console.log(this.name);
    }
    data = { nameq: '', LastName : '', date:''};
    onchildchange(){
        alert(this.parentData.nameq);
        this.Name = this.parentData.nameq;
        const ctoparent = new CustomEvent("child",
        {detail:this.name});
        this.dispatchEvent(ctoparent);
        JSON.stringify()
    }
}