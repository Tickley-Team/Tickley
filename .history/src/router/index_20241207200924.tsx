import { createBrowserRouter } from 'react-router'
import Home from '../pages/Home'
import OnBoarding from '../pages/OnBoarding'
import SurveySpareTime from '../pages/SurveySpareTime'
import Todos from '../pages/Todos'
import TodosFind from '../pages/TodosFind'

const delay: (ms: number) => Promise<boolean> = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, ms)
  })
}

const postData = () => {}
const fetchData = async (key) => {
  await delay(1000)
  const response = localStorage.getItem(key)
  return response
}
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
