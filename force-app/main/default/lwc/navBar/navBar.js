import { LightningElement } from 'lwc';
// import { NavigationMixin } from 'lightning/navigation'; 

export default class NavBar extends LightningElement {

    socialDetails = [
        {
            id:1,
            name:'Home',
            yesclick:'',
            onclick: 'gotohome'
        },
        {
            id:2,
            name:'LogIn',
            yesclick:'',
            onclick: 'gotologin'

        },
        {
            id:3,
            name:'About',
            yesclick:'yesclick',
            onclick: 'gotoabout'

        }
    ]


    gotologin(e){
        console.warn('yes clicked'+e.target.value);    
        // this[NavigationMixin.Navigate]({
        //     "type":"standerd__webPage",
        //     "attributes":{
        //         "url" : "/login"
        //     }
        // })
    }
    
}