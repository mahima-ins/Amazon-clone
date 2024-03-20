
import React from 'react'
import './App.css'
import { BrowserRouter, Routes,  Route} from "react-router-dom" ;
import Header from './Header';
import Home from './Home';



function App() {
  

  return (
    
    <BrowserRouter>
    <Header></Header>
    
       <Routes>
       
       {/* <Route path="/" element={<Header/>} /> */}
      
       <Route path="/" element={<Home/>} />
       
    
    
      
    
    
     </Routes>
    </BrowserRouter>
  
    
      
  );
}

export default App
