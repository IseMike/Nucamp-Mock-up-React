import { selectMenuItemByQuantity } from "../features/menuitems/menuItemsSlice";
import { useSelector } from "react-redux";
import CartItemsList from "../features/carts/CartItemsList";


const CartPage = () => {
      const cart = useSelector(selectMenuItemByQuantity);

      return (
            <div><CartItemsList cartItems={cart}/></div>
      );
};

export default CartPage;