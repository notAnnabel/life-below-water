// omg wave me goodbye my lovely waves :3


export default class Wave{
    green: any;
    blue: any;
    red: any;

    xspacing: number;
    width: number;
    theta: number;
    amplitude: number;
    dx: number;
    yvalues: Array<number>;

    wavenum: number; // number of waves


    constructor (){
      this.green = green;
      this.blue = blue;
    

      this.xspacing = 12; // Distance between each horizontal location
      this.width = width; // Width of entire wave
      this.theta = 0.0; // Start angle at 0
      this.amplitude = 30.0; // Height of wave
      this.period = 500.0; // How many pixels before the wave repeats
      this.dx; // Value for incrementing x
      let yvalues: Array<number>; // Using an array to store height values for the wave

      this.wavenum=
    }

    setup(){
      this.width = p5.WindowWidth +16;
      dx = (p5.TWO_PI / period )* xpspacing;
      yvalues = new Array(p5.floor(w / xspacing));
    };

    renderWave() {
    p5.noStroke()
    p5.fill(100, this.greenWater, blueWater)


     this.currentHeight = this.p5.height / 2;
      while (currentHeight - 50 < p5.height) {
        for (let x = 0; x < yvalues.length; x++) {
          // A simple way to draw the wave with an ellipse at each location
            p5.ellipse(x * xspacing, currentHeight + yvalues[x], 16, 16);
          }
          currentHeight = currentHeight + 20;
    }

    calcWave(){
    theta += 0.02
    };





}
