import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Todos from './pages/Todos.tsx'
import TodosFind from './pages/TodosFind.tsx'
import SurveySpareTime from './pages/SurveySpareTime'
import Home from './pages/Home'
import Onboarding1 from './pages/Onboarding1'
import Onboarding2 from './pages/Onboarding2'
import Onboarding3 from './pages/Onboarding3'
import Onboarding4 from './pages/Onboarding4'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/todos/find" element={<TodosFind />} />
          <Route path="/survey" element={<SurveySpareTime />} />
          <Route path="/onboarding1" element={<Onboarding1 />} />
          <Route path="/onboarding2" element={<Onboarding2 />} />
          <Route path="/onboarding3" element={<Onboarding3 />} />
          <Route path="/onboarding4" element={<Onboarding4 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
