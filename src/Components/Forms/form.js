import { useState } from "react";

export default function Form(props) {
  const [search, setSearch] = useState("");
  
  return (
    <>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          // setSearch( search + '\n' + );
          props.pass(ev.target.search.value);
        }}
      >
        <input type="text" name="search" autoComplete="off" />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
