import { Layout } from "../../components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveProduct } from "../../features/productSlice";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mode } = useSelector((state) => state.darkMode);

  const addProduct = async (e) => {
    e.preventDefault();
    await dispatch(
      saveProduct({
        title,
        price,
      })
    );
    navigate("/");
  };

  return (
    <Layout>
      <div className="mx-20 min-h-screen">
        <form onSubmit={addProduct}>
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
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddProducts;
