import { useLoaderData } from 'react-router'

const TodosFind = () => {
  const data = useLoaderData()
  console.log('dasta', data)
  return <div>할일 찾기 페이지입니다.</div>
}

export default TodosFind
