import {Link, Outlet} from 'react-router-dom'
function Layout() {
  return (
    <>
      <Outlet/>
      <nav>
        <ul style={{ listStyle: 'none' }}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/first'>First page</Link></li>
          <li><Link to='/second'>Second page</Link></li>
          <li><Link to='/third'>Third page</Link></li>
        </ul>
      </nav>
      <h2>Element that was selected</h2>
      <Outlet/>
      <h2>Element that was selected</h2>
    </>
  )
}
export default Layout