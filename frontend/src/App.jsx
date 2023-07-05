
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgottenPassword from './pages/ForgottenPassword'
import NewPassword from './pages/NewPassword'
import ConfirmAccount from './pages/ConfirmAccount'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path='register' element={<Register />}/>
          <Route path='forgotten-password' element={<ForgottenPassword />}/>
          <Route path='new-password/:token' element={<NewPassword/>}/>
          <Route path='confirm/:id' element={<ConfirmAccount/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
