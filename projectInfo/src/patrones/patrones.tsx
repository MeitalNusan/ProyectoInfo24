import React, { useState, useRef, useEffect } from "react";
import { AuthRequired } from "../Auth/AuthRequired";

type User = {
    name: string;
    registrationStatus: string
}

type BannerProps = {
    type:'success' | 'error' ;
    children:React.ReactNode
}

function Banner({type, children}: BannerProps){
    const backgroundColor = type === 'success' ? 'green' : 'red';
    return <div style={{ backgroundColor }}>{children}</div>
}

const USER: User = {
    name: "Meiti",
    registrationStatus: "verified"
}

export const App2 = () => {
    return(
        <AuthRequired user={USER}>
        <Banner type="success" >
          Login exitoso, {USER.name}!
        </Banner>
        </AuthRequired>
  

    )
   
}



// export const Banner = ({ message, onClose }) => {
//     return (
//       <div className="banner">
//         <p>{message}</p>
//         <button onClick={onClose}>Cerrar</button>
//       </div>
//     );
//   };
  
   
   
  
//   export const App3 = () => {
//     const [showBanner, setShowBanner] = useState(true);
  
//     const handleClose = () => {
//       setShowBanner(false);
//     };
  
//     return (
//       <div>
//         {showBanner && <Banner message="¡Bienvenido a nuestro sitio!" onClose={handleClose} />}
//         <h1>Contenido principal de la aplicación</h1>
//       </div>
//     );
//   };
  