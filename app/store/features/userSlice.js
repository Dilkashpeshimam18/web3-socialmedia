"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
    account: null
}

const UserSlice = createSlice({
    name: 'user',
    initialState:initialUserState,
    reducers: {}
})

export const userAction = UserSlice.actions
export default UserSlice.reducer