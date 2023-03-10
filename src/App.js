import './App.css';
import Nav from './conponents/Nav';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav/>} />
    </Routes>
  )
}

export default App;
