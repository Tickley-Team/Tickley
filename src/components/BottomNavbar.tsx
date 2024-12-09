import { Link, useLocation } from 'react-router';

import './BottomNavbar.css'

const BottomNavbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="bottom-navbar" style={{ marginBottom: '13px', backgroundColor: '#FFFFFF' }}>
      <Link to="/todos">
        <img 
          src={pathname === '/todos' 
            ? '/src/assets/navbar/today-todos-click.svg'
            : '/src/assets/navbar/today-todos-unclick.svg'} 
          alt='오늘 할일' 
        />
      </Link>
      <Link to="/todos/find">
        <img 
          src={pathname === '/todos/find'
            ? '/src/assets/navbar/find-todos-click.svg'
            : '/src/assets/navbar/find-todos-unclick.svg'} 
          alt='할일 찾기' 
        />
      </Link>
      <Link to="/todos/memory">
        <img 
          src={pathname === '/todos/memory'
            ? '/src/assets/navbar/todos-memory-click.svg'
            : '/src/assets/navbar/todos-memory-unclick.svg'} 
          alt='기록' 
        />
      </Link>
    </div>
  )
}

export default BottomNavbar

