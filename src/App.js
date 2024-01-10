import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import GalleryPage from './Components/GalleryPage/GalleryPage.component';
import Navi from './Components/Navbar/Navbar.component';
import Home from './Components/Home/Home.component';
import Kontakti from './Components/Kontakti/Kontakti.component';



  
const App = () => {

  return (
    
    
      
      <Router>
        <Routes>
          <Route path='/' element={<Navi/>} >
            <Route index element= {<Home/>}/>
            <Route path='/home' element={<Home/>} />
            <Route path='/gallery' element={<GalleryPage/>} /> 
            <Route path='/kontakti' element={<Kontakti/>} />
          </Route>
        </Routes>
      </Router>

    
  );
}

export default App;


