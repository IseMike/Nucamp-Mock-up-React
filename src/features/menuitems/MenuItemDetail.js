import { Card, CardBody, CardImg, Col, CardText, Button } from "reactstrap";

const MenuCard = ({ menuitem }) => {
      const { image, name, description } = menuitem;
      return (
            <Col md='5' className="m-1" sticky='top' id='detailedItem'>
                  <Card>
                        <CardImg width='100%' src={image} alt={name} />
                        <CardBody>
                              <h3>{name}</h3>
                              <CardText>{description}</CardText>
                        </CardBody>
                        <Button>Add to Cart</Button>
                  </Card>
            </Col>
      );
};

export default MenuCard;