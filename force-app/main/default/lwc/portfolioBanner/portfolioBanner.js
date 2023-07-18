import { LightningElement,wire,api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
import {getRecord,getFieldValue} from  'lightning/uiRecordApi';
import FULLNAME from '@salesforce/schema/Portfoli__c.Full_Name__c'
import Company_Name from '@salesforce/schema/Portfoli__c.Company_Name__c'
import Company_Location from '@salesforce/schema/Portfoli__c.Company_Location__c'
import Designation from '@salesforce/schema/Portfoli__c.Designation__c'

export default class PortfolioBanner extends LightningElement {
    @api recordId  //='a0C5i00000BVZRzEAP';
    @api linkdinUrl //='https://www.linkedin.com/in/ankit-mishra-9a20ba231';
    @api twitterUrl //="";
    @api githubUrl //="";
    @api youtubeUrl //="";
    @api trailheadUrl //="";
    @api blogUrl //="";
    userPic = `${PortfolioAssets}/PortfolioAssets/userPic.jpeg`;
    Linkdin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`;
    twitter = `${PortfolioAssets}/PortfolioAssets/Social/twitter.svg`;
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`;
    blog = `${PortfolioAssets}/PortfolioAssets/Social/blog.svg`;
    trailhead1 = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`;
    youtube = `${PortfolioAssets}/PortfolioAssets/Social/youtube.svg`;
    blogger = `${PortfolioAssets}/PortfolioAssets/Social/blogger.svg`;
    trailhead = `${PortfolioAssets}/PortfolioAssets/Social/trailhead.svg`;
    @wire(getRecord,{recordId : '$recordId' , fields:[FULLNAME,Company_Name,Company_Location,Designation]})
    portfoliohandler;
        get fullname(){
            return getFieldValue(this.portfoliohandler.data, FULLNAME);
        }
        get companyName(){
            return getFieldValue(this.portfoliohandler.data, Company_Name);
        }
        get companyLocation(){
            return getFieldValue(this.portfoliohandler.data, Company_Location);
        }
        get designation(){
            return getFieldValue(this.portfoliohandler.data, Designation);
        }
}