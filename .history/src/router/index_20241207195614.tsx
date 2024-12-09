import { createBrowserRouter } from 'react-router'
import Home from '../pages/Home'
import OnBoarding from '../pages/OnBoarding'
import SurveySpareTime from '../pages/SurveySpareTime'
import Todos from '../pages/Todos'
import TodosFind from '../pages/TodosFind'

const delay: () => Promise<unknown> = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}
const fetchData = async () => {}
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: ' /onboarding',
    element: <OnBoarding />,
  },
  {
    path: '/todos',
    element: <Todos />,
  },
  {
    path: '/todos/find',
    element: <TodosFind />,
    loader: fetchData,
  },
  {
    path: '/survey',
    element: <SurveySpareTime />,
  },
])
