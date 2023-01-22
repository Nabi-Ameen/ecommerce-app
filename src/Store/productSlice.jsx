import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from '../CommonUnits/apiurl'
import { STATUS } from '../CommonUnits/status';

const initialState = {
    product: [],
    productsStatus: "",
    productSingle: [],
    productSingleStatus: ""
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder
        .addCase(fetchAsyncProducts.pending, (state, action) => {
                state.productSingleStatus = STATUS.LOADING;
            })

        .addCase(fetchAsyncProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.productSingleStatus = STATUS.SUCCEEDED;
            })
        .addCase(fetchAsyncProducts.rejected, (state, action) => {
                state.productSingleStatus = STATUS.FAILED;
            })

        .addCase(fetchAsyncSingleProducts.pending, (state, action) => {
                state.productSingleStatus = STATUS.LOADING;
            })
        .addCase(fetchAsyncSingleProducts.fulfilled, (state, action) => {
                state.productSingle = action.payload;
                state.productSingleStatus = STATUS.SUCCEEDED;
            })
        .addCase(fetchAsyncSingleProducts.rejected, (state, action) => {
                state.productSingleStatus = STATUS.FAILED;
            })
    }
})

export const fetchAsyncProducts = createAsyncThunk('products/fetch', async (limit) => {
    const response = await fetch(`${BASE_URL}/products?limit=${limit}`);
    const data = await response.json();
    return data.products;
});

export const fetchAsyncSingleProducts = createAsyncThunk('products-single/fetch', async (id) => {
    const response = await fetch(`${BASE_URL}/products/${id}`)
    const data = await response.json();
    return data;
});

export const getAllProducts = (state) => state.product.products;
export const getAllProductsStatus = (state) => state.product.productsStatus;

export const getProductSingle = (state) => state.product.productSingle;
export const getProductSingleStatus = (state) => state.product.productSingleStatus;

export default productSlice.reducer;



