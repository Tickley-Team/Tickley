import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Todos from './pages/Todos'
import TodosFind from './pages/TodosFind'
import SurveySpareTime from './pages/SurveySpareTime'
import Home from './pages/Home'
import OnboardingPage from './pages/OnboardingPage'
import TodosMemory from './pages/TodosMemory'

function App() {
  const basename = process.env.NODE_ENV === 'production' ? '/Tickley' : '/'
  
  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/todos/find" element={<TodosFind />} />
          <Route path="/todos/memory" element={<TodosMemory />} />
          <Route path="/survey" element={<SurveySpareTime />} />
          <Route path='/onboarding/:onboardingId' element={<OnboardingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
