import React, { ChangeEventHandler, ComponentProps, forwardRef, useEffect, useId, useRef, useState } from 'react';
import styles from "../../Home/Home.module.css"
import { Atom } from "lucide-react"


type SliderProps = ComponentProps<'input'> & {
    podcast1: string;
};

const Slider = forwardRef<HTMLInputElement, SliderProps>(function(
    { podcast1, ...delegated }, 
    ref
) {
    const id = useId();
    const audioRef = useRef<HTMLAudioElement[]>([]);  
    const [data, setData] = useState([]);
    const [isPlaying, setIsPlaying] = useState<number | null>(null);  
    const [currentTime, setCurrentTime] = useState<number[]>([]); 
    const [duration, setDuration] = useState<number[]>([]);  

    const togglePlay = (index: number) => {
        const audioElement = audioRef.current[index];

        if (isPlaying === index) {
            audioElement.pause();
            setIsPlaying(null);
        } else {
            audioElement.play();
            setIsPlaying(index);
        }
    };

    const handleActualiz = (index: number) => {
        const audioElement = audioRef.current[index];
        setCurrentTime(prev => {
            const newTimes = [...prev];
            newTimes[index] = audioElement.currentTime;
            return newTimes;
        });
    };

    const handleLoaded = (index: number) => {
        const audioElement = audioRef.current[index];
        setDuration(prev => {
            const newDurations = [...prev];
            newDurations[index] = audioElement.duration;
            return newDurations;
        });
    };

    const handleClick = (index: number) => {
        togglePlay(index);
    };

    const handleReset = (index: number) => {
        const audioElement = audioRef.current[index];
        audioElement.currentTime = 0;
        audioElement.pause();
        setIsPlaying(null);
        setCurrentTime(prev => {
            const newTimes = [...prev];
            newTimes[index] = 0;
            return newTimes;
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://api.audioboom.com/audio_clips");
            const result = await res.json();
            setData(result.body.audio_clips);
           
            
            setCurrentTime(new Array(result.body.audio_clips.length).fill(0));
            setDuration(new Array(result.body.audio_clips.length).fill(0));
        };

        fetchData();
    }, []);

    return (
        <main>
            {data.length > 0 ? (
                <div className={styles.conteiner}>
                    {data.map((clip, index) => (
                        <div key={clip.id} className={styles.clip}>
                            <img className={styles.image} src={clip.channel.urls.logo_image.original} alt="" />
                            <audio 
                                ref={el => audioRef.current[index] = el}
                                onTimeUpdate={() => handleActualiz(index)}
                                onLoadedMetadata={() => handleLoaded(index)}
                            >
                                <source 
                                    src={clip.urls.high_mp3} 
                                    type="audio/mp3"
                                />
                            </audio>
                            <button onClick={() => handleClick(index)}>
                                {isPlaying === index ? "Pausar" : "Reproducir"}
                            </button>
                            <button onClick={() => handleReset(index)}>Reset</button>
                            <input
                                {...delegated}
                                ref={ref}
                                type="range"
                                id={id}
                                min="0"
                                max={duration[index] || 0}
                                value={currentTime[index] || 0}
                                onChange={(e) => {
                                    const audioElement = audioRef.current[index];
                                    audioElement.currentTime = Number(e.target.value);
                                }}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <p>No hay datos disponibles.</p>
            )}
        </main>
    );
});

export const IconButton = ({text, icon}: {text:string}) =>{
    return(
        <button>
            <span>
                {icon}
            </span>
            {text}
        </button>
    )
}

const App9 = () => {
    return (
        <div>
            <h1>Mi Podcast</h1>
            <IconButton icon={<Atom/>} text="Slots" />
            <Slider podcast1="" />
            
        </div>
    );
};

export default App9;
