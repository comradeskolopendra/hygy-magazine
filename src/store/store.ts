import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slice";

const store = configureStore({
    reducer: appReducer,
    devTools: true,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat();
    },
});

export default store;