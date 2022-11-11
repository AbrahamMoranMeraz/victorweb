import './App.css';
import Countdowntimer from './Components/CountDownTimer/Countdowntimer';
import Form from './Components/Forms/form';

function App() {

  return (
    <div className="App">

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Ven al cumpleaños de Eduardo
        </p>
        <p>
          Faltan.
        </p>
        <Countdowntimer CountdownTimestampMs={1668812400000} />
        <p>Para el gran dia!!!</p>
        <video src={"https://umasbuckets.s3.amazonaws.com/victorvideo.mp4"} width="300" height="600" controls="controls" autoPlay={true} />
        <p>Confirma tu asistencia</p>
        <Form />
        <div>
          <h3>Te estaremos esperando!!!!</h3>
          <img src='http://www.bajarestaurantweek.com/images/logos/54_58_deec4947ec8e48c19b83f050d5707262.jpeg' width='150' height='150' />
          <p>Blvd. Salinas 1055, Aviacion, 22014 Tijuana, B.C.</p>
          <p>No faltes!!!!</p>
        </div>
      </header>
    </div>
  );
}

export default App;
