import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Projects from './pages/Projects';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';



const App = () => {
  return <div>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/sign-In' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/projects' element={<Projects />} />
              </Routes>
            </BrowserRouter>
         </div>;
}


export default App;