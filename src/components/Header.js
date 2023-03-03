import {Navbar, NavbarBrand} from 'reactstrap';
import logo from '../app/assets/img/logo.png';

const Header = () => {
    return (
        <Navbar sticky='top' expand='md'>
          <NavbarBrand href='/'>
            <img src={logo} alt='logo' />
          </NavbarBrand>
      </Navbar>
    );
}

export default Header;