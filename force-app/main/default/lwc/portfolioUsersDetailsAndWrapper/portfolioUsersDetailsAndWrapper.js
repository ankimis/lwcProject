import { LightningElement,api } from 'lwc';

export default class PortfolioUsersDetailsAndWrapper extends LightningElement {
    @api recordId
    @api objectApiName
    @api resumeUrl;
    @api  rank
    @api  badges
    @api  points
    @api  trails
}