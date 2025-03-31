import Header from './header/Header';
import {Route, Routes} from 'react-router-dom'
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Dashboard from './dashboard/Dashboard';

function App() {

  return (
    <>
    <div className='h-screen bg-gray-700 border-amber-900 text-white'>
    <Header/>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App
