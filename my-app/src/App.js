import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import { Routes } from 'react-router-dom';
import Home from './pages/Home'


import Notification from "./pages/notifications/Notification";          
import {AccountInfo} from "./pages/AccountInfo/AccountInfo"
import Contactpage from "./pages/Contact/Contactpage"
import About from "./pages/about/About"
import Homedata from './components/Homedata';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
           
           <Routes>
        
           <Route path="/" element={<Homedata />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/Contactpage" element={<Contactpage />} />
                  <Route path="/accountinfo" element={<AccountInfo />} />
                  <Route path="/Notification" element={<Notification />} />
        
           </Routes>
        </BrowserRouter>
 
    </div>
  );
}

export default App;
