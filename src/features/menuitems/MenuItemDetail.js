import { Card, CardBody, CardImg, Col, CardText } from "reactstrap";

const MenuCard = ({ menuitem }) => {
      const { image, name, description } = menuitem;
      return (
            <Col md='5' className="m-1">
                  <Card>
                        <CardImg width='100%' src={image} alt={name} />
                        <CardBody>
                              <CardText>{description}</CardText>
                        </CardBody>
                  </Card>
            </Col>
      );
};

export default MenuCard;