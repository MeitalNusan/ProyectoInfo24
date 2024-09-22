import React, { useEffect, useState, useRef } from "react";
import styles from "./../Home/Home.module.css"

export const PedirDatos = () => {
    const [data, setData] = useState([]); 
    const audioRef = useRef([]); 
    const [isPlaying, setIsPlaying] = useState(null);

    const handleClick = (index) => {
        const audioElement = audioRef.current[index];
        if (isPlaying === index) {
            audioElement.pause();
            setIsPlaying(null);
        } else {
            if (isPlaying !== null) {
                const previousAudio = audioRef.current[isPlaying];
                previousAudio.pause();
            }
            audioElement.play();
            setIsPlaying(index);
        }
    };

    const handleReset = (index) => {
        const audioElement = audioRef.current[index];
        if (audioElement) {
            audioElement.currentTime = 0; 
            if (isPlaying === index) {
                audioElement.play(); 
            }
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://api.audioboom.com/audio_clips");
                if (!res.ok) {
                    throw new Error('Error al cargar los datos');
                }
                const result = await res.json();
                setData(result.body.audio_clips);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData(); 
    }, []);

    return (
        <main>
    {data.length > 0 ? (
        <div className={styles.conteiner}>
            {data.map((clip, index) => (
                <div key={clip.id}>
                    <img className={styles.image} src={clip.channel.urls.logo_image.original} alt="" />
                    <audio ref={el => audioRef.current[index] = el}>
                        <source 
                            src={clip.urls.high_mp3} 
                            type="audio/mp3"
                        />
                    </audio>
                    <button onClick={() => handleClick(index)}>
                        {isPlaying === index ? "Pausar" : "Reproducir"}
                    </button>
                    <button onClick={() => handleReset(index)}>Reset</button>
                </div>
            ))}
        </div>
    ) : (
        <p>No hay datos disponibles.</p>
    )}
</main>
    )

};




// export const PedirDatos = () => {
//     const [data, setData] = useState([]); 
 

//     useEffect(() => {
        
//     const fetchData = async () => {
//         const res = await fetch("https://rickandmortyapi.com/api/character");
//         const result = await res.json();
//         setData(result.results);  
//     };
//         fetchData(); 
//     }, []);

//     return (
//         <>
//             {data.map((char) => (
//                 <div key={char.id}>
//                     <h1>{char.name}</h1>
//                 </div>
//             ))}
//         </>
//     );
// };
