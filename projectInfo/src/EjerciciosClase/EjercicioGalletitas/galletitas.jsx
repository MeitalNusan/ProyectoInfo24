import React, { useState } from 'react';



export const Galletitas = () => {
   
  const [cookies, setCookies] = useState(0);
 
   
  
 const CookieButton =({comer}) => {
  return <button onClick={comer}>Jugar!</button>
  
 }

 const eatCookie = () => {
  setCookies(cookies + 1);
 };
  

 const resetGame = () => {
  setCookies(0); 
};

  
 const CookieCounter = ({ cookies }) =>{
  return (
    <div>
      <h2>Galletitas comidas: {cookies}</h2>
      <button onClick={resetGame}>Volver</button> 
     
    </div>
  )

  
}

  return (
    <div>
    <h1>Queres jugar?</h1>
    {cookies > 0 
        ? <CookieCounter cookies={cookies}  />   
        : <p>Aún no has comido ninguna galletita</p> 
      }
      
      <CookieButton comer={eatCookie} /> 
      
      
    </div>
  );
}
