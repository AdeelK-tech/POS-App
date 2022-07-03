import { React } from "react";
import { Button, Card } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { actions } from "../redux-store/cartItems-reducer";
const { Meta } = Card;
const Item = ({ item }) => {
  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(actions.addItem({ ...item }));
  };

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title={item.name} description="www.instagram.com" />
      <div className="item-button">
        <Button onClick={addItemHandler}>Add to Cart</Button>
      </div>
    </Card>
  );
};

export default Item;
