import { configureStore } from "@reduxjs/toolkit";
import { commitsApi } from "./commitsApi";

export const store = configureStore({
    reducer: {
        [commitsApi.reducerPath]: commitsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(commitsApi.middleware)
})