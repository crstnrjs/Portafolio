import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import Header from './components/Header/header'
import Info from './components/Home/Info'
import AboutMe from './components/Home/AboutMe'
import Contact from './components/Home/Contact'
import './App.css'

const styles = {
  screen: "flex flex-col"
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col'>
      <div>
        <Header />
      </div>
      <div className=''>
        <Info id="info"/>
        <AboutMe id="about"/>
        <Contact id="contact"/>
      </div>
    </div>      
    </>
  )
}

export default App
