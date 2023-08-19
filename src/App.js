import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import RegisterForm from './registerForm';
import Loginfiller from './loginForm';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<RegisterForm />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/login' element={<Loginfiller />}/>
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
