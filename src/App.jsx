import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import { Home, About, Visualization } from './pages';

const App = () => {
  return (
      <main className='bg-slate-300/20'>
          <Router>
              <NavBar />
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/visualization' element={<Visualization />} />
              </Routes>
          </Router>
      </main> )
}

export default App
