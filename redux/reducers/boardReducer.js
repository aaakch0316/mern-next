import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    data: [],
    error: null
}


const boardSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
        addBoardRequest: (state, action) => {
            state.loading = true;
        },
        addBoardSuccess: (state, {payload}) => {
            state.loading = true;
            state.data = [...state.data, payload]
        },
        addBoardFailure: (state, {payload}) => {
            state.data = payload;
            state.loading = false;
        },
        delBoardRequest: (state, payload) => {
            state.loading = true
        },
        delBoardSuccess(state, {payload}){
            state.data = [...state.data, payload]
            state.loading = false;
        },
        delBoardFailure(state, {payload}){
            state.data = payload
            state.loading = false;
        }
    }
})

const { reducer, actions } = boardSlice;
export const boardActions = actions;
export default reducer;