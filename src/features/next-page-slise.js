import { createSlice } from "@reduxjs/toolkit";

const nextPage = createSlice({
    name: "Next Page",
    login: true,
    initialState: { page: 1 },
    reducers: {
        upPage: (state) => {
            state.page ++ 
            state.login = !state.login
            console.log( state.page ) 
        },
        downPage: (state) => {
            state.page--
        }

    }
})
export default nextPage.reducer
export const { upPage, downPage } = nextPage.actions;