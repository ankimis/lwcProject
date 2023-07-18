import { LightningElement } from 'lwc';
import CAROUSEL_IMAGES from  '@salesforce/resourceUrl/carouselimg';


export default class CustomCarouselWrapper extends LightningElement {
    slides =[
        {
            image : `${CAROUSEL_IMAGES}/carousel/virat.jpg`,
            heading: 'Caption one',
            desciption: 'You can add desciption of first slide here'

        },
         {
            image : `${CAROUSEL_IMAGES}/carousel/banner-item-02.jpg`,
            heading: 'Caption two',
            desciption: 'You can add desciption of second slide here'
        },
         {
            image : `${CAROUSEL_IMAGES}/carousel/banner-item-03.jpg`,
            heading: 'Caption third',
            desciption: 'You can add desciption of third slide here'
        }
    ]
}