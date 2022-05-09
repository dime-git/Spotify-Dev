import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/User/login';


function App() {
  return (
    <div id="body">
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>


  )
}

export default App;