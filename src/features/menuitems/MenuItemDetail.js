import { Card, CardBody, CardImg, Col, CardText } from "reactstrap";
import { incrementQuantity } from "./menuItemsSlice";
import { useDispatch } from "react-redux";

const MenuCard = ({ menuitem }) => {
      const { image, name, description } = menuitem; 
      const dispatch = useDispatch();
      
      return (
            <Col md='6' className="m-1" sticky='top' id='detailedItem'>
                  <Card>
                        <CardImg width='100%' src={image} alt={name} />
                        <CardBody>
                              <h3>{name}</h3>
                              <CardText>{description}</CardText>
                        </CardBody>
                        <button id="addCart" onClick={() => dispatch(incrementQuantity(menuitem))}>Add to Cart</button>
                  </Card>
            </Col>
      )
};

export default MenuCard;