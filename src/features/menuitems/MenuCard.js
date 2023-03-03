import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const MenuCard = ({ menuitem }) => {
      const { image, name } = menuitem;
      return (
            <Card>
                  <CardImg width='100%' src={image} alt={name} />
                  <CardImgOverlay>
                        <CardTitle>{name}</CardTitle>
                  </CardImgOverlay>
            </Card>
      );
};

export default MenuCard;