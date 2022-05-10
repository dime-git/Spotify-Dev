import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/login';
import Header from './Components/Partials/header';
import Homepage from './Pages/homePage';


function App() {
  return (
    <div id="body">
      <Container>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Homepage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>

  )
}

export default App;