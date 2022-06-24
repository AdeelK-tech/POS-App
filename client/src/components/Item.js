import React from "react";
import { Button, Card } from "antd";
const { Meta } = Card;
const Item = ({ item }) => {
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
        <Button>Add to Cart</Button>
      </div>
    </Card>
  );
};

export default Item;
