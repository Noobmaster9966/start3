import './App.css';
import FormText from './components/formtext';
import Navbar from './components/navbar';
import About from './components/about';
import React,{useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const[mode,setmode]=useState('light');
  const[alert,setalert] = useState(null);

  const showalert = (message,type)=>{
      setalert(
     {
      msg : message,
      type : type
     }
      );
      // alert is an object having two diff info

      setTimeout(() => {
        setalert(null);
      }, 3000);
      // alert will vanish after 3 sec

  }

  const toggleMode = ()=>{
    if(mode==='light'){
    setmode('dark');
    showalert("Dark Mode has been enabled",'success');
    document.title="Text-Utils - Dark mode enabled";
  }
    else 
    {
      setmode('light');
    showalert("Light Mode has been enabled",'success');
    document.title="Text-Utils - Light mode enabled";
    
    //some fun
    // setInterval(() => {
    //   document.title="Text utils is so popular!";
    // }, 1000);
    // setInterval(() => {
    //   document.title="Download Text-Utils";
    // }, 1500);
  } 
}

  return (
    <>
    <Router>
  <Navbar name = "Text-Utils" togglemode={toggleMode} mode={mode}/>
  <Alert alert={alert}  /> 

       <Routes>
          <Route exact path="/about" element={<About heading="About-Us" togglemode={toggleMode} mode={mode}/>}>
            {/* always use "exact path" instead of "path"because if we have webpage on link /home/about - component 1 and /home has component 2 then if we write /home/about then the component of /home will also show which we dont want */}
          </Route>
          <Route exact path="/start3" element={<FormText heading = "Welcome to Text Area" mode={mode} showalert={showalert}/>}>
          </Route>
        </Routes>
</Router>
  
  </>
  // Always write first letter of component in capital, (file name can be writted in small letters)
  );
}

export default App;
