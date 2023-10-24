import { useState } from "react";
import 'reactjs-popup/dist/index.css';
import { dataref } from "../../firebase";

export default function Form(props) {
  const [invitados, setInvitados] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleAdd = () => {
    if (invitados == null || invitados === "") {
      setError("El campo de invitados no puede estar vacío.");
      setSuccessMessage("");
      return;
    }

    // Realizar una consulta para verificar si el invitado ya existe
    dataref
      .ref()
      .child("invitados")
      .orderByValue()
      .equalTo(invitados)
      .once("value")
      .then((snapshot) => {
        if (snapshot.exists()) {
          setError("El invitado ya está en la lista.");
          setSuccessMessage("");
        } else {
          // El invitado no existe, se puede agregar a la lista
          dataref.ref().child("invitados").push(invitados);
          setInvitados("");
          setError("");
          setSuccessMessage("El invitado se ha registrado exitosamente.");
        }
      })
      .catch((error) => {
        console.error("Error al consultar la base de datos:", error);
      });
  }

  return (
    <div>
      <input
      className="boton-negro"
        value={invitados}
        onChange={(e) => {
          setInvitados(e.target.value);
          setError("");
          setSuccessMessage(""); // Limpiar el mensaje de éxito cuando el usuario cambia el valor
        }}
        autoComplete="off"
      />
      <button onClick={handleAdd} className="boton-negro">Enviar</button>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}

    </div>
  );
}
