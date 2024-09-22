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
import { PedirDatos } from "../Fetch/datos"
// import { Audio } from "../AudioBoom/audioBoom"
 
  

export const Home = () =>{
 

    return(
        <div className={styles.home}>

            <PedirDatos/>
              
            
             {/* <Audio/>
  
           
             <ListenAgain /> 
           
            <Recomended />  

             <VideoPlayer/> 
             <br /><br /><br />

           
            <br /><br />

            <FormRef/> 

            <Resize/>  

             <Stopwatch/> */}


        

        </div> 
        
    )
}