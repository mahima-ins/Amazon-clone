
import React from 'react'
import './App.css'
import { BrowserRouter, Routes,  Route} from "react-router-dom" ;
import Header from './Header';
import Home from './Home';
import { StateProvider } from './StateProvider.jsx'
 import reducer, { initialState } from './reducer.jsx'




function App() {
  

  return (
    
    <BrowserRouter>
   
    <StateProvider initialState={initialState} reducer={reducer}> 
    <Header/>
  
  
    
       <Routes>
       
       {/* <Route path="/" element={<Header/>} /> */}
      
       <Route path="/" element={<Home/>} />
       
    
    
      
    
    
     </Routes>
     </StateProvider>
    </BrowserRouter>
  
    
      
  );
}

export default App
