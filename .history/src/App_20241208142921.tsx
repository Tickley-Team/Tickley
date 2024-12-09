import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Todos from './pages/Todos'
import TodosFind from './pages/TodosFind'
import SurveySpareTime from './pages/SurveySpareTime'
import Home from './pages/Home'
import OnboardingPage from './pages/OnboardingPage'
import TodosMemory from './pages/TodosMemory'
import ProgressTimer from './pages/ProgressTimer'
import CompletedTimer from './pages/CompletedTimer'
import { fetchRecommendTodos } from './api/fetchRecommendTodos'
import { RouterProvider } from 'react-router'

function App() {
  const basename = process.env.NODE_ENV === 'production' ? '/Tickley' : '/'

  return (
    <div className="App">
      <RouterProvider router={router} basename={basename} />
    </div>
  )
}

export default App
