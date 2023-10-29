"use client";

import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./features/postSlice";
import profileReducer from "./features/profileSlice";

export const store = configureStore({
    reducer: {
        post: postReducer,
        profile: profileReducer
    }

});
