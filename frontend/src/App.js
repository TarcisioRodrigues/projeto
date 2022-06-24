import {BrowserRouter,Route, Routes} from 'react-router-dom'
import { Home } from '../src/Pages/Home';
import { Login } from '../src/Pages/Login';
import { Register } from '../src/Pages/Register';
import './global.css';

export const App = () => {
  return(
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home/>}  />
        <Route path="/login" element={<Login/>}  />
        < Route path="/register" element={<Register/>} />
    </Routes>
  </BrowserRouter>
  )
};

export default App;
