import { createBrowserRouter } from 'react-router'

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
  },
  {
    path: '/survey',
    element: <SurveySpareTime />,
  },
])
