import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios.get("http://localhost:5000/products");
    return response.data;
  }
);

export const saveProduct = createAsyncThunk(
  "products/saveProduct",
  async ({ title, price }) => {
    const response = await axios.post("http://localhost:5000/products", {
      title,
      price,
    });
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  (id) => {
    axios.delete(`http://localhost:5000/products/${id}`);
    return id;
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, title, price }) => {
    const response = await axios.patch(`http://localhost:5000/products/${id}`, {
      title,
      price,
    });
    return response.data;
  }
);

const productEntity = createEntityAdapter({
  selectId: (product) => product.id,
});

const productSlice = createSlice({
  name: "product",
  initialState: productEntity.getInitialState(),
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      productEntity.setAll(state, action.payload);
    },
    [saveProduct.fulfilled]: (state, action) => {
      productEntity.addOne(state, action.payload);
    },
    [deleteProduct.fulfilled]: (state, action) => {
      productEntity.removeOne(state, action.payload);
    },
    [updateProduct.fulfilled]: (state, action) => {
      productEntity.updateOne(state, {
        id: action.payload,
        updates: action.payload,
      });
    },
  },
});

export const productSelector = productEntity.getSelectors(
  (state) => state.product
); //state.product harus sama dengan nama product di store
export default productSlice.reducer;
