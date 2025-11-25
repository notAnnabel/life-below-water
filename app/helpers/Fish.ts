// the fish live here mwahahah

export default class Fish {

  aliveImg: any;
  deadImg: any;
  currentImg: any;
  xpos: number;
  ypos: number;
  p5: any;
  fishSpeed: any;
  alive = true;


  constructor(aliveImg: any, deadImg: any, currentImg: any, xpos: number, ypos: number, fishSpeed: number, p5: any) {
    this.aliveImg = aliveImg;
    this.deadImg = deadImg;
    this.currentImg = currentImg;
    this.xpos = xpos;
    this.ypos = ypos;
    this.p5 = p5;
    this.fishSpeed = fishSpeed;
  };

  preload() {
    this.aliveImg = this.p5.loadImage(this.aliveImg)
    this.deadImg = this.p5.loadImage(this.deadImg)
    this.currentImg = this.p5.loadImage(this.currentImg) // preloads the images
  };

  moving() {
    if (this.xpos < this.p5.windowWidth) {
      this.xpos = this.xpos + this.fishSpeed;
      console.log(this.xpos); // fish is moving theoretically
    }
    else {
      this.xpos = -60;
      this.ypos = this.p5.random(this.p5.height * 0.5, this.p5.height * 0.8);
    }
    this.p5.image(this.currentImg, this.xpos, this.ypos, 100, 100);
  };
  kill() {
    this.alive = false;
    this.currentImg = this.deadImg; // change image to dead fish
  };
  revive() {
    this.alive = true;
    this.currentImg = this.aliveImg; // change image to alive fish
  };
};


//}; uncommented out for testing

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

