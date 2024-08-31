import React, { useState, FormEvent, ChangeEvent } from "react";
 
export const Formulario = () => {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("")

   

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();  
    const CODIGO = "123456"
    if(code === CODIGO){
       setMessage("Bienvenido")
    } else{
      setMessage("codigo incorrecto")
    }
   
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {  
    const newInputValue = Number(e.target.value)
    if(!isNaN(newInputValue)){
      if (e.target.value.length <= 6){
        setCode(String(newInputValue))
      }   
    }
  };


  return (
    <div>
        <form onSubmit={handleSubmit}>
      <label htmlFor="search-input">Ingrese el código</label>
      <input
        type="text"
        id="search-input"
        value={code}
        onChange={handleChange}
        maxLength={6}
      />
      <button disabled={code.length < 6} type="submit">Enviar</button>
    </form>

     {message && <p>{message}</p>}
    </div>


// si quiero que se muestre a la par que escribo en vez de crear otro estado, directamente muestro el user aca abajo del form
//{<p>{user}</p>}
    
  );
};
