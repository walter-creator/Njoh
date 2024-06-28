
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import CarouselComponent from './components/Carousel';
import NavBar from './components/NavBar';
import HomePage from "./pages/HomePage";



function App() {

  return (
    <BrowserRouter>
    <div className="app-wrapper">
        <NavBar />
        <CarouselComponent />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
