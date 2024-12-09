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