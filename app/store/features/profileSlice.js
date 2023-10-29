"use client"

import { createSlice } from "@reduxjs/toolkit";

const initialProfileState = {
    profiles: []
}

const ProfileSlice = createSlice({
    name: 'profile',
    initialProfileState,
    reducers: {}
})

export const profileAction = ProfileSlice.actions
export default ProfileSlice.reducer