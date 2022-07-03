import React, { useState, useEffect } from "react";
import Item from "../components/Item";
import DefaultLayout from "../components/DefaultLayout";
import { Row, Col } from "antd";
import axios from "axios";
const HomePage = () => {
  const [items, setItems] = useState([]);
  const getItems = async () => {
    const Items = await axios.get("/get-items");
    console.log("asdddddddddddddddddddddddddddddddddddddddddddddddddddd");
    setItems(Items.data);
  };
  useEffect(() => {
    getItems();
  }, []);
  console.log(items);
  return (
    <>
      <DefaultLayout>
        <Row>
          {items.map((item, i) => {
            return (
              <Col xs={12} lg={6} md={12} sm={6} key={i}>
                <Item item={item}></Item>
              </Col>
            );
          })}
        </Row>
      </DefaultLayout>
    </>
  );
};

export default HomePage;
