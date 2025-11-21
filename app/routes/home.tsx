import './../app.css';
import { getPollution, postClean, postPollute } from '~/helpers/backend';
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

  function pollute() {
    console.log('hellooo');
  
 
    async function fetchData() {
      const data = await postPollute();
      console.log('changing polution to: ' + data)
      setPollution(data);
    }
    fetchData();
    //get pollution then set the state
  } 

  function clean(){
    async function fetchData() {
      const data = await postClean()
       console.log('changing polution to: ' + data)
       setPollution(data);
    }
    fetchData();
  }

 // https://www.slingacademy.com/article/typescript-handle-html-button-onclick-event/


  return (
    <div className='container'>
      <button style={{top: "2vh"}} onClick={pollute}>☢️</button>
      <button style={{top: "10vh"}} onClick={clean}> 💧 </button>
      <p className='pollutionText' id='pollutedText'> click to see the consequences</p>
      <p className='pollutionText' id='cleanText' style={{top: "12vh"}}> click to help </p>
      <div className='sketch'>
        <P5Sketch pollution={pollution} /> {/*pollution inside brackets comes from the state hook */}
      </div>
        <button id='link'> what you can do to help </button>
    </div>
  );
}

export default App;





