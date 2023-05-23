import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';
import AboutMe from './components/AboutMe/AboutMe';
import Posts from './components/Posts/Posts';
import AboutUser from './components/AboutUser/AboutUser';

function App() {
  return (
    <div className='p-3'>
    <Routes>
      <Route path='/' element={<Posts/>}/>
      <Route path='/about-me' element={<AboutMe/>}/>
      <Route path='/about-user/:id' element={<AboutUser/>}/>
    </Routes>
    </div>
  )
}

export default App
