import { LightningElement, api } from 'lwc';

export default class PortfolioUserdetails extends LightningElement {
    @api recordId;
    @api objectApiName;
    @api resumeUrl;
        downloadResume(){
            window.open(this.resumeUrl,"blank")
        }
    // "https://github.com/ankimis/dummyr/blob/906625bc65065100a8ef9050f6cf12f57c554057/dummyResume.pdf"
}