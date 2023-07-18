import { LightningElement, track } from 'lwc';

export default class Game extends LightningElement {
    score =0;
    blockSize = 20;
   @track gameblock =[];
   renderCompleate =false;
   XMax;
   yMax;
   xSpeed =1;
   ySpeed =0;
   xHead= 0;
   yHead =0;
   tail  = [];
   startgame(){
     setInterval(() => {
        this.move();
     }, 300);
   }
   move(){
    let lastElement = this.tail[this.tail.length -1];
        if(lastElement !== `${this.xHead}:${this.yHead}` ){
          this.tail.push(`${this.xHead}:${this.yHead}`);
          let removeElement = this.tail.shift();
          let currentposiition = this.gameblock.findIndex(x=> x.id === removeElement);
          this.gameblock[currentposiition].snake = false;
          this.gameblock[currentposiition].class = '';
    }

    this.xHead += this.xSpeed;
    this.yHead += this.ySpeed;
    if(this.xHead >= this.xMax)
    {
      this.xHead=0;
    }
    if(this.xHead < 0)
    {
      this.xHead=this.xMax-1;
    }
    if(this.yHead >= this.yMax)
    {
      this.yHead=0;
    }
    if(this.yHead < 0)
    {
      this.yHead=this.yMax-1;
    }
    if(this.tail.includes(`${this.xHead}:${this.yHead}`)){
      alert('Game Over');
      this.tail = [];
      this.xHead =0;
      this.yHead =0;
    this.gameblock[newposiition].snake = false;
      this.gameblock[newposiition].class = '';
    }

    let newposiition = this.gameblock.findIndex(x=> x.id === `${this.xHead}:${this.yHead}`);
    this.gameblock[newposiition].snake = true;
    this.gameblock[newposiition].class = 'snake';
    if(this,this.gameblock[newposiition].food){
      this.score++;
      this.tail.push(`${this.xHead}:${this.yHead}`);
    this.gameblock[newposiition].food = false;
    this.genratefood();
    }
   }
addKeyboardControls(){
  window.addEventListener('keydown',(e)=>{
  e.preventDefault();
  console.log('inner'+e);
        switch (e.key){
             case "ArrowUp":
                this.xSpeed =0;
                this.ySpeed =-1;
                break;
                case "ArrowDown":
                this.xSpeed =0;
                this.ySpeed =1;
                break;
                case "ArrowLeft":
                this.xSpeed =-1;
                this.ySpeed =0;
                break;
                case "ArrowRight":
                this.xSpeed =1;
                this.ySpeed =0;
                break;
        }
    })
}

  genratefood(){
    let xFood = Math.floor(Math.random() * this.xMax);
    let yFood = Math.floor(Math.random() * this.yMax);
    let foodposiition = this.gameblock.findIndex(x=> x.id === `${xFood}:${yFood}`);
    this.gameblock[foodposiition].food = true;
    this.gameblock[foodposiition].class = 'food';
  }


    renderedCallback(){
        if(!this.renderCompleate){
        let xWidth =this.template.querySelector(".game-container").clientWidth;
        let xHeight =this.template.querySelector(".game-container").clientHeight;

        this.xMax = Math.floor(xWidth/this.blockSize);
        this.yMax =Math.floor(xHeight/this.blockSize);
        let tmpBlocks = [];
        for(let y=0; y< this.yMax; y++){
            for(let x=0; x< this.xMax; x++){
                let obj;
            if(x ==0 && y==0){
                  obj = { id: `${x}:${y}`,snake: true, food: false, class: 'snake'};
            }else{
                 obj = { id: `${x}:${y}`,snake: false, food: false, class: '' };
            }
            tmpBlocks.push(obj);
            }
        }
         this.renderCompleate =true;
        this.gameblock =tmpBlocks;
        this.addKeyboardControls();
        this.genratefood();
        this.startgame();
    }
    }
}