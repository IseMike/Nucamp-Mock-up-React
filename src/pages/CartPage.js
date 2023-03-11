import { Container, Row, Col, Button } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectMenuItemByQuantity } from "../features/menuitems/menuItemsSlice";
import { useSelector } from "react-redux";
import CartItemsList from "../features/carts/CartItemsList";
import CartItem from "../features/carts/CartItem";


const CartPage = () => {
      const cart = useSelector(selectMenuItemByQuantity);

      return (
            <div><CartItemsList cartItems={cart}/></div>
      );
};

export default CartPage;