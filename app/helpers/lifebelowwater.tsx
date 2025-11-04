import { useState, useEffect } from "react";
 
function sketch(p5: any) {

let xspacing = 12; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 75.0; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx: number; // Value for incrementing x
let yvalues : Array<number>; // Using an array to store height values for the wave

let wavenum; // number of waves
let g;
let b;

  p5.setup = () => {
   p5.createCanvas(710, 400);
   w = p5.width + 16;
   dx = (p5.TWO_PI / period) * xspacing;
   yvalues = new Array(p5.floor(w / xspacing));
  };

  p5.draw = () => {
     p5.background(220,160,100);
     calcWave();
     renderWave();
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
  p5.fill(100,220,200);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    for (let wavenum=1; wavenum<5; wavenum++){
  //     //for (let wavespacing=5; wavespacing<60; wavespacing++){
  //     //ellipse(x * xspacing, height / 2 + yvalues[x], 16, 16);
  //     //ellipse(x + 4, height / 2 + yvalues[x], 16, 16);
      p5.ellipse(x* xspacing, p5.height / 2 + yvalues[x]+wavenum, 16, 16)
      p5.ellipse(x* xspacing, p5.height / 2 + yvalues[x]+wavenum+20, 16, 16)
      p5.ellipse(x* xspacing, p5.height / 2 + yvalues[x]+wavenum+40, 16, 16)
      p5.ellipse(x* xspacing, p5.height / 2 + yvalues[x]+wavenum+60, 16, 16)
      p5.ellipse(x* xspacing, p5.height / 2 + yvalues[x]+wavenum+80, 16, 16)
      p5.ellipse(x* xspacing, p5.height / 2 + yvalues[x]+wavenum+100, 16, 16)
      p5.ellipse(x* xspacing, p5.height / 2 + yvalues[x]+wavenum+120, 16, 16)
      p5.ellipse(x* xspacing, p5.height / 2 + yvalues[x]+wavenum+140, 16, 16)
      p5.ellipse(x* xspacing, p5.height / 2 + yvalues[x]+wavenum+160, 16, 16)
      p5.ellipse(x* xspacing, p5.height / 2 + yvalues[x]+wavenum+180, 16, 16)
      p5.ellipse(x* xspacing, p5.height / 2 + yvalues[x]+wavenum+200, 16, 16)
      p5.ellipse(x* xspacing, p5.height / 2 + yvalues[x]+wavenum+220, 16, 16)
      p5.ellipse(x* xspacing, p5.height / 2 + yvalues[x]+wavenum+240, 16, 16)
      p5.ellipse(x* xspacing, p5.height / 2 + yvalues[x]+wavenum+260, 16, 16)
      p5.ellipse(x* xspacing, p5.height / 2 + yvalues[x]+wavenum+280, 16, 16)
  //     g = p5.random(180,220);
  //     b = p5.random(200,220)
  //     p5.fill(100,g,b)
  //     //}
    }
  } 
}
}

 
export default function Sketch() {
 
  const [P5Wrapper, setP5Wrapper] = useState<any>(null);
 
  useEffect(() => {
    // Dynamically import p5-wrapper only in the browser
    import("@p5-wrapper/react").then((mod) => {
      setP5Wrapper(() => mod.ReactP5Wrapper);
    });
  }, []);
 
  if (!P5Wrapper) return <div>Loading sketch...</div>;
 
  return <P5Wrapper sketch={sketch} />;
}
 