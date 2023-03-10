import { Row, Col } from 'reactstrap';

const CartItem = ({ item }) => {
      const { name, image, quantity } = item;

      return (
            <div>
                  <Row>
                        <Col>{image}</Col>
                        <Col>{name}</Col>
                        <Col>
                              <button id='plus'><i className="fa fa-plus" /></button>
                              {quantity}
                              <button id='minus'><i className="fa fa-minus" /></button>
                        </Col>
                  </Row>
            </div>
      )
};

export default CartItem;