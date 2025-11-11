//import './../app.css';
import P5Sketch from './../helpers/lifebelowwater';
import { useState } from 'react';









function App() {
  const[blueWater, setBlueWater] = useState(200);
  const[greenWater, setgreenWater] = useState(220);


  function handleClick() {
    console.log('hellooo');
    setBlueWater(180);
    setgreenWater(180);
  };


  return (
    <div className='container'>
      <button onClick={handleClick}>💧</button>
      <div className='sketch'>
        <P5Sketch blueWater ={blueWater} greenWater ={greenWater} />
      </div>
    </div>
  );
}

export default App;





