import Todos from './pages/Todos'
import TodosFind from './pages/TodosFind'
import SurveySpareTime from './pages/SurveySpareTime'
import Home from './pages/Home'
import OnboardingPage from './pages/OnboardingPage'
import TodosMemory from './pages/TodosMemory'
import ProgressTimer from './pages/ProgressTimer'
import CompletedTimer from './pages/CompletedTimer'
import { fetchRecommendTodos } from './api/fetchRecommendTodos'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { ThemeProvider } from '@mui/material/styles'
import { TickleyTheme } from './theme'
import CssBaseline from '@mui/material/CssBaseline'

function App() {
  const isProduction = process.env.NODE_ENV === 'production'
  const basename = isProduction ? '/Tickley' : '/'

  const router = createBrowserRouter(
    [
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
        loader: () =>
          fetchRecommendTodos(
            `${import.meta.env.BASE_URL}data/todoRecommendData.json`,
          ),
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
    ],
    {
      basename,
    },
  )

  return (
    <ThemeProvider theme={TickleyTheme}>
      <RouterProvider router={router} />
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
