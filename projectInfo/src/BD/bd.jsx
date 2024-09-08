import foto1 from "../Images/foto1.webp"
import foto2 from "../Images/foto2.jpg"
import foto3 from "../Images/foto3.png"
import foto4 from "../Images/foto4.webp"
import foto5 from "../Images/foto5.jpg"
import foto6 from "../Images/foto6.jpg"
import foto7 from "../Images/foto7.jpg"
import foto8 from "../Images/foto8.jpg"
import foto9 from "../Images/foto9.jpg"
import foto10 from "../Images/foto10.jpg"

export const bd = () => {
    
       const album1 = [
            {
                id:"1",
                name: "Playlist Name",
                Subtitle:"Artist Name. 68 songs",
                image:foto1
               
            },
            {
                id:"2",
                name: "Song Title",
                Subtitle:"Channel/Artist.540M views",
                image:foto2
               
            },
            {
                id:"3",
                name: "Playlist Name",
                Subtitle:"Artist Name. 68 songs",
                image:foto3
            },
            
           
        ]

        const album2 = [
            {
                id: "6",
                name: "Playlist Name 2",
                Subtitle: "Artist Name 2. 68 songs",
                image: foto6
            },
            {
                id: "7",
                name: "Song Title 2",
                Subtitle: "Channel/Artist 2. 540M views",
                image: foto7
            },
            {
                id:"8",
                name: "Playlist Name",
                Subtitle:"Artist Name. 68 songs",
                image:foto8
            },
           
            
        ];
        
        return {album1, album2};

}