import { LightningElement, api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
export default class PortfolioUserStates extends LightningElement {
    // @api trailheadRanking = `${PortfolioAssets}/PortfolioAssets/Ranks/Ranger.png`;
      @api  badges
      @api  points
      @api  trails
      @api  rank
      renderedCallback(){
        console.log(this.rank)
        if(this.rank){
            let url =`${PortfolioAssets}/PortfolioAssets/Ranks/${this.rank}.png`;
            this.trailheadRanking = url;
        }
      }
}