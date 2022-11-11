import './App.css';
import Countdowntimer from './Components/CountDownTimer/Countdowntimer';
import Form from './Components/Forms/form';
import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore";
import { db } from './firebase';


export const createItem = async(obj) => {
  const colRef = collection(db, 'invitados');
  const data = await addDoc(colRef, obj);
  return data.id;
}

function App() {
  
  const addOrEditLink = (linkObject) => {
    console.log(linkObject)
    createItem(linkObject);
    // db.coll
  }


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
        <Countdowntimer CountdownTimestampMs={1668812400000}/>
        <p>Para el gran dia!!!</p>
        <video src={"https://umasbuckets.s3.amazonaws.com/victorvideo.mp4"} width="300" height="600" controls="controls" autoPlay={true} />
      <p>Confirma tu asistencia</p>
      <Form pass = {addOrEditLink}/>
      </header>
    </div>
  );
}

export default App;
