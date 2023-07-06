import { Link } from 'react-router-dom'

import './Nav.css'

const Nav = () => {
  return (
    <>
      <nav className='nav'>
        <div className='logo'>
          <h1>👨‍🍳</h1>
        </div>

        <ul className='wrapper'>
          <Link
            className='link'
            to={'/'}
          >
            <h1>Menu</h1>
          </Link>
          <Link
            className='link'
            to={'/menu-edit'}
          >
            <h1>Ułóż Menu</h1>
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default Nav
