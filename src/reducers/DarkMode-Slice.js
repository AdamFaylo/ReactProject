import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
    name: "Dark Mode",
    initialState: { isDark: false },
    reducers: {
        toggleDark: (state) => {
            state.isDark = !state.isDark
}
    }
})
export default darkModeSlice.reducer
export const { toggleDark } = darkModeSlice.actions;


