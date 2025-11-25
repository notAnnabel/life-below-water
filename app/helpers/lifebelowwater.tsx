import { useState, useEffect, type JSX } from "react";
import { getPollution } from "./backend";
import Fish from "./Fish";
import Wave from "./Wave";
import Shark from "./Shark";
import Bird from "./bird";

interface p5props {
  polluted: boolean; // true is clean (positive) false is polluted
  greenWater: number,
  blueWater: number
}

function sketch(p5: any) {

  let blueWater = 220;
  let greenWater = 200;
  let wave = new Wave(blueWater, greenWater, p5);

  let fishOne = new Fish('/assets/fish-png-1.png', '/assets/fish-png-1-dead.png', '/assets/fish-png-1.png', 275, p5.windowHeight * 0.8, 3, p5);
  let fishTwo = new Fish('/assets/fish-png-1.png', '/assets/fish-png-1-dead.png', '/assets/fish-png-1.png', 200, p5.windowHeight * 0.6, 4, p5);
  let fishThree = new Fish('/assets/fish-png-1.png', '/assets/fish-png-1-dead.png', '/assets/fish-png-1.png', 180, p5.windowHeight * 0.55, 5, p5);
  let fishFour = new Fish('/assets/fish-png-1.png', '/assets/fish-png-1-dead.png', '/assets/fish-png-1.png', 50, p5.windowHeight * 0.9, 5, p5);
  let fishFive = new Shark('/assets/shark-png-1.webp', '/assets/shark-png-1-dead.png', '/assets/shark-png-1.webp', 100, p5.windowHeight * 0.7, 2, p5);
  let bird = new Bird('/assets/seagull-png-1.png', '/assets/seagull-png-1-dead.png', '/assets/seagull-png-1.png', 20, p5.windowHeight * 0.3, 2, p5)

  let allfish = [fishOne, fishTwo, fishThree, fishFour, fishFive, bird];

  //let fish = new Fish("/assets/fish-png-1.png", "/assets/fish-png-1-dead.png", 200, p5.windowHeight / 2, p5);





  // let fishOne;

  let sun = p5.color(255, 204, 0);




  let xpos = 200; // fish x position
  let ypos = p5.windowHeight / 2; // fish y position
  //let bgRed: number = 220

  p5.updateWithProps = (props: p5props) => {

    console.log(props);

    if (props.blueWater) {
      wave.blueWater = props.blueWater
    }
    if (props.greenWater) {
      wave.greenWater = props.greenWater
    }

    // props for changing the fish to dead
    if (props.polluted != undefined) {
      if (props.polluted) {
        allfish.forEach(
          function (fish) {
            fish.revive();
          }
        )

      } else {
        //fishOne.kill();
        //fishTwo.kill();
        //fishThree.kill();
        //fishFour.kill();
        allfish.forEach(
          function (fish) {
            fish.kill();
          }
        )
      }
    }
  }




  p5.preload = () => {
    //fishOne.preload(); // call the preload function from fish class
    //fishTwo.preload(); // call the preload function from fish class
    //fishThree.preload(); // call the preload function from fish class
    //fishFour.preload();
    allfish.forEach(
      function (fish) {
        fish.preload();
      }
    )
  };



  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    wave.setup();
    allfish.forEach(
      function (fish) {
        fish.setup();
      }
    )

  };

  function drawBlurryTitles() {
    p5.textSize(100);
    p5.fill(205, 255, 255, 120);
    p5.text('Life below water', p5.windowWidth / 3, p5.windowHeight / 10 + 20);
    p5.fill(185, 255, 255, 120);
    p5.text('Life below water', p5.windowWidth / 3, p5.windowHeight / 10 + 60);
    p5.fill(100, 185, 255, 80);
    p5.text('Life below water', p5.windowWidth / 3, p5.windowHeight / 10 + 100);
    p5.fill(100, 145, 255, 40);
    p5.text('Life below water', p5.windowWidth / 3, p5.windowHeight / 10 + 140);
    p5.fill(80, 125, 255, 40);
    p5.text('Life below water', p5.windowWidth / 3, p5.windowHeight / 10 + 180);

    p5.fill(255, 255, 255, 180);

    p5.text('Life below water', p5.windowWidth / 3, p5.windowHeight / 10 - 10); // rendered last for better appearance
  }

  p5.draw = () => {
    p5.background("#8ee3faff");
    // p5.background(220, 160, 100);

    // draw sun
    p5.fill(sun);
    p5.noStroke();
    p5.circle(25, 25, 250);

    drawBlurryTitles();

    wave.draw();


    //fishOne.moving();
    //fishTwo.moving();
    //fishThree.moving();
    //fishFour.moving();
    allfish.forEach(
      function (fish) {
        fish.moving();
      }
    )


  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    wave.setup();
    allfish.forEach(
      function (fish) {
        fish.setup();
      }
    )
  }




  // g = p5.random(180,220);
  // b = p5.random(200,220)
  // p5.fill(100,g,b)

  //}
}


const waterconsts = {
  polluted: {
    blue: 150,
    green: 150,
    polluted: false,
  },
  clean: {
    blue: 220,
    green: 190,
    polluted: true,
  }
}


interface sketchProps {
  pollution: boolean;
}


export default function Sketch(props: sketchProps): JSX.Element {
  const [P5Wrapper, setP5Wrapper] = useState<any>(null);

  useEffect(() => {
    // Dynamically import p5-wrapper only in the browser
    import("@p5-wrapper/react").then((mod) => {
      setP5Wrapper(() => mod.ReactP5Wrapper);
    });

  }, []); // [] is dependency for rendering

  if (!P5Wrapper) return <div>Loading sketch...</div>;
  // const 

  return <P5Wrapper
    sketch={sketch}
    blueWater={props.pollution ? waterconsts.polluted.blue : waterconsts.clean.blue}
    greenWater={props.pollution ? waterconsts.polluted.green : waterconsts.clean.green} // ? means if, : means else
    polluted={props.pollution ? waterconsts.polluted.polluted : waterconsts.clean.polluted}
  />;
}
