// omg wave me goodbye my lovely waves :3


export default class Wave {
  // wave colour
  greenWater: any;
  blueWater: any;
  red: any;

  p5: any
  
  // variables for wave calculations
  xspacing: number;
  w: number = 0;
  theta: number;
  amplitude: number;
  dx: number = 0;
  yvalues: Array<number> = [];
  period: number;


  wavenum: number; // number of waves


  constructor(green: any, blue: any, p5: any) {
    this.greenWater = green;
    this.blueWater = blue;


    this.xspacing = 12; // Distance between each horizontal location
    this.theta = 0.0; // Start angle at 0
    this.amplitude = 30.0; // Height of wave
    this.period = 500.0; // How many pixels before the wave repeats
    let yvalues: Array<number>; // Using an array to store height values for the wave

    this.p5 = p5;

    this.wavenum = 0;
  }

  setup() {
    this.w = this.p5.windowWidth + 16;
    this.dx = (this.p5.TWO_PI / this.period) * this.xspacing;
    this.yvalues = new Array(this.p5.floor(this.w / this.xspacing));
  };

  renderWave() {
    this.p5.fill(100, this.greenWater, this.blueWater)


    let currentHeight = this.p5.height / 2;

    while (currentHeight - 50 < this.p5.height) {
      for (let x = 0; x < this.yvalues.length; x++) {
        // A simple way to draw the wave with an ellipse at each location
        this.p5.ellipse(x * this.xspacing, currentHeight + this.yvalues[x], 16, 16);
      }
      currentHeight = currentHeight + 20;
    }
  };

  calcWave() {
    this.theta += 0.02 // is this so that value doesnt reset when reloaded
    let x = this.theta;
    for (let i = 0; i < this.yvalues.length; i++) {
      this.yvalues[i] = this.p5.sin(x) * this.amplitude;
      x += this.dx;
    }
  };

  draw() {
    this.calcWave();
    this.renderWave();
  }
}
