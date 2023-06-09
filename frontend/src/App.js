import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from './components/Base';
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, RouterProvider, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';
import Services from './pages/Services';
import CustomNavbar from './components/Navbar/CustomNavbar';



function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        
        <Route path ="/" element={<Home/>} />
        <Route path ="/login" element={<Login/>} />
        <Route path ="/signup" element={<Signup/>} />
        <Route path ="/about" element={<About/>} />  
        <Route path="/service" element={<Services/>}/>
  
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
