import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home.tsx'
import OnBoarding from './pages/OnBoarding.tsx'
import Todos from './pages/Todos.tsx'
import TodosFind from './pages/TodosFind.tsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding" element={<OnBoarding />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/todos/find" element={<TodosFind />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
