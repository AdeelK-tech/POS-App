import React from "react";
import { Card } from "antd";
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
    </Card>
  );
};

export default Item;
