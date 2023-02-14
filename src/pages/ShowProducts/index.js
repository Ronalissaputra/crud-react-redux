import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getProducts,
  productSelector,
  deleteProduct,
} from "../../features/productSlice";
import { Link } from "react-router-dom";
import { Layout } from "../../components";

const ShowProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(productSelector.selectAll);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Layout>
      <div className="shadow-lg m-20 p-5 space-y-6">
        <Link
          to="/add"
          className="px-8 py-2 bg-green-500 hover:bg-green-800 rounded-sm text-lg font-bold text-white"
        >
          Add New
        </Link>
        <table className="table w-full">
          <thead>
            <tr className="flex justify-between text-left text-xl">
              <th className="w-[300px]">No</th>
              <th className="w-full">Product</th>
              <th className="w-full">Price</th>
              <th className="w-[800px]">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={product.id}
                className={`flex justify-between text-lg border-t items-center py-2 ${
                  index % 2 === 0 ? "bg-slate-200" : ""
                }`}
              >
                <td className="w-[300px]">{index + 1}</td>
                <td className={`w-full`}>{product.title}</td>
                <td className="w-full">IDR {product.price},00</td>
                <td className="w-[800px] text-white flex space-x-2">
                  <Link
                    to={`/edit/${product.id}`}
                    className="bg-green-700 hover:bg-green-800 px-5 rounded-sm"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => dispatch(deleteProduct(product.id))}
                    className="bg-red-600 hover:bg-red-800 px-5 rounded-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default ShowProducts;
