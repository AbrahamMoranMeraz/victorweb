import './App.css';
import Countdowntimer from './Components/CountDownTimer/Countdowntimer';



function App() {
  
  return (
    <div className="App">
      
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Faltan.
        </p>
        <Countdowntimer CountdownTimestampMs={1668812400000}/>
        <video src={"https://umasbuckets.s3.amazonaws.com/victorvideo.mp4"} width="300" height="600" controls="controls" autoPlay={true} />
      </header>
    </div>
  );
}

export default App;
