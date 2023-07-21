import { LightningElement, api } from 'lwc';

export default class PortfolioStringHtml extends LightningElement {
    @api content;
    isLoaded =false;
    renderedCallback(){
        console.log("content===>",JSON.stringify(this.content));
        if(this.isLoaded){
            return false;
        }
        if(this.content){
            this.isLoaded =true;
            const container =this.template.querySelector('.htmlContainer')
            container.innerHTML = this.content;
        }
    }

}