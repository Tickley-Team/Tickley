import { createBrowserRouter } from "react-router";

<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding" element={<OnBoarding />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/todos/find" element={<TodosFind />} />
          <Route path="/survey" element={<SurveySpareTime />} />
        </Routes>
const router = createBrowserRouter([
    {
        path:"/", element:<Home />
    },
    {
       path:' /onboarding', element:<OnBoarding />
    },
    {
        path="/todos" element={<Todos />}      
    }
])