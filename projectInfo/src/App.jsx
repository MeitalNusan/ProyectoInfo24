import { useState } from 'react'
import { Playbar } from './EjerciciosClase/Playbar/playbar';
import './App.css'



const podcasts = [
  {
      title: "Podcast 1",
      image: "url_de_imagen_1.jpg",
      audioUrl: "url_de_audio_1.mp3",
  },
  {
      title: "Podcast 2",
      image: "url_de_imagen_2.jpg",
      audioUrl: "url_de_audio_2.mp3",
  },
  // Agrega más podcasts según sea necesario
];

function App() {
  const [currentPodcast, setCurrentPodcast] = useState(null);

  const handlePlay = (podcast) => {
      setCurrentPodcast(podcast);
  };

  const handleClose = () => {
      setCurrentPodcast(null);
  };

  return (
      <div className="App">
          <h1>Lista de Podcasts</h1>
          <div>
              {podcasts.map((podcast, index) => (
                  <div key={index} style={{ margin: '10px 0' }}>
                      <h2>{podcast.title}</h2>
                      <button onClick={() => handlePlay(podcast)}>Play</button>
                  </div>
              ))}
          </div>
          {currentPodcast && <Playbar podcast={currentPodcast} onClose={handleClose} />}
      </div>
  );
}


export default App;



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Home } from './Home/Home';
// import { Layout } from './components/Layout/layout';
 
// const App = () => {


//   return (
//     <>
//     <BrowserRouter>
//           <Routes>
//             <Route element={<Layout/>}>
//               <Route path="/" element={<Home />} />
//             </Route>
//           </Routes>
//         </BrowserRouter>
//     </>
//   )
// }

// export default App
