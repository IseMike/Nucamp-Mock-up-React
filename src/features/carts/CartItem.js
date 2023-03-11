import { Row, Col } from 'reactstrap';

const CartItem = ({ menuItem }) => {
      const { name, image, quantity } = menuItem;
      return (
            <div className='media'>
                  <Row md='6' className='cartRow'>
                        <Col ><img src={image} /></Col>
                        <Col md='4'><h3 className='cartItem'>{name}</h3></Col>
                        <Col>
                                    <button id='plus'><i className="fa fa-plus" /></button>
                                    <h3>{quantity}</h3>
                                    <button id='minus'><i className="fa fa-minus" /></button>
                        </Col>
                  </Row>
                  <br />
            </div>
      )
};

export default CartItem;