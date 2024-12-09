import './App.css'

import Todos from './pages/Todos'
import TodosFind from './pages/TodosFind'
import SurveySpareTime from './pages/SurveySpareTime'
import Home from './pages/Home'
import OnboardingPage from './pages/OnboardingPage'
import TodosMemory from './pages/TodosMemory'
import ProgressTimer from './pages/ProgressTimer'
import CompletedTimer from './pages/CompletedTimer'
import { fetchRecommendTodos } from './api/fetchRecommendTodos'
import { createBrowserRouter } from 'react-router'

function App() {
  const basename = process.env.NODE_ENV === 'production' ? '/Tickley' : '/'

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/todos',
      element: <Todos />,
    },
    {
      path: '/todos/find',
      element: <TodosFind />,
      loader: () => fetchRecommendTodos('/src/data/todoRecommendData.json'),
    },
    {
      path: '/todos/memory',
      element: <TodosMemory />,
    },
    {
      path: '/survey',
      element: <SurveySpareTime />,
    },
    {
      path: '/onboarding/:onboardingId',
      element: <OnboardingPage />,
    },
    {
      path: '/timer/progress',
      element: <ProgressTimer />,
    },
    {
      path: '/timer/completed',
      element: <CompletedTimer />,
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={router} basename={basename} />
    </div>
  )
}

export default App
