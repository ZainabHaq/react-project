import './App.css';
import Navb from './Components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import Contact from './Components/ContactUs';
import About from './Components/About';
import Services from './Components/Services';
function App() {
  return (
    <div className="App">
     <Router>
         <Navb/>
        <Routes>
    
           <Route exact path='/' element={<Home/>}/>
           <Route exact path='/contact-us' element={<Contact/>}/>
           <Route exact path= '/services' element={<Services/>}/>
           <Route exact path= '/About' element={<About/>}/>

        </Routes>
        
     </Router>

    </div>
  );
}

export default App;
