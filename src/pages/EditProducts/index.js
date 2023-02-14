import { Layout } from "../../components";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  productSelector,
  updateProduct,
} from "../../features/productSlice";
import { useParams, useNavigate } from "react-router-dom";

const EditProducts = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const product = useSelector((state) => productSelector.selectById(state, id));
  const { mode } = useSelector((state) => state.darkMode);

  useEffect(() => {
    dispacth(getProducts());
  }, [dispacth]);

  useEffect(() => {
    if (product) {
      setTitle(product.title);
      setPrice(product.price);
    }
  }, [product]);

  const editProduct = async (e) => {
    e.preventDefault();
    await dispacth(updateProduct({ id, title, price }));
    navigate("/");
  };
  return (
    <Layout>
      <div className="mx-20 min-h-screen">
        <form onSubmit={editProduct}>
          <div className="space-y-8 text-2xl">
            <div className="w-full space-y-2">
              <label htmlFor="title">Title</label>
              <input
                required
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`border-2 border-slate-400 w-full h-10 rounded-md px-2 text-xl ${
                  mode ? "text-black" : "text-black"
                }`}
              />
            </div>
            <div className="w-full space-y-2">
              <label htmlFor="price">Price</label>
              <input
                required
                type="text"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className={`border-2 border-slate-400 w-full h-10 rounded-md px-2 text-xl ${
                  mode ? "text-black" : "text-black"
                }`}
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-800 text-slate-50 px-6 py-1 rounded-sm text-lg font-bold"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default EditProducts;
