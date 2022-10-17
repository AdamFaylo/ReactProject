import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    comments: [
        {
            id:1,
            date: '2019-05-18',
            userName:'Jackie Chan',
            comment :"Watched an awesome movie yesterday! (Spiderman 3)",
        },
        {
            id:2,
            date: '2021-12-06',
            userName:'Yossi Lavi',
            comment :"Watched last day an awesome movie! (300)",
        },
        {
            id:3,
            date: 'Nov 2022',
            userName:'Tomer bozaglo',
            comment :"Watched an awesome movie yesterday! (Prey)",
        },
        {
            id:4,
            date: 'jan 2019',
            userName:'Ronen Yosopov',
            comment :"Watched an awesome movie yesterday! (Thor)",
        },
    ]
}

const commentsSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {
        addComment: (state,{payload}) =>{
            state.comments.push(payload)
        },
        deleteComment:(state,{payload}) => {
            const idx = state.comments.findIndex(c => c.id === payload)
            if(idx >= 0)
                state.comments.splice(idx,1)  
        },
        editComment:(state,{payload}) => {
            const idx = state.comments.findIndex(c => c.id === payload.id)
            if(idx >=0)
             state.comments[idx] = payload
        }
    }
})

export default commentsSlice.reducer
export const {addComment,deleteComment,editComment} = commentsSlice.actions