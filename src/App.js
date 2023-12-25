//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import TableChart from './components/TableChart';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import IconAlert from './components/IconAlert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

function App() {
 const  togglemode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert('Dark mode has been enabled!');
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert('Light mode has been enabled!');
  }
 }
 const showAlert=(message)=>{
    
    setAlert({msg:message});
    setTimeout(() => {
      setAlert(null);
    }, 1500);
 }
 const [alert, setAlert] = useState(null)

  const [mode, setMode] = useState('light')
  return (
    <Router>
    <>
    <NavBar title="ResponsiveUtility" about ="Visualization" TableChart='TableChart' mode={mode} togglemode={togglemode}/>
   <IconAlert alert={alert}/>
     
      
   

  <div className="container my-3">
  <Routes>
          <Route path="/about"  element={<About />}></Route>
            
          <Route path="/TableChart" element={<TableChart/>}>
            
          </Route>
          <Route path="/" element={<TextForm heading="Enter Text To Analize Here" showAlert={showAlert} mode={mode}/>}>
            
            
          </Route>
  </Routes>
   
    </div>
   
   

   
    </>
    </Router>
  );
}

export default App;
