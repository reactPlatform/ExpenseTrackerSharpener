import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import RegisterForm from './registerForm';
import Loginfiller from './loginForm';
import ForgotPassword from './forgotPassword';
import ProfileUpdate from './profileUpdate';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Loginfiller />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/signup' element={<RegisterForm />}/>
        <Route path='/forgotPassword' element={<ForgotPassword />}/>
        <Route path='/updateProfile' element={<ProfileUpdate />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
