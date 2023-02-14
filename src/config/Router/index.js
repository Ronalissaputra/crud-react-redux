import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddProducts, EditProducts, ShowProducts } from "../../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowProducts />} />
        <Route path="/add" element={<AddProducts />} />
        <Route path="/edit/:id" element={<EditProducts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
