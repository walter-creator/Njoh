
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import CarouselComponent from './Components/Carousel';
import NavBar from './Components/NavBar';
import HomePage from "./Pages/HomePage";
import AboutPage from './Pages/AboutPage';



function App() {

  return (
    <BrowserRouter>
    <div className="app-wrapper">
        <NavBar />
        <CarouselComponent />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
