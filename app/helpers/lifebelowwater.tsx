import { useState, useEffect } from "react";


interface p5props {
  greenWater: number,
  blueWater: number
}

function sketch(p5: any) {

  let xspacing = 12; // Distance between each horizontal location
  let w; // Width of entire wave
  let theta = 0.0; // Start angle at 0
  let amplitude = 30.0; // Height of wave
  let period = 500.0; // How many pixels before the wave repeats
  let dx: number; // Value for incrementing x
  let yvalues: Array<number>; // Using an array to store height values for the wave

  let wavenum; // number of waves
  let g; // green variable in rgb
  let b; // blue variable in rgb

  let img: any // fish image test
  let xpos = 200; // fish x position
  let ypos = p5.windowHeight/2; // fish y position
  //let bgRed: number = 220
  let blueWater = 220;
  let greenWater = 200;

  p5.updateWithProps = (props: p5props) => {
    if (props.blueWater) {
      blueWater = props.blueWater
    }
    if (props.greenWater) {
      greenWater = props.greenWater
    }
  }

  p5.preload = () => {
    img = p5.loadImage('/assets/fish-png-1.png');
  }

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    w = p5.width + 16;
    dx = (p5.TWO_PI / period) * xspacing;
    yvalues = new Array(p5.floor(w / xspacing));
  };

  p5.draw = () => {
    p5.background(220, 160, 100);
    // p5.background(220, 160, 100);
    calcWave();
    renderWave();
    p5.image(img, xpos, ypos, 100, 100)

  };

  function calcWave() {
    // Increment theta (try different values for
    // 'angular velocity' here)
    theta += 0.02;

    // For every x value, calculate a y value with sine function
    let x = theta;
    for (let i = 0; i < yvalues.length; i++) {
      yvalues[i] = p5.sin(x) * amplitude;
      x += dx;
    }

  }

  function renderWave() {
    p5.noStroke();
    //p5.fill(100, 220, 200);
    p5.fill(100, greenWater, blueWater);

    // wave drawing
    let currentHeight = p5.height / 2;
    while (currentHeight - 50 < p5.height) {
      for (let x = 0; x < yvalues.length; x++) {
        // A simple way to draw the wave with an ellipse at each location
        //     //for (let wavespacing=5; wavespacing<60; wavespacing++){
        // width, height, somryhinh something
        p5.ellipse(x * xspacing, currentHeight + yvalues[x], 16, 16);
      }
      currentHeight = currentHeight+20;
    }

    // fish drawing
    if (xpos < p5.width) {
      xpos = xpos + 2;
    }
    else {
      xpos = -100;
      ypos = p5.random(p5.height/2, p5.width);
    }

    //     g = p5.random(180,220);
    //     b = p5.random(200,220)
    //     p5.fill(100,g,b)

    //     //}
  }
}
  


export default function Sketch(props: p5props) {

  const [P5Wrapper, setP5Wrapper] = useState<any>(null);

  useEffect(() => {
    // Dynamically import p5-wrapper only in the browser
    import("@p5-wrapper/react").then((mod) => {
      setP5Wrapper(() => mod.ReactP5Wrapper);
    });
  }, []);

  if (!P5Wrapper) return <div>Loading sketch...</div>;

  // const 

  return <P5Wrapper sketch={sketch} blueWater={props.blueWater} greenWater={props.greenWater}/>;
}



