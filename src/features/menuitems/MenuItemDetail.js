import { Card, CardBody, CardImg, Col, CardText, Button } from "reactstrap";

const MenuCard = ({ menuitem }) => {
      const { image, name, description } = menuitem;
      return (
            <Col md='6' className="m-1" sticky='top' id='detailedItem'>
                  <Card>
                        <CardImg width='100%' src={image} alt={name} />
                        <CardBody>
                              <h3>{name}</h3>
                              <CardText>{description}</CardText>
                        </CardBody>
                        <button id="addCart">Add to Cart</button>
                  </Card>
            </Col>
      );
};

export default MenuCard;