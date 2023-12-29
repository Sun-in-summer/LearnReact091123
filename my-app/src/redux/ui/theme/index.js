import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: "theme",
    initialState: 'default',
    reducers: {
        switchTheme: (state, {payload}) => {
            return 'dark';
        }
    }
})