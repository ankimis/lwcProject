import { LightningElement } from 'lwc';
const ImageUrl= "https://sfdc-demo.s3-us-west-1.amazonaws.com/ecars";
const  colors = ['red','green','black','red','white'];
export default class CarPicker extends LightningElement {
   col = colors;
   selectedColor=this.col[0];
   get selectedImage (){
    return `${ImageUrl}/car_${this.selectedColor}.jpg`
   }
   selectedHandler(e){
    this.selectedColor = e.target.dataset.color;
   }
}o