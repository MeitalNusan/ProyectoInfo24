import React, { useState, useRef, useEffect } from "react";
import { useVideo } from "../Hooks/useVideo";
import { useLoading } from "../Hooks/useLoading";
 
 
export const VideoPlayer = () => {
   const { isPlaying, toggleVideo, videoRef } = useVideo()
   const { data, isLoading, error } = useLoading()

    
   if (isLoading) {
    return <p>Cargando...</p>;
}

if (error) {
    return <p>{error}</p>;
}

    return (


<main>
     {data ? (
       <>
        <button onClick={toggleVideo} aria-label={isPlaying ? "Pause video" : "Play video"}>
            {isPlaying ? "Pause" : "Play"}
             </button>
              <video ref={videoRef} width="250">
                  <source 
                     src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" 
                         type="video/mp4" 
                    />
             </video>
                </>
            ) : (
                <p>No hay datos disponibles.</p>
            )}
        </main>

 
    )
}

const AUDIO_URL = 'https://audioboom.com/posts/8562837.mp3'

export const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    
    const audioRef = useRef<HTMLAudioElement | null>(null)


const handleClick = () => {
    const nextIsPlaying = !isPlaying
    setIsPlaying(nextIsPlaying)
    if (isPlaying) {
        audioRef.current?.pause()
    } else {
        audioRef.current?.play()
    }
}

const handleReset = () => {
    if (audioRef.current) {
        audioRef.current.currentTime = 0
    }
   
}
    return (
        <>
            <button onClick={handleClick}>{isPlaying? "Pause" : "Play Audio"}</button>
            <button onClick={handleReset}>Reset</button>
            <audio ref={audioRef}>
                <source 
                     src={AUDIO_URL} 
                     rel="nofollow"
                     type="audio/mp3"
                />
            </audio>

        </>
    )
}



 export const FormRef = () => {
    const [inputValue, setInputValue] = useState('');
    const [valueReal, setValueReal] = useState('');
    const [showValue, setShowValue] = useState(false); 
    const inputRef = useRef<HTMLInputElement>(null)
    const [count, setCount] = useState(0);
 
     
       
const handleClick  = () => {
    setValueReal(inputValue) // lo guardo en valueReal porque lo vacío con el setInpuValue("") para limpiar el input y no tiene mas nada el inputValue
    setShowValue(true) 
    setInputValue("")
}

const handleClick2 = () => {
    setCount(count + 1)         
 } 

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
 
    useEffect (() => {
        inputRef.current.focus();  
    }, []) 


    useEffect(() => {
        document.title = `Has hecho clic ${count} veces`;
      }, [count]); // Se ejecuta cada vez que cambia "count"

 

    return (
        <>
        <input ref={inputRef} type="text" value={inputValue}  onChange={handleChange} />
        <button onClick={handleClick}>Focus the input</button>
        {showValue && <h1>{valueReal}</h1>}  {/* saco el showValue si quiero mostrar en tiempo real */}

        <br />

        <h1>{count}</h1>
        <button onClick={handleClick2}>contador</button>
        </> 
    )
}
    




// export const Stopwatch = () => {
//     const [startTime, setStartTime] = useState<number | null>(null)
//     const [now, setNow] = useState<number | null>(null)
//     const intervalRef = useRef<number | undefined>(undefined)

    

//     const handleStart= () => {
//         setStartTime(Date.now()) 
//         setNow(Date.now())

//         clearInterval(intervalRef.current)
//         intervalRef.current = setInterval(() =>{
//             setNow(Date.now())
//         }, 10)
//     }

//     const handleStop = () => {
//         clearInterval(intervalRef.current)
//     }

//     const secondsPassed =
//     startTime != null && now != null ? (now - startTime) / 1000 :0;

//     return(
//         <div>
//         <h1>Time passed: {secondsPassed}</h1>
//         <button onClick={handleStart}>Start</button>
//         <button onClick={handleStop}>Stop</button>
//         </div>
//     )
// }


 