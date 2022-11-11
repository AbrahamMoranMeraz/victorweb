import { useState } from "react";
import { dataref } from "../../firebase";

export default function Form(props) {
  const [invitados, setInvitados] = useState("");
  
  const handleAdd = () => {
    dataref.ref().child("invitados").push(invitados)
    setInvitados("");
  }


  return (
    <div>
        <input value={invitados} onChange={(e)=>{setInvitados(e.target.value)}} autoComplete="off" />
        <button onClick={handleAdd}>Enviar</button>
    </div>
  );
}
