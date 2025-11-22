// the fish live here mwahahah

 //let currentImg;
  //let living = true;
  //let fishSpeed = 2; //(gets better when alive worst when dead )
  //let p5;
  
  class Fish {
  aliveImg: any;
  deadImg: any;
  currentImg: any;
  xpos: any;
  ypos: any;
  p5: any;
  fishSpeed: any;
  

  constructor (aliveImg: any, deadImg: any, currentImg: any, xpos: number, ypos: number, p5: any){
  this.aliveImg = aliveImg;
  this.deadImg = deadImg;
  this.currentImg = currentImg;
  this.xpos = xpos;
  this.ypos = ypos;
  this.p5 = p5;
  this.fishSpeed = 2;
  }

   update() {
        this.moving();
        this.showFish();
  };

   moving(){
   if (this.xpos < p5.windowWidth) {
      this.xpos = this.xpos + this.fishSpeed;
      console.log(this.xpos); // fish is moving theoretically
    }
    else {
      this.xpos = -60;
      this.ypos = this.p5.random(this.p5.height / 2);
    }
  };
  showFish(){
    this.p5.image(this.currentImg, this.xpos, this.ypos, 100, 100);
    //if (this.xpos < p5.windowWidth) {
      //this.xpos = this.xpos + 2;  
    }
  };
  

  //}; uncommented out for testing

  /*kill(){
   if (props.pollution === polluted){
     this.currentImg = this.deadImg;
  }
 
  function resurrect(){}
    if (props.pollution === clean){
  // draw fish
     p5.image(this.livingImg, this.xpos, this.ypos, 100, 100);
  } else (){
    }
  }*/
  /*
  function hovering(){
  if (mouseOver(livingImg){
  use mask() and clip() functions over fish img
  }
  // trigger text box depending on the fish

  if (mouseOver(deadImg){
  trigger text box BOOOOO!!!!! YOU KILLED ME YOU JERK >:(
  }


  */