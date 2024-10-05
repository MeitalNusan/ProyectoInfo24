import React, { useState, useRef, useEffect } from "react";

export const useVideo = () =>{
const [isPlaying, setIsPlaying] = useState(false)
const videoRef = useRef<HTMLVideoElement | null>(null)


const toggleVideo = () => {
    const nextIsPlaying = !isPlaying
    setIsPlaying(nextIsPlaying)
    if (isPlaying) {
        videoRef.current?.pause()
    } else {
        videoRef.current?.play()
    }
}

return {isPlaying, toggleVideo, videoRef }

}
