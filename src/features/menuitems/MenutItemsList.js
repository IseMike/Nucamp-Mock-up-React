import { Col, Row } from 'reactstrap';
import MenuCard from './MenuCard';
import { selectAllMenuItems } from './menuItemsSlice';

const MenuItemsList = ({ setMenuItemId }) => {
      const menuitems = selectAllMenuItems();

      return (
            <Row className='ms-auto'>
                  {menuitems.map((menuitems) => {
                        return (
                              <Col md='4' lg="3" className='m-4' key={menuitems.id} 
                              onClick={() => setMenuItemId(menuitems.id)}>
                                    <MenuCard menuitem={menuitems} />
                              </Col>
                        );
                  })}
            </Row>
      );
};

export default MenuItemsList;