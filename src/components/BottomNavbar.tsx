import { Link, useLocation } from 'react-router'
import todayTodosClick from '../assets/navbar/today-todos-click.svg'
import todayTodosUnClick from '../assets/navbar/today-todos-unclick.svg'
import findTodoClick from '../assets/navbar/find-todos-click.svg'
import findTodoUnClick from '../assets/navbar/find-todos-unclick.svg'
import todoMemoryClick from '../assets/navbar/todos-memory-click.svg'
import todoMemoryUnClick from '../assets/navbar/todos-memory-unclick.svg'
import './BottomNavbar.css'

const BottomNavbar = () => {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <div
      className="bottom-navbar"
      style={{ marginBottom: '13px', backgroundColor: '#FFFFFF' }}
    >
      <Link to="/todos">
        <img
          src={pathname === '/todos' ? todayTodosClick : todayTodosUnClick}
          alt="오늘 할일"
        />
      </Link>
      <Link to="/todos/find">
        <img
          src={pathname === '/todos/find' ? findTodoClick : findTodoUnClick}
          alt="할일 찾기"
        />
      </Link>
      <Link to="/todos/memory">
        <img
          src={
            pathname === '/todos/memory' ? todoMemoryClick : todoMemoryUnClick
          }
          alt="기록"
        />
      </Link>
    </div>
  )
}

export default BottomNavbar
