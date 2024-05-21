import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
          <header className="header">
              <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md" >
                  <p className='blue-gradient_text'>SCU</p>
              </NavLink>
              <nav className='flex text-lg gap-7 font-medium'>
                  <NavLink to="/visualization" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>Visualization</NavLink>
                  <NavLink to="/about" className={({isActive})=> isActive ? 'text-blue-500' : 'text-black'}>About</NavLink>
              </nav>
      </header>
    </div>
  )
}

export default NavBar
