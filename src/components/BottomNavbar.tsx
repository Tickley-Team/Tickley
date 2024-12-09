import { Link } from 'react-router'

import './BottomNavbar.css'
/** icon 변경  */
const BottomNavbar = () => {
  // const location = useLocation()
  // const pathname = location.pathname

  return (
    <div
      className="bottom-navbar"
      style={{ marginBottom: '13px', backgroundColor: '#FFFFFF' }}
    >
      <Link to="/todos"></Link>
      <Link to="/todos/find"></Link>
      <Link to="/todos/memory"></Link>
    </div>
  )
}

export default BottomNavbar
