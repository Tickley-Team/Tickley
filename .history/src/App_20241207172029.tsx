import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import AskSpareTime from './pages/AskSpareTime'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ask" element={<AskSpareTime />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
