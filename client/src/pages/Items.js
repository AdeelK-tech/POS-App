import React from "react";

const Items = () => {
  const items = JSON.parse(localStorage.getItem("cartItems"));
  console.log(items);
  return <h1>Items</h1>;
};

export default Items;
