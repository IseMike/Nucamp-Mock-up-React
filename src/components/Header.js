import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import logo from '../app/assets/img/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
      return (
            <>
                  <Navbar sticky='top' expand='md' id='firstNav'>
                        <NavbarBrand href='/'>
                              <img src={logo} alt='logo' />
                              <h1 className='mt-1'>Snoopy's
                                    <br></br>
                                    <small>Bar & Grill</small>
                              </h1>
                        </NavbarBrand>
                  </Navbar>
                  <Navbar sticky='top' expand='md' id='secondNav'>
                        <Nav className='ms-auto' navbar>
                              <NavItem>
                                    <NavLink className='nav-link nav-red' to='/'>
                                          <i className='fa fa-lg' /> Home
                                    </NavLink>
                              </NavItem>
                              <NavItem>
                                    <NavLink className='nav-link nav-red' to='/Menu'>
                                          <i className='fa fa-lg' /> Menu
                                    </NavLink>
                              </NavItem>
                              <NavItem>
                                    <NavLink className='nav-link nav-red' to='/Cart'>
                                          <i className='fa fa-lg' /> Cart
                                    </NavLink>
                              </NavItem>
                              <NavItem>
                                    <NavLink className='nav-link nav-red' to='/contact'>
                                          <i className='fa fa-lg' /> Contact
                                    </NavLink>
                              </NavItem>
                        </Nav>
                  </Navbar>
            </>

      );
}

export default Header;