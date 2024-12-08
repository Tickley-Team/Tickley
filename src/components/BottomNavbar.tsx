import {Link} from 'react-router'
import './BottomNavbar.css'

const BottomNavbar = () => {
    return (
        <div className="bottom-navbar">
          <Link to="/todos">
            <button>오늘 할일</button>
          </Link>
          <Link to="/todos/find">
            <button>할일 찾기</button>
          </Link>
          <Link to="/todos/memory">
            <button>기록</button>
          </Link>
        </div>
    )
}

export default BottomNavbar

