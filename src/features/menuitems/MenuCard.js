import { Card, CardImg, CardImgOverlay, CardTitle, CardBody } from "reactstrap";

const MenuCard = ({ menuitem }) => {
      const { image, name } = menuitem;
      return (
            <Card>
                  <CardImg width='100%' src={image} alt={name} />
                  <CardBody>
                        <CardTitle>{name}</CardTitle>
                  </CardBody>
            </Card>
      );
};

export default MenuCard;