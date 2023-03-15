import { Row, Col } from 'reactstrap';
import { decrementQuantity, incrementQuantity } from '../menuitems/menuItemsSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ menuItem }) => {
      const { name, image, quantity } = menuItem;
      const dispatch = useDispatch();

      return (
            <div className='media'>
                  <Row md='6' className='cartRow'>
                        <Col ><img src={image} /></Col>
                        <Col md='4'><h3 className='cartItem'>{name}</h3></Col>
                        <span id='quantity-buttons'>
                              <button id='plus' onClick={() => dispatch(incrementQuantity(menuItem))}><i className="fa fa-plus" /></button>
                              <h3>{quantity}</h3>
                              <button id='minus' onClick={() => dispatch(decrementQuantity(menuItem))}><i className="fa fa-minus" /></button>
                        </span>
                  </Row>
                  <br />
            </div>
      )
};

export default CartItem;