import { Container, Row, Col, Button } from "reactstrap";
import MenuDetail from '../features/menuitems/MenuItemDetail';
import MenuItemsList from "../features/menuitems/MenutItemsList";
import { selectMenuItemById } from "../features/menuitems/menuItemsSlice";
import { useState } from "react";
import { useSelector } from "react-redux";

const MenuPage = () => {
      const [menuItemId, setMenuItemId] = useState(0);
      const selectedMenuItem = useSelector(selectMenuItemById(menuItemId));

      return (
            <Container>
                  <Row>
                        <Col sm='5' md='7'>
                              <MenuItemsList setMenuItemId={setMenuItemId}/>
                        </Col>
                        <Col sm='7' md='5'>
                              <MenuDetail menuitem={selectedMenuItem} />
                        </Col>
                  </Row>
            </Container>
      )
};

export default MenuPage;