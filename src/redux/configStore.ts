import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./modules/productSlice";
import userSlice from "./modules/userSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        product: productSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;