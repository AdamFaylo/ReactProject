import { createSlice } from "@reduxjs/toolkit";

const LogInSlice = createSlice({
    name: "Login",
    initialState: { show: false },
    reducers: {
        toggleShow: (state) => {
            state.show = !state.show
}
    }
})
export default LogInSlice.reducer
export const { toggleShow } = LogInSlice.actions;