//import './../app.css';
import { getPollution, postPollute } from '~/helpers/backend';
import P5Sketch from './../helpers/lifebelowwater';
import { useEffect, useState } from 'react';









function App() {

  const [pollution, setPollution] = useState(false);

  useEffect(() => {

    async function fetchData() {
      const data = await getPollution();
      console.log('changing polution to: ' + data)
      setPollution(data);
    }
    fetchData();
    //get pollution then set the state
  }, [pollution]); // [pollution] means when the pollution changes the useEffect

  function handleClick() {
    console.log('hellooo');
  
 
    // STEP THREE: use the same strategy as the fetchData in the useEffect to set the new pollution to the result of postPollute

     

    async function fetchData() {
      const data = await postPollute();
      console.log('changing polution to: ' + data)
      setPollution(data);
    }
    fetchData();
    //get pollution then set the state
  } 

  


  return (
    <div className='container'>
      <button onClick={handleClick}>💧</button>
      <div className='sketch'>
        <P5Sketch pollution={pollution} /> {/*pollution inside brackets comes from the state hook */}
      </div>
    </div>
  );
}

export default App;





