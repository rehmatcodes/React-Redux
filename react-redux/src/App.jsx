import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>rehmat</h1>
      <addtodo/>
      <todo/>
    </>
  )
}

export default App
