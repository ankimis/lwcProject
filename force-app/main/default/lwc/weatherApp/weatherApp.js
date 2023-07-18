import { LightningElement,api, track} from 'lwc';
import LightningAlert from 'lightning/alert';
import WEATHER_ICONS from '@salesforce/resourceUrl/weatherAppIcons';
import getWeatherDetails from '@salesforce/apex/weatherAppsController.getWeatherDetails';
const apiKEY ='321c2cb4a9dfecba09f638bbce6313fe';

export default class WeatherApp extends LightningElement {

    clearIcon = WEATHER_ICONS+'/weatherAppIcons/clear.svg';
    cloudIcon = WEATHER_ICONS+'/weatherAppIcons/cloud.svg';
    dropletIcon = WEATHER_ICONS+'/weatherAppIcons/droplet.svg';
    rainIcon = WEATHER_ICONS+'/weatherAppIcons/rain.svg';
    storm = WEATHER_ICONS+'/weatherAppIcons/storm.svg';
    snowIcon = WEATHER_ICONS+'/weatherAppIcons/snow.svg';
    thermometerIcon = WEATHER_ICONS+'/weatherAppIcons/thermometer.svg';
    mapIcon = WEATHER_ICONS+'/weatherAppIcons/map.svg';
    hazeIcon = WEATHER_ICONS+'/weatherAppIcons/haze.svg';
    arrowBackIcon = WEATHER_ICONS+'/weatherAppIcons/arrow-back.svg';
    cityName ='';
    loadingText='';
    isError='';
    searchHandler(e){
        this.cityName = e.target.value;
    }
     submitHandler(e){
        e.preventDefault()
        this.fetchdata();
    }
      fetchdata(){
        // server  side
        this.isError = false;
        this.loadingText =' Fetch Weather Details....';
        console.log(this.cityName);
        getWeatherDetails({input:this.cityName})
        .then(result=>{
            console.log(JSON.parse(result));
            this.weatherDetails(JSON.parse(result));
        }).catch((error)=>{
                  LightningAlert.open({
                    message: 'Wheather Not Find By Input Your City......',
                    theme: 'error', // a red theme intended for error states
                    label: 'Please Provide Write Input' // this is the header text
                });
            })
        // const URL =`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&units=matric&appid=${apiKEY}`;
        // fetch(URL)
        // .then(res=>res.json()).then(result=>{
        //     console.log(JSON.stringify(result));
        //     this.weatherDetails(result);
        // }).catch(()=>{
        //       LightningAlert.open({
        //         message: 'Wheather Not Find By Input Your City',
        //         theme: 'error', // a red theme intended for error states
        //         label: 'Error!', // this is the header text
        //     });
        // })
    }
    responce;
    weatherIcon;
    weatherDetails(info){
        if(info == "404" || info == "401"){
            this.isError = true;
            this.loadingText =`${this.cityName} iS not valid city name ?`
        }else{
            this.loadingText = '';
            this.isError = false;
            const city = info.name;
            const country = info.sys.country;
            const {description, id} = info.weather[0];
            const {temp, fells_like, humidity} = info.main;
            // this.cityName = info.name;
            this.responce={
                city: city,
                temp:Math.floor(temp),
                country:country,
                description:description,
                location: `${city} , ${country}`,
                fells_like:Math.floor(fells_like),
                humidity:`${humidity}%`
            }
            if(id === 800){
                this.weatherIcon = this.clearIcon;
            } else if((id >= 200 && id<=232) || (id >= 600 && id<=622)){
                this.weatherIcon = this.storm;
            }
            else if(id >= 701 && id<=782){
                this.weatherIcon = this.hazeIcon;
            }
            else if(id >= 801 && id<=804){
                this.weatherIcon = this.cloudIcon;
            }
            else if((id >= 500 && id<=531) || (id >= 300 && id<=321 )){
                this.weatherIcon = this.rainIcon;
            }
            // console.log(this.responce);
        }
    }
    backhandler(){
        this.responce = '';
        this.isError= '';
        this.weatherIcon ='';
        this.city ='';
        this.temp='';
    }
}