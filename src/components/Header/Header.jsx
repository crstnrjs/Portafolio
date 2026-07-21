import React from 'react'
import Navbar from './Navbar'

const styles = {
  Head: "fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10",
  boxHead: "max-w-7xl mx-auto px-6 py-4", 
}

const header = () => {
  return (
    <header className={styles.Head}>
        <div className={styles.boxHead}>
            <Navbar/>
        </div>
    </header>
  )
}

export default header
