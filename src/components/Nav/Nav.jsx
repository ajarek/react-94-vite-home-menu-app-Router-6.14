import { Link } from 'react-router-dom'


import './Nav.css'

const Nav = () => {
  return (
    <>
      <nav className='nav'>
        <div className='logo'>
          <Link
            className='link'
            to={'/'}
          >
           
            <h1>Menu</h1>
          </Link>
        </div>

        <ul className='wrapper'>
         
        </ul>
        
      </nav>
    </>
  )
}

export default Nav
