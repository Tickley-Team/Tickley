import { createBrowserRouter } from 'react-router'

const router = createBrowserRouter([
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
