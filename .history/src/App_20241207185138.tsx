import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import SurveySpareTime from './pages/SurveySpareTime'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<SurveySpareTime />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
