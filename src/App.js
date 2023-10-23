import React, { useEffect } from "react";
import './App.css';
import Countdowntimer from './Components/CountDownTimer/Countdowntimer';
import Form from './Components/Forms/form';

function App() {
  useEffect(() => {
    // Crea una instancia de Google Maps y coloca un marcador en la dirección especificada.
    const mapOptions = {
      center: { lat: 32.534174, lng: -117.016685 }, // Coordenadas de la dirección
      zoom: 15, // Nivel de zoom
    };

    const map = new window.google.maps.Map(document.getElementById("map"), mapOptions);

    // Crea un marcador en la ubicación
    new window.google.maps.Marker({
      position: { lat: 32.534174, lng: -117.016685 },
      map: map,
      title: "Dirección: P.º de los Héroes 98, Zona Urbana Río Tijuana, 22010 Tijuana, B.C.",
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Ven al cumpleaños de Eduardo</p>
        <p>Faltan.</p>
        <Countdowntimer CountdownTimestampMs={1700236800000} />
        <p>Para el gran día!!!</p>
        <video src={"https://umasbuckets.s3.amazonaws.com/victorvideo.mp4"} width="380" height="280vh" controls="controls" autoPlay={true} />
        <p>Confirma tu asistencia</p>
        <Form />
        <div>
          <h3>Te estaremos esperando!!!!</h3>
        </div>
        {/* Envuelve el mapa con un enlace para abrir Google Maps */}
        <div id="map" style={{ width: "100%", height: "50vh" }}>
          <a
            href="https://www.google.com/maps?q=P.+de+los+H%C3%A9roes+98,+Zona+Urbana+R%C3%ADo+Tijuana,+22010+Tijuana,+B.C."
            target="_blank"
            rel="noopener noreferrer"
          >

          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
