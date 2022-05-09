import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/User/login';
import Header from './Components/User/header';


function App() {
  return (
    <div id="body">
      <Container>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>


  )
}

export default App;