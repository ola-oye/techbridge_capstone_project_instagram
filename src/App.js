import React from 'react'
import { ThemeProvider } from './Context/ThemeProvider'
import DarkModeToggle from './Conmponents/DarkModeToggle'
import './style.css'

const App = () => {
  return (
    <ThemeProvider>
      <div className='app-container'>
        <header>
          <h1>Instagram Post</h1>
          <DarkModeToggle/>
        </header>
      </div>
    </ThemeProvider>
  )
}

export default App