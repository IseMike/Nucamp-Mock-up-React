import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
      return (
            <footer className='site-footer'>
                  <Container>
                        <Row className='row align-items-center'>
                              <Col xs={{ size: 4, offset: 1 }} sm='2'>
                                    <h5>Links</h5>
                                    <ul className='list-unstyled'>
                                          <li>
                                                <Link to='/' className='nav-red'>Home</Link>
                                          </li>
                                          <li>
                                                <Link to='/menu' className='nav-red'>Menu</Link>
                                          </li>
                                          <li>
                                                <Link to='/contact' className='nav-red'>Contact</Link>
                                          </li>
                                    </ul>
                              </Col>
                              <Col xs='6' sm='3' className='text-center'> <h5>Social</h5>
                                    <a
                                          className='btn btn-social-icon btn-instagram'
                                          href='http://instagram.com/'
                                    >
                                          <i className='fa fa-instagram' />
                                    </a>{' '}
                                    <a
                                          className='btn btn-social-icon btn-facebook'
                                          href='http://www.facebook.com/'
                                    >
                                          <i className='fa fa-facebook' />
                                    </a>{' '}
                                    <a
                                          className='btn btn-social-icon btn-twitter'
                                          href='http://twitter.com/'
                                    >
                                          <i className='fa fa-twitter' />
                                    </a>{' '}
                              </Col>
                              <Col sm='4' className='text-center'> <a
                                    role='button'
                                    className='btn btn-link nav-red'
                              >
                                    <i className='fa fa-phone' /> 1-111-111-1111
                              </a>
                                    <br />
                                    <a
                                          role='button'
                                          className='btn btn-link nav-red'
                                          href='mailto:Snoopys@business.co'
                                    >
                                          <i className='fa fa-envelope-o' /> fake@email.com
                                    </a>
                              </Col>
                        </Row>
                  </Container>
            </footer>
      );
}

export default Footer;