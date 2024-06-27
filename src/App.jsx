
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
// index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';



function App() {

  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
