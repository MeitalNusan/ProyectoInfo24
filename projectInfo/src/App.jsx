import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Home/Home';
import { Layout } from './components/Layout/layout';
 
const App = () => {


  return (
    <>
    <BrowserRouter>
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
