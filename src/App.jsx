import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd3P1S1OJ2_PYjnCqFguiz7MSu_FISFRSFniWCIMD6J8XsbSA/viewform?embedded=true" width="640" height="1113" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
    </div>
  )
}

export default App
