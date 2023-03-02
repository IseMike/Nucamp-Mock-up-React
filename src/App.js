import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Navbar, NavbarBrand } from 'reactstrap';

function App() {
      return (
            <div className="App">
                  <Navbar dark color='primary' sticky='top' expand='md'>
                        <Container>
                              <NavbarBrand href='/'>
                              </NavbarBrand>
                        </Container>
                  </Navbar>
                  Hello World
            </div>
      );
}

export default App;
