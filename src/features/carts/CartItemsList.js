import { Col } from "reactstrap";
import CartItem from "./CartItem";

const CartItemsList = ({ cartItems }) => {
      console.log(cartItems);
      if (cartItems && cartItems.length > 0) {
            return (
                  <Col>
                        <h3>Cart:</h3>
                        {cartItems.map((cartItem) => {
                              console.log(cartItem);
                              return <CartItem key={cartItem.id} menuItem={cartItem}/>;
                        })}

                  </Col>
            );
      }
      return (
            <Col>
                  <h3>There are no items in your cart yet.</h3>
            </Col>
      );
};

export default CartItemsList;