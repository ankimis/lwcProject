import { LightningElement,api } from 'lwc';
const CARD_VISIBLE ='slds-show';
const CARD_HIDE ='slds-hide';
// Example :- import TRAILHEAD_LOGO from '@salesforce/resourceUrl/trailhead_logo';'

export default class CustomCarousel extends LightningElement {
    slides =[];
    @api
    get slidesData(){
        return this.slides

    }
    set slidesData(data){
       this.slides = data.map((item,index)=>{
            return  index === 0 ? {
                ...item,
                slideIndex: index+1,
                cardClasses: CARD_VISIBLE
            }:{ 
                 ...item,
                slideIndex: index+1,
                cardClasses: CARD_HIDE
            }
        })
    }

}