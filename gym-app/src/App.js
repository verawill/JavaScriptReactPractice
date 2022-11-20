import React from 'react'
import './App.css';
import { Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';
import ExceriseDetail from './pages/ExceriseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box width = "400px" sx = {{width: { x1: '1488px'}}} m = "auto">
    <Navbar/>
    <Routes>
        <Route path = "/" element = { <Home />}/>
        <Route path = "/exercise/:id" element = { <ExceriseDetail />}/>

    </Routes>
    <Footer/>
    </Box>
  )
}

export default App