// import { useState, FormEvent, ChangeEvent } from "react"
import styles from "../Home/Home.module.css"
// import { ListenAgain } from "../ListenAgain/ListenAgain"
// import { Recomended } from "../RecomendedAlbums/Recomended"
// import { Stopwatch } from "../useRef/useRef"
// import { FormRef } from "../useRef/useRef"
// import { VideoPlayer } from "../useRef/useRef"
// import { AudioPlayer } from "../useRef/useRef"
// import { ResizeComponent } from "../Resize/Resize" 
// import { Resize } from "../Resize/Resize"
// import { PedirDatos } from "../Fetch/datos"
// import { Audio } from "../AudioBoom/audioBoom"
// import { App2 } from "../patrones/patrones"
// import { App3 } from "../patrones/patrones"
// import App8 from "../EjerciciosClase/patrones/propDelegation"
//  import { Playbar } from "../EjerciciosClase/Playbar/playbar"
import App9 from "../EjerciciosClase/Playbar/playbar"
// import { PedirDatos } from "../Fetch/datos"



export const Home = () =>{
 

    return(
        <div className={styles.home}> 
        {/* <PedirDatos/> */}
            <App9/>
        {/* <App8/> */}
          {/* <Playbar/>   */}
        {/* <App2/> */}
        
         {/* <VideoPlayer/>  */}

            {/* <PedirDatos/> */}



            
             {/* <Audio/>
  
           
             <ListenAgain /> 
           
            <Recomended />  

           
             <br /><br /><br />

           
            <br /><br />

            <FormRef/> 

            <Resize/>  

             <Stopwatch/> */}


        

        </div> 
        
    )
}