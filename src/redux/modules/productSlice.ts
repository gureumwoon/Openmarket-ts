import { apis } from "../../shared/api";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    count: 1,
    productOne: [],
    sellerProducts: [],
    searchProduct: [],
}

export const getProductDB = createAsyncThunk(
    "product/getProduct",
    async (page, thunkAPI) => {
        try {
            const res = await apis.getProduct(page)
            return { products: res.data.results, count: res.data.count };
        } catch (error) {
            console.log("상품에러", error)
            return thunkAPI.rejectWithValue(error);
        }
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProductDB.fulfilled, (state, action) => {
                state.products = action.payload.products;
                state.count = action.payload.count;
            })
    }
})

export default productSlice.reducer;