
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage";
// index.js
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    
    <BrowserRouter>
    <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
    </BrowserRouter>
  )
}

export default App
