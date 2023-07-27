import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
  const [mode,setMode] = useState('light');

const handelMode = () => {
  if(mode === 'light'){
    setMode('dark')
    document.body.style.background = '#253653'
    document.body.style.color = 'white'
  }
  else{
    setMode('light')
    document.body.style.background = 'white'
    document.body.style.color = '#3c3b3b'
  }
}
  return (
    <>
      <Navbar title='Text Player'  mode={mode} handelMode={handelMode}/>
      {/* <Navbar /> */} 
      <div className='container my-3'>
        <TextForm heading='Enter The Text'  mode={mode}/>
      </div>
    </>
  );
}

export default App;
