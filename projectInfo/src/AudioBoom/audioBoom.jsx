import React, { useState, useRef, useEffect } from "react";
 
 
export const Audio = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef(null)   //<HTMLVideoElement | null> mirar en el componente useRef como se usa


const handleClick = () => {
    const nextIsPlaying = !isPlaying
    setIsPlaying(nextIsPlaying)
    if (isPlaying) {
        videoRef.current?.pause()
    } else {
        videoRef.current?.play()
    }
}

    return (
        <>
            <button onClick={handleClick}>{isPlaying? "Pause" : "Play"}</button>
            <video ref={videoRef} width="250">
                <source 
                     src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" 
                     rel="nofollow"
                     type="video/mp4"
                />
            </video>

        </>
    )
}