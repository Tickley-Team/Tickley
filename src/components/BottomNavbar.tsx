import {Link} from 'react-router'
import './BottomNavbar.css'

const BottomNavbar = () => {
    return (
        <div className="bottom-navbar" style={{ marginBottom: '13px', backgroundColor: '#FFFFFF' }}>
          <Link to="/todos">
            <img src='/src/assets/navbar/today-todos-click.svg' alt='오늘 할일' />
          </Link>
          <Link to="/todos/find">
            <img src='/src/assets/navbar/find-todos-click.svg' alt='할일 찾기' />
          </Link>
          <Link to="/todos/memory">
            <img src='/src/assets/navbar/todos-memory-click.svg' alt='기록' />
          </Link>
        </div>
    )
}

export default BottomNavbar

