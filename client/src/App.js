import "antd/dist/antd.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Items from "./pages/Items";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function App() {
  const cart_Items = useSelector((state) => state.cart.items);

  useEffect(() => {
    const setItems = () => {
      localStorage.setItem("cartItems", JSON.stringify(cart_Items));
    };
    setItems();
  }, [cart_Items]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/items" element={<Items />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
