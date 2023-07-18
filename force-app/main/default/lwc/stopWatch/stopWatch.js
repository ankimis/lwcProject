
import { LightningElement } from 'lwc';

export default class StopWatch extends LightningElement {

    counter=0;
    timer = '0';
    timerRef
    storedTime = window.localStorage.getItem("startTimer")
    actionHandler(e){
        const {label} = e.target;
        if(label === 'Start'){
        this.setTimer();
        }  
        if(label === 'Stop'){
            window.clearInterval(this.timerRef);
        }  
        if(label === 'Reset'){
            this.counter = 0 ;
            this.timer ='0';
            window.clearInterval(this.timerRef);
            window.localStorage.removeItem('startTimer');


        }  
    }
    StartTimeHandler(){
        const startTime = new Date()
        window.localStorage.setItem('startTimer', startTime)
        return startTime
    }
    setTimer(){        
        const startTime = new Date(this.storedTime || this.StartTimeHandler());
         this.timerRef = window.setInterval(()=>{
            // this.counter = this.counter+1;
            // this.timer =this.secondToHns(this.counter)
            const secDiff = new Date().getTime() - startTime.getTime()
            this.timer = this.secondToHns(Math.floor(secDiff/1000))
         },1000)
    }
    secondToHns(d){
        d = Number(d)
        const h = Math.floor(d/3600);
        const m = Math.floor(d % 3600 / 60);
        const s = Math.floor(d % 3600 % 60);
        const hdisplay = h > 0 ? h + (h==1 ? "hour,":"hours"):"";
        const mdisplay = m > 0 ? m + (h==1 ? "minute,":"minutes"):"";
        const sdisplay = s > 0 ? s + (h==1 ? "second":"seconds"):"";
        return hdisplay+mdisplay+sdisplay;

    }
    connectedCallback(){
        if(this.storedTime){
            this.setTimer();
        }
    }
}