import './App.css'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router'
import Home from './pages/Home.tsx'
import OnBoarding from './pages/OnBoarding.tsx'
import Todos from './pages/Todos.tsx'
import TodosFind from './pages/TodosFind.tsx'
import SurveySpareTime from './pages/SurveySpareTime'

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
