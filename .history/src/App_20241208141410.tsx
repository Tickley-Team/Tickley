import './App.css'
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router'
import Todos from './pages/Todos'
import TodosFind from './pages/TodosFind'
import SurveySpareTime from './pages/SurveySpareTime'
import Home from './pages/Home'
import OnboardingPage from './pages/OnboardingPage'
import TodosMemory from './pages/TodosMemory'
import ProgressTimer from './pages/ProgressTimer'
import CompletedTimer from './pages/CompletedTimer'
=======
import { RouterProvider } from 'react-router'
import { router } from './router'
>>>>>>> 4cdd3c7 (feat: 추천 아이템 리스트 가져오기)

function App() {
  const basename = process.env.NODE_ENV === 'production' ? '/Tickley' : '/'
  
  return (
    <div className="App">
<<<<<<< HEAD
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/todos/find" element={<TodosFind />} loader={}/>
          <Route path="/todos/memory" element={<TodosMemory />} />
          <Route path="/survey" element={<SurveySpareTime />} />
          <Route path='/onboarding/:onboardingId' element={<OnboardingPage />} />
          <Route path="/timer/progress" element={<ProgressTimer />} />
          <Route path="/timer/completed" element={<CompletedTimer />} />
        </Routes>
      </BrowserRouter>
=======
      <RouterProvider router={router} />
>>>>>>> 4cdd3c7 (feat: 추천 아이템 리스트 가져오기)
    </div>
  )
}

export default App
