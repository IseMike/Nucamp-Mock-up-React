import { Col } from "reactstrap";
import { useSelector } from "react-redux"
import { selectMenuItemByQuantity } from "../menuitems/menuItemsSlice"
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
                  There are no items in your cart yet.
            </Col>
      );
};

export default CartItemsList;