import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from '../src/Components/Header/Header';
import Tasks from './Pages/Tasks/Tasks';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter >
      {/* Estatico */}
      <Header titulo='Users'/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tasks' element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
