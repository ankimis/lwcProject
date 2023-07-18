import { LightningElement } from 'lwc';

export default class Carouseldemo extends LightningElement {
    players =[
        {
            id:1,
            header:'Virat Kohli',
            src:"https://media.gettyimages.com/id/1288966957/photo/australia-v-india-odi-game-3.jpg?s=1024x1024&w=gi&k=20&c=oWbsL5CuNCVaWiBXRU6hbWPxTBRDiOJo1fARtiQx-8c=",
            discription:"Virat",           
            href:"https://en.wikipedia.org/wiki/Main_Page"
        },
        {
            id:2,
            header:'Ronaldo',
            src:"https://media.gettyimages.com/id/1344015600/photo/cristiano-ronaldo-of-manchester-united-celebrates-victory-on-the-final-whistle-after-scoring.jpg?s=612x612&w=0&k=20&c=ozUoiKUUlFEtc0_3-gd87aDm7GMj7m1-9ZoqH1E-Vjg=",
            discription:"Ronaldo",           
            href:"https://en.wikipedia.org/wiki/Main_Page"
        },
        {
            id:3,
            header:'Virat',
            src:"https://media.gettyimages.com/id/507380812/photo/virat-kohli-of-india-gestures-to-australian-fans-to-be-quiet-after-india-took-the-wicket-of.jpg?s=612x612&w=gi&k=20&c=Er_5--Ad6TWhgxG0UFQm4zD14QmqiCx_FXb9PrYbO4A=",
            discription:"Virat",           
            href:"https://en.wikipedia.org/wiki/Main_Page"
        }
    ]
}