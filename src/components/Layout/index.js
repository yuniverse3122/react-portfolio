import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <SideBar />
      <div className="page">
        <Outlet />

        <span className="tags bottom-tags">
          <br />
        </span>
      </div>
    </div>
  )
}

export default Layout
