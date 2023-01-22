import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from '../CommonUnits/apiurl'
import { STATUS } from '../CommonUnits/status';

const initialState = {
    categories: [],
    categoriesStatus: "",
    categoriesProduct: [],
    categoriesProductStatus: ""
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncCategories.pending, (state, action) => {
                state.categoriesStatus = STATUS.LOADING;
            })

            .addCase(fetchAsyncCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.categoriesStatus = STATUS.SUCCEEDED;
            })
            .addCase(fetchAsyncCategories.rejected, (state, action) => {
                state.categoriesStatus = STATUS.FAILED;
            })

            .addCase(fetchAsyncCategoriesProduct.pending, (state, action) => {
                state.categoriesProductStatus = STATUS.LOADING;
            })
            .addCase(fetchAsyncCategoriesProduct.fulfilled, (state, action) => {
                state.productSingle = action.payload;
                state.categoriesProductStatus = STATUS.SUCCEEDED;
            })
            .addCase(fetchAsyncCategoriesProduct.rejected, (state, action) => {
                state.categoriesProductStatus = STATUS.FAILED;
            })
    }
})

export const fetchAsyncCategories = createAsyncThunk('category/fetch', async () => {
    const response = await fetch(`${BASE_URL}/products/categories`);
    const data = await response.json();
    return data;
});

export const fetchAsyncCategoriesProduct = createAsyncThunk('category-product/fetch', async (category) => {
    const response = await fetch(`${BASE_URL}/products/category/${category}`)
    const data = await response.json();
    return data;
});

export const getAllCategory = (state) => state.category.categories;
export const getAllCategoryStatus = (state) => state.category.categoriesStatus;

export const getProductByCategory = (state) => state.category.categoriesProduct;
export const getProductByCategoryStatus = (state) => state.category.categoriesProductStatus;

export default categorySlice.reducer;



