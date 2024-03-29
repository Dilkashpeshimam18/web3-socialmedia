"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialPostState = {
    posts: []
}

const PostSlice = createSlice({
    name: 'post',
    initialState:initialPostState,
    reducers: {}
})

export const postAction = PostSlice.actions
export default PostSlice.reducer