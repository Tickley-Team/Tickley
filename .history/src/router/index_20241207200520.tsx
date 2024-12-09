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
const recommandCategoryMockData = [
  { categoryCode: '00', title: '휴식' },
  { categoryCode: '01', title: '운동' },
  { categoryCode: '02', title: '공부' },
]
const todoRecommandItems = [
  {
    categoryCode: '00',
    title: '휴식',
    todos: ['녹차우려먹기', '명상', '요가 '],
  },
  {
    categoryCode: '01',
    title: '운동',
    todos: ['조깅', '수영', '헬스'],
  },
  {
    categoryCode: '02',
    title: '공부',
    todos: ['영어단어외우기', '책읽기', '수학문제풀기'],
  },
  {
    categoryCode: '03',
    title: '부업/재태크',
    todos: ['녹차우려먹기', '명상', '요가 '],
  },
]

const fetchData = async () => {
  await delay(1000)
  const response = localStorage.getItem()
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
