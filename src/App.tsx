
import { Suspense } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Technologies from './components/TechnologySection/Technologies'
import type ITechnology from './type/Technology'
import Footer from './components/Footer'



 const technologiesPromise = async(): Promise<ITechnology[]> => {
    const res = await fetch("/data.json");
    const data = await res.json();
    return data;
  }



function App() {
 
 
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense fallback = {<div>Loding......</div>}>
        <Technologies technologiesPromise = {technologiesPromise()}></Technologies>
      </Suspense>
      <Footer></Footer>
      
    </>
  )
}

export default App
