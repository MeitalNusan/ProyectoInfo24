//  import React, {useState, useEffect} from "react";
//  import { Playbar } from "./playbar";

// const podcasts = [
//   {
//       title: "Podcast 1",
//       image: "url_de_imagen_1.jpg",
//       audioUrl: "url_de_audio_1.mp3",
//   },
//   {
//       title: "Podcast 2",
//       image: "url_de_imagen_2.jpg",
//       audioUrl: " ",
//   },
//   // Agrega más podcasts según sea necesario
// ];

// function App9() {
//   const [currentPodcast, setCurrentPodcast] = useState(null);

//   const handlePlay = (podcast) => {
//       setCurrentPodcast(podcast);
//   };

//   const handleClose = () => {
//       setCurrentPodcast(null);
//   };

//   return (
//       <div className="App">
//           <h1>Lista de Podcasts</h1>
//           <div>
//               {podcasts.map((podcast, index) => (
//                   <div key={index} style={{ margin: '10px 0' }}>
//                       <h2>{podcast.title}</h2>
//                       <button onClick={() => handlePlay(podcast)}>Play</button>
//                   </div>
//               ))}
//           </div>
//           {currentPodcast && <Playbar podcast={currentPodcast} onClose={handleClose} />}
//       </div>
//   );
// }


// export default App9;