import "antd/dist/antd.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Items from "./pages/Items";
function App() {
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
