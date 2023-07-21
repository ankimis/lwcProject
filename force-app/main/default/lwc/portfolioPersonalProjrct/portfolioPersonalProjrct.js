import { LightningElement } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'

export default class PortfolioPersonalProjrct extends LightningElement {
    BmiCalculator =`${PortfolioAssets}/PortfolioAssets/Projects/BMICalculator.png`
    CurrencyCalculator =`${PortfolioAssets}/PortfolioAssets/Projects/CurrencyCalculator.png`
    NoteApp =`${PortfolioAssets}/PortfolioAssets/Projects/NoteApp.png`
    WeatherApp =`${PortfolioAssets}/PortfolioAssets/Projects/WeatherApp.png`
    Survey =`${PortfolioAssets}/PortfolioAssets/Projects/Survey.png`
    AlarmClock =`${PortfolioAssets}/PortfolioAssets/Projects/AlarmClock.png`
    NoteTakingApp =`${PortfolioAssets}/PortfolioAssets/Projects/NoteTakingApp.png`

    projects=[
            {
            "name": "Bmi Calculator App",
            "img": this.BmiCalculator,
            "link":"https://niccom5-dev-ed.my.site.com/Portfolio"//note-taking-app
            },
            {
            "name": "Alarm Clock App",
            "img": this.AlarmClock,
            "link":"https://niccom5-dev-ed.my.site.com/Portfolio/alarm-clock"//note-taking-app
            },
            {
            "name": "Currency Converter App",
            "img": this.CurrencyCalculator,
            "link":"https://niccom5-dev-ed.my.site.com/Portfolio"//note-taking-app
            },
            {
            "name": "Weather App",
            "img": this.WeatherApp,
            "link":"https://niccom5-dev-ed.my.site.com/Portfolio"//note-taking-app
            },
            {
            "name": "Survay App",
            "img": this.Survey,
            "link":"https://niccom5-dev-ed.my.site.com/survay/s/"//note-taking-app
            },
            {
            "name": "Note Taking App",
            "img": this.NoteTakingApp,
            "link":"https://niccom5-dev-ed.my.site.com/Portfolio"//note-taking-app
            },
    ]
}