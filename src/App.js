import './App.css';
import Home from './conponents/Home';
import { Route, Routes } from "react-router-dom";
import LoginPage from './conponents/LoginPage';
import DatesPage from './conponents/DatesPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/LoginPage.js' element={<LoginPage/>}/>
      <Route path='/DatesPage.js' element={<DatesPage/>}/>
    </Routes>
  )
}

export default App;
