import React, { useEffect } from "react";
import './App.css';
import Countdowntimer from './Components/CountDownTimer/Countdowntimer';
import Form from './Components/Forms/form';

function App() {
  useEffect(() => {
    // Crea una instancia de Google Maps y coloca un marcador en la dirección especificada.
    
  }, []);
  const targetDate = new Date('2023-11-17').getTime();
  return (
    <div className="App">
      <header className="App-header">
        <p className="fondo-color">Ven al cumpleaños de Eduardo</p>
        <p className="fondo-color">El 17 de novimbre del 2023 ya tienes una cita!!!</p>
        <p>Faltan.</p>
        <Countdowntimer CountdownTimestampMs={targetDate} />
        <p className="fondo-color">Para el gran día!!!</p>
        <video src={"https://umasbuckets.s3.amazonaws.com/victorvideo.mp4"} width="380" height="280vh" controls="controls" autoPlay={true} />
        <p className="fondo-color">Confirma tu asistencia</p>
        <Form />
        <div>
          <h3 className="fondo-color">Te estaremos esperando!!!!</h3>
        </div>
        <iframe title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53838.12936277494!2d-117.02845466588334!3d32.50255386692736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d937d801201149%3A0x1615e83cb36c43c0!2sValle%20del%20Pedregal!5e0!3m2!1sen!2smx!4v1698170667393!5m2!1sen!2smx" width="400" height="300"></iframe>
      </header>
    </div>
  );
}

export default App;
