import { useState } from 'react'
import './App.css'
import Counter from "./component/Counter"
import "tailwindcss";
function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='h-dvh'>
      <Counter />
    </div>
  )
}

export default App
