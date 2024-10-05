import React, { useRef, useState, useEffect } from 'react';
import { Podcast } from './podcast';

export const Playbar = ({ podcast, onClose }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleProgressChange = (e) => {
        const newTime = (e.target.value / 100) * duration;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    useEffect(() => {
        const audio = audioRef.current;
        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('loadedmetadata', () => {
            setDuration(audio.duration);
        });

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, []);

    

    return (
        <div style={{ padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px', position: 'relative' }}>
            <button onClick={onClose} style={{ position: 'absolute', top: '10px', right: '10px' }}>✖️</button>
            <img src={podcast.image} alt={podcast.title} style={{ width: '50px', marginRight: '10px' }} />
            <span>{podcast.title}</span>
            <button onClick={togglePlay}>{isPlaying ? '⏸️' : '▶️'}</button>
            <button onClick={() => (audioRef.current.currentTime -= 10)}>⏪ 10s</button>
            <button onClick={() => (audioRef.current.currentTime += 10)}>⏩ 10s</button>
            <input
                type="range"
                value={(currentTime / duration) * 100 || 0}
                min="0"
                max="100"
                onChange={handleProgressChange}
                style={{ margin: '0 10px', flexGrow: 1 }}
            />
            <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
            <audio ref={audioRef} src={podcast.audioUrl} />
        </div>
    );
};

 